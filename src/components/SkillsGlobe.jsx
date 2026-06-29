import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SKILLS_DATA = [
    // Frontend
    { name: 'HTML5', level: 90, category: 'Frontend', color: '#FF6B35', lat: 35.6762, lng: 139.6503 },
    { name: 'CSS3', level: 85, category: 'Frontend', color: '#0099FF', lat: 51.5074, lng: -0.1278 },
    { name: 'JavaScript', level: 80, category: 'Frontend', color: '#FFD700', lat: 48.8566, lng: 2.3522 },
    { name: 'React', level: 75, category: 'Frontend', color: '#61DAFB', lat: 40.7128, lng: -74.0060 },
    // Backend
    { name: 'Node.js', level: 75, category: 'Backend', color: '#68A063', lat: 35.0116, lng: 135.7681 },
    { name: 'Python', level: 80, category: 'Backend', color: '#3776AB', lat: -33.8688, lng: 151.2093 },
    { name: 'Express.js', level: 70, category: 'Backend', color: '#000000', lat: 1.3521, lng: 103.8198 },
    { name: 'PHP', level: 65, category: 'Backend', color: '#777BB4', lat: 28.6139, lng: 77.2090 },
    // Database
    { name: 'MongoDB', level: 75, category: 'Database', color: '#13AA52', lat: 55.7558, lng: 37.6173 },
    { name: 'MySQL', level: 80, category: 'Database', color: '#00758F', lat: 37.7749, lng: -122.4194 },
    // Tools
    { name: 'Git', level: 85, category: 'Tools', color: '#F1502F', lat: 19.0760, lng: 72.8777 },
    { name: 'GitHub', level: 85, category: 'Tools', color: '#181717', lat: -37.8136, lng: 144.9631 },
    { name: 'VS Code', level: 90, category: 'Tools', color: '#007ACC', lat: 52.5200, lng: 13.4050 },
    { name: 'Figma', level: 70, category: 'Tools', color: '#F24E1E', lat: 38.0816, lng: 23.6267 },
];

const SkillsGlobe = () => {
    const containerRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const globeRef = useRef(null);
    const pointsRef = useRef(null);
    const glowMeshRef = useRef(null);
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const skills = useMemo(() => SKILLS_DATA, []);

    useEffect(() => {
        if (!inView || !containerRef.current) return;

        const width = containerRef.current.clientWidth;
        const height = 500;
        const scene = new THREE.Scene();
        sceneRef.current = scene;

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 2.5;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 1);
        renderer.shadowMap.enabled = true;
        containerRef.current.appendChild(renderer.domElement);
        rendererRef.current = renderer;

        // Globe geometry with higher detail
        const geometry = new THREE.IcosahedronGeometry(1, 48);
        const material = new THREE.MeshStandardMaterial({
            color: 0x1a1a2e,
            emissive: 0x0a0a1a,
            metalness: 0.3,
            roughness: 0.8,
            wireframe: false
        });
        const globe = new THREE.Mesh(geometry, material);
        globe.castShadow = true;
        scene.add(globe);
        globeRef.current = globe;

        // Glow effect around globe
        const glowGeometry = new THREE.IcosahedronGeometry(1.05, 32);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: 0x0066ff,
            transparent: true,
            opacity: 0.1,
            wireframe: false
        });
        const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
        scene.add(glowMesh);
        glowMeshRef.current = glowMesh;

        // Enhanced star field
        const starsGeometry = new THREE.BufferGeometry();
        const starsMaterial = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.03,
            sizeAttenuation: true,
            transparent: true,
            opacity: 0.8
        });
        const starsVertices = [];
        for (let i = 0; i < 2000; i++) {
            const x = (Math.random() - 0.5) * 200;
            const y = (Math.random() - 0.5) * 200;
            const z = (Math.random() - 0.5) * 200;
            starsVertices.push(x, y, z);
        }
        starsGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(starsVertices), 3));
        const stars = new THREE.Points(starsGeometry, starsMaterial);
        scene.add(stars);

        // Advanced lighting
        const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
        light1.position.set(10, 5, 5);
        light1.castShadow = true;
        scene.add(light1);

        const light2 = new THREE.DirectionalLight(0x4488ff, 0.6);
        light2.position.set(-10, -5, -5);
        scene.add(light2);

        const ambientLight = new THREE.AmbientLight(0x333357, 0.6);
        scene.add(ambientLight);

        // Add skill points with animation
        const skillMeshes = [];
        const skillSphereGeometry = new THREE.SphereGeometry(0.05, 16, 16);

        skills.forEach((skill, index) => {
            const lat = (skill.lat * Math.PI) / 180;
            const lng = (skill.lng * Math.PI) / 180;
            const x = Math.cos(lat) * Math.cos(lng);
            const y = Math.sin(lat);
            const z = Math.cos(lat) * Math.sin(lng);

            // Main sphere
            const material = new THREE.MeshStandardMaterial({
                color: skill.color,
                emissive: skill.color,
                emissiveIntensity: 0.6,
                metalness: 0.8,
                roughness: 0.2
            });
            const sphere = new THREE.Mesh(skillSphereGeometry, material);
            sphere.position.set(x * 1.15, y * 1.15, z * 1.15);
            sphere.castShadow = true;
            scene.add(sphere);

            // Glow ring around sphere
            const ringGeometry = new THREE.TorusGeometry(0.08, 0.01, 8, 100);
            const ringMaterial = new THREE.MeshBasicMaterial({
                color: skill.color,
                transparent: true,
                opacity: 0.6
            });
            const ring = new THREE.Mesh(ringGeometry, ringMaterial);
            ring.position.copy(sphere.position);
            ring.rotation.x = Math.random() * Math.PI;
            ring.rotation.y = Math.random() * Math.PI;
            scene.add(ring);

            skillMeshes.push({
                sphere,
                ring,
                originalScale: 1,
                index,
                pulsePhase: Math.random() * Math.PI * 2
            });
        });

        // Animation loop with smooth rotation and pulsing points
        let animationId;
        let rotationSpeed = 0.0002;
        let time = 0;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            time += 0.016;

            // Smooth rotation
            globe.rotation.y += rotationSpeed;
            glowMesh.rotation.y -= rotationSpeed * 0.5;

            // Gentle bobbing of glow
            glowMesh.material.opacity = 0.1 + Math.sin(Date.now() * 0.0005) * 0.05;

            // Animate skill spheres with pulsing and rotation
            skillMeshes.forEach((skillMesh, i) => {
                // Pulse effect
                const pulse = 1 + Math.sin(time * 2 + skillMesh.pulsePhase) * 0.3;
                skillMesh.sphere.scale.set(pulse, pulse, pulse);
                skillMesh.sphere.material.emissiveIntensity = 0.4 + Math.sin(time * 1.5 + skillMesh.pulsePhase) * 0.3;

                // Ring rotation
                skillMesh.ring.rotation.x += 0.003;
                skillMesh.ring.rotation.y += 0.005;
                skillMesh.ring.material.opacity = 0.4 + Math.sin(time * 1.8 + skillMesh.pulsePhase) * 0.3;
            });

            renderer.render(scene, camera);
        };
        animate();

        // Mouse interaction
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();

        const onMouseMove = (event) => {
            const rect = renderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            // Check intersection with skill spheres
            const spheres = skillMeshes.map(sm => sm.sphere);
            const intersects = raycaster.intersectObjects(spheres);

            if (intersects.length > 0) {
                const sphere = intersects[0].object;
                const skillMesh = skillMeshes.find(sm => sm.sphere === sphere);
                if (skillMesh) {
                    setHoveredSkill(skills[skillMesh.index]);
                    setHoveredIndex(skillMesh.index);
                    rotationSpeed = 0.0001;
                }
            } else {
                setHoveredSkill(null);
                setHoveredIndex(null);
                rotationSpeed = 0.0002;
            }
        };

        renderer.domElement.addEventListener('mousemove', onMouseMove);

        // Handle resize
        const handleResize = () => {
            const newWidth = containerRef.current?.clientWidth || width;
            const newHeight = 500;
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(newWidth, newHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            renderer.domElement.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', handleResize);
            if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            geometry.dispose();
            material.dispose();
            skillSphereGeometry.dispose();
            starsGeometry.dispose();
            skillMeshes.forEach(sm => {
                sm.sphere.material.dispose();
                sm.ring.material.dispose();
            });
        };
    }, [inView, skills]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8
            }
        }
    };

    const categoryColors = {
        'Frontend': '#FF6B35',
        'Backend': '#68A063',
        'Database': '#13AA52',
        'Tools': '#007ACC'
    };

    const categories = [...new Set(skills.map(s => s.category))];

    return (
        <section className="py-16 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Interactive <span className="text-gradient">Tech Stack</span>
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Explore my skills on an interactive 3D globe - hover over points to see details
                        </p>
                    </div>

                    {/* Globe Container */}
                    <div className="relative mb-12">
                        <div
                            ref={containerRef}
                            className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl dark:shadow-3xl border border-gray-200 dark:border-gray-700"
                            style={{
                                backgroundColor: '#0a0a0a'
                            }}
                        />

                        {/* Skill Info Card */}
                        {hoveredSkill && (
                            <motion.div
                                className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                                    {hoveredSkill.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    {hoveredSkill.category}
                                </p>
                                <div className="w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full rounded-full transition-all duration-300"
                                        style={{
                                            width: `${hoveredSkill.level}%`,
                                            backgroundColor: hoveredSkill.color
                                        }}
                                    />
                                </div>
                                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                                    {hoveredSkill.level}% proficiency
                                </p>
                            </motion.div>
                        )}
                    </div>

                    {/* Legend */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map(category => (
                            <motion.div
                                key={category}
                                className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: categoryColors[category] }}
                                />
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {category}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsGlobe;
