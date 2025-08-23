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
      {/* Embed Moodly video from Google Drive if this is the Moodly blog */}
      {slug === 'building-moodly-from-idea-to-launch' && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-center">Watch Moodly in Action</h3>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/1MEIKSId7w17cFx85hY5IY4LvGPCGZnQ1/preview"
              allow="autoplay"
              allowFullScreen
              className="w-full h-96 border-0"
              title="Moodly Demo Video"
            ></iframe>
          </div>
        </div>
      )}
    </main>
  );
};

export default BlogPost;
