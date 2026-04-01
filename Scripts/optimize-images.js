import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();

const imageTargets = [
    'public/Images/me2026.jpg',
    'public/Images/victor.jpg',
    'public/Images/moodly.png',
    'public/Images/Moodly2.0.png',
    'public/Images/homework.png',
    'public/Images/Unitrade.png',
    'public/Images/SPN.png',
    'public/Images/Gents.png',
    'public/Images/leader.jpg',
    'public/Images/BBS.png',
    'public/Images/Aids day.png',
    'public/Images/mental health day.png',
    'public/Images/aids day2.png',
    'src/assets/images/moodly.png',
    'src/assets/images/homework.png',
    'src/assets/images/Unitrade.png',
    'src/assets/images/victor.jpg',
];

const writeOptimizedVariants = async (relativePath) => {
    const inputPath = path.join(projectRoot, relativePath);
    const basePath = inputPath.replace(/\.[^.]+$/, '');

    try {
        await fs.access(inputPath);
    } catch {
        console.warn(`Skipped missing file: ${relativePath}`);
        return;
    }

    const pipeline = sharp(inputPath).rotate();
    await pipeline.webp({ quality: 78 }).toFile(`${basePath}.webp`);
    await pipeline.avif({ quality: 50 }).toFile(`${basePath}.avif`);
    console.log(`Optimized: ${relativePath}`);
};

const main = async () => {
    for (const target of imageTargets) {
        await writeOptimizedVariants(target);
    }
    console.log('Image optimization complete.');
};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});