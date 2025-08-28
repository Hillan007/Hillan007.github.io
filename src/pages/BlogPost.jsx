import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

// Blog post metadata (keep in sync with BlogList.jsx)
const posts = [
  {
    title: 'Flask Deployment for Beginners',
    slug: 'flask-deployment-for-beginners',
    date: '2025-08-15',
  },
  {
    title: 'Building Moodly: From Idea to Launch',
    slug: 'building-moodly-from-idea-to-launch',
    date: '2025-08-10',
  },
  {
    title: 'Faith in Tech',
    slug: 'faith-in-tech',
    date: '2025-08-20',
  },
  {
    title: 'Returning to Campus: A Heart Full of Growth, A Spirit Ready to Lead',
    slug: 'returning-to-campus',
    date: '2025-08-28',
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [slug]);

  // Find the post metadata by slug
  const postMeta = posts.find((p) => p.slug === slug);

  return (
    <main className="max-w-2xl mx-auto py-10 px-4">
      {postMeta && (
        <p className="text-xs text-gray-500 mb-4 text-right">{postMeta.date}</p>
      )}
      <div className="prose max-w-none text-black dark:text-white">
        {/* Render markdown as HTML */}
        <ReactMarkdown>{content}</ReactMarkdown>
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
