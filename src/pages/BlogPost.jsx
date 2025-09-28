import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
  {
    title: 'Dev Nights Confessions',
    slug: 'dev-nights-confessions',
    date: '2025-09-06',
  },
  {
    title: 'Salt in the Wards, Light in the Shadows',
    slug: 'salt-in-the-wards',
    date: '2025-09-08',
  },
];

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`/blog/${slug}.md`)
      .then((res) => res.text())
      .then(setContent);
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-10 text-center text-red-600">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p>Sorry, the blog post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <section className="max-w-2xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{post.date}</p>
      <article className="prose prose-lg dark:prose-invert prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:mb-4 prose-li:mb-2 prose-strong:font-bold prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300">
        {/* Render markdown as HTML */}
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
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
    </section>
  );
};

export default BlogPost;
