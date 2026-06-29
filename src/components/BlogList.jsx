import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
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
    <section className="section-padding">
      <div className="container-custom max-w-3xl">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Blog <span className="text-gradient">&amp; Writing</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Thoughts on tech, engineering, and life.</p>
        </div>

        <div className="mb-8 space-y-4">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts, tags, or categories..."
            className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
          />

          <div className="flex flex-wrap gap-2">
            {['All', ...BLOG_CATEGORIES].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium border transition ${activeCategory === category
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-primary-400'
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
                className={`rounded-full px-3 py-1 text-xs font-medium border transition ${activeTag === tag
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-black border-gray-900 dark:border-white'
                    : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-gray-400'
                  }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          {filteredPosts.length === 0 && (
            <p className="text-center text-gray-500 py-10">No posts match your current filters.</p>
          )}

          {filteredPosts.map((post) => (
            <div
              key={post.slug}
              className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-medium px-2.5 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500">{post.date}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">{post.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 dark:bg-gray-700 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary-600 dark:text-primary-400 hover:gap-2 transition-all"
                >
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
