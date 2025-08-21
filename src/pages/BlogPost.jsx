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
    </main>
  );
};

export default BlogPost;
