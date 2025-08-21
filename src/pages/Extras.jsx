import React from 'react';


const Extras = () => {
  return (
    <main className="max-w-3xl mx-auto py-12 text-center">
      <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Beyond Coding</h2>
      <p className="mb-8 text-lg text-black dark:text-white">
        Apart from coding, I am a leader who inspires and enjoys teamwork. I believe in empowering others, building strong teams, and making a positive impact beyond technology.
      </p>
      <div className="flex flex-wrap justify-center gap-8">
        <img src="/Images/Gents.png" alt="Teamwork" className="w-60 h-40 object-cover rounded shadow" />
        <img src="/Images/leader.jpg" alt="Leadership" className="w-60 h-40 object-cover rounded shadow" />
        <img src="/Images/BBS.png" alt="Inspiration" className="w-60 h-40 object-cover rounded shadow" />
      </div>
    </main>
  );
};

export default Extras;
