import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Flask Deployment for Beginners',
    excerpt: 'A step-by-step guide to getting your Flask app live on the web, with tips for Vercel and Heroku.',
    slug: 'flask-deployment-for-beginners',
  },
  {
    title: 'Building Moodly: From Idea to Launch',
    excerpt: 'How I built Moodly, a music recommendation app, from inspiration to launch.',
    slug: 'building-moodly-from-idea-to-launch',
  },

];

const BlogList = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">{post.title}</h3>
          <p className="mb-2 text-black dark:text-white">{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`} className="text-blue-600 underline">Read More</Link>
        </div>
      ))}
    </div>
  </section>
);

export default BlogList;
