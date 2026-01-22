import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import OpenSource from '../components/OpenSource';

const Extras = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('leadership');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'opensource' || tab === 'leadership') {
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
      </div>

      {/* Tab Content */}
      {activeTab === 'leadership' && (
        <div className="text-center">
          <p className="mb-8 text-lg text-black dark:text-white">
            Apart from coding, I am a leader who inspires and enjoys teamwork. I believe in empowering others, building strong teams, and making a positive impact beyond technology.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <img src="/Images/Gents.png" alt="Teamwork" className="w-60 h-40 object-cover rounded shadow" />
            <img src="/Images/leader.jpg" alt="Leadership" className="w-60 h-40 object-cover rounded shadow" />
            <img src="/Images/BBS.png" alt="Inspiration" className="w-60 h-40 object-cover rounded shadow" />
          </div>
        </div>
      )}

      {activeTab === 'opensource' && (
        <OpenSource />
      )}
    </main>
  );
};

export default Extras;
