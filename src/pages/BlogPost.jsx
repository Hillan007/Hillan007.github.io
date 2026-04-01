import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/blogPosts';
import { estimateReadTime, extractToc, getRelatedPosts, getTextFromChildren, slugify } from '../utils/blogUtils';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const [content, setContent] = useState('');

  const toc = extractToc(content);
  const { minutes, wordCount } = estimateReadTime(content);
  const showToc = wordCount >= 500 || toc.length >= 4;
  const relatedPosts = post ? getRelatedPosts(BLOG_POSTS, post, 3) : [];

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
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{post.date} · {minutes} min read</p>
      <div className="mb-6 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 px-3 py-1 text-xs">
          {post.category}
        </span>
        {post.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1 text-xs">
            #{tag}
          </span>
        ))}
      </div>

      {showToc && (
        <aside className="mb-8 rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-gray-50 dark:bg-gray-900/50">
          <h2 className="text-lg font-semibold mb-3 text-black dark:text-white">Table of Contents</h2>
          <ul className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id} className={item.level === 3 ? 'ml-4' : ''}>
                <a href={`#${item.id}`} className="text-blue-600 hover:underline">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}

      <article className="prose prose-lg dark:prose-invert prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:mb-4 prose-li:mb-2 prose-strong:font-bold prose-blockquote:italic prose-blockquote:border-l-4 prose-blockquote:pl-4 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-300">
        {/* Render markdown as HTML */}
        <ReactMarkdown
          components={{
            h1: ({ children, ...props }) => {
              const id = slugify(getTextFromChildren(children));
              return <h1 id={id} {...props}>{children}</h1>;
            },
            h2: ({ children, ...props }) => {
              const id = slugify(getTextFromChildren(children));
              return <h2 id={id} {...props}>{children}</h2>;
            },
            h3: ({ children, ...props }) => {
              const id = slugify(getTextFromChildren(children));
              return <h3 id={id} {...props}>{children}</h3>;
            },
          }}
        >
          {content}
        </ReactMarkdown>
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

      {relatedPosts.length > 0 && (
        <section className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-8">
          <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Related Posts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <article key={related.slug} className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800">
                <p className="text-xs text-gray-500 mb-1">{related.date}</p>
                <h3 className="font-semibold text-black dark:text-white mb-2">{related.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{related.excerpt}</p>
                <Link to={`/blog/${related.slug}`} className="text-blue-600 underline text-sm">Read related post</Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </section>
  );
};

export default BlogPost;
