import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_CATEGORIES, BLOG_POSTS, BLOG_TAGS } from '../data/blogPosts';

const BlogList = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeTag, setActiveTag] = useState('All');

  const filteredPosts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return BLOG_POSTS.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query);

      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      const matchesTag = activeTag === 'All' || post.tags.includes(activeTag);

      return matchesQuery && matchesCategory && matchesTag;
    }).sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [search, activeCategory, activeTag]);

  return (
    <section className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>

      <div className="mb-6 space-y-4">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search posts, tags, or categories..."
          className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-2 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="flex flex-wrap gap-2">
          {['All', ...BLOG_CATEGORIES].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-3 py-1 text-sm border transition ${activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {['All', ...BLOG_TAGS].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`rounded-full px-3 py-1 text-xs border transition ${activeTag === tag
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-black border-gray-900 dark:border-white'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700'
                }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500">No posts match your current filters.</p>
        )}

        {filteredPosts.map((post) => (
          <div key={post.slug} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">{post.title}</h3>
            <p className="text-xs text-gray-500 mb-2">{post.date} · {post.category}</p>
            <p className="mb-3 text-black dark:text-white">{post.excerpt}</p>

            <div className="mb-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-1 text-xs text-gray-700 dark:text-gray-200">
                  #{tag}
                </span>
              ))}
            </div>

            <Link to={`/blog/${post.slug}`} className="text-blue-600 underline">Read More</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogList;
