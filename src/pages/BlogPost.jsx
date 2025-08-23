import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      <div className="prose max-w-none text-black dark:text-white">
        {/* Simple markdown rendering, can be improved with a library */}
        <pre className="bg-transparent text-black dark:text-white whitespace-pre-wrap">{content}</pre>
      </div>
      {/* Embed Moodly video if this is the Moodly blog */}
      {slug === 'building-moodly-from-idea-to-launch' && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Watch Moodly in Action</h3>
          <video controls className="w-full rounded-lg shadow-lg">
            <source src="/vids/Moodly - Mental Health & Wellness Tracker - Brave 2025-07-24 15-05-27.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </main>
  );
};

export default BlogPost;
