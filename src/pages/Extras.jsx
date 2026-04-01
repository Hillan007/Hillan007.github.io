import React, { Suspense, lazy, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const OpenSource = lazy(() => import('../components/OpenSource'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const TabLoader = () => (
  <div className="py-8 text-center text-gray-500">Loading tab...</div>
);

const Extras = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('leadership');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'opensource' || tab === 'leadership' || tab === 'testimonials') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Beyond Coding</h2>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4 mb-8 border-b border-gray-300 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('leadership')}
          className={`px-6 py-3 font-medium transition-colors ${activeTab === 'leadership'
            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
        >
          Leadership
        </button>
        <button
          onClick={() => setActiveTab('opensource')}
          className={`px-6 py-3 font-medium transition-colors ${activeTab === 'opensource'
            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
        >
          Open Source
        </button>
        <button
          onClick={() => setActiveTab('testimonials')}
          className={`px-6 py-3 font-medium transition-colors ${activeTab === 'testimonials'
            ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
            : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
            }`}
        >
          Testimonials
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'leadership' && (
        <div className="text-center">
          <p className="mb-8 text-lg text-black dark:text-white">
            Apart from coding, I am a leader who inspires and enjoys teamwork. I believe in empowering others, building strong teams, and making a positive impact beyond technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Leadership Card 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/Gents.png"
                alt="Team Building"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Team Building</h3>
                  <p className="text-sm opacity-90">
                    Leading and mentoring fellow students, fostering collaboration and growth within our tech community
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/leader.jpg"
                alt="Leadership in Action"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Leadership in Action</h3>
                  <p className="text-sm opacity-90">
                    Taking initiative in organizing events and guiding teams towards achieving shared goals
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/BBS.png"
                alt="Community Impact"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Community Impact</h3>
                  <p className="text-sm opacity-90">
                    Creating positive change beyond the screen through community service and faith-based initiatives
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card 4 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/Aids day.png"
                alt="Health Awareness"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Health Advocacy</h3>
                  <p className="text-sm opacity-90">
                    Raising awareness on critical health issues and championing community wellness initiatives
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card 5 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/mental health day.png"
                alt="Mental Health Support"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Mental Wellness</h3>
                  <p className="text-sm opacity-90">
                    Supporting mental health awareness and creating safe spaces for open conversations within communities
                  </p>
                </div>
              </div>
            </div>

            {/* Leadership Card 6 */}
            <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="/Images/aids day2.png"
                alt="Social Responsibility"
                loading="lazy"
                decoding="async"
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">Social Responsibility</h3>
                  <p className="text-sm opacity-90">
                    Leading meaningful campaigns to create awareness and drive social change in society
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'opensource' && (
        <Suspense fallback={<TabLoader />}>
          <OpenSource />
        </Suspense>
      )}

      {activeTab === 'testimonials' && (
        <Suspense fallback={<TabLoader />}>
          <Testimonials />
        </Suspense>
      )}
    </main>
  );
};

export default Extras;
