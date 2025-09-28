import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'Flask Deployment for Beginners',
    excerpt: 'A step-by-step guide to getting your Flask app live on the web, with tips for Vercel and Heroku.',
    slug: 'flask-deployment-for-beginners',
    date: '2025-08-15',
  },
  {
    title: 'Building Moodly: From Idea to Launch',
    excerpt: 'How I built Moodly, a music recommendation app, from inspiration to launch.',
    slug: 'building-moodly-from-idea-to-launch',
    date: '2025-08-10',
  },
  {
    title: 'Faith in Tech',
    excerpt: 'How faith and scripture guide my coding, learning, and purpose in tech.',
    slug: 'faith-in-tech',
    date: '2025-08-20',
  },
  {
    title: 'Returning to Campus: A Heart Full of Growth, A Spirit Ready to Lead',
    excerpt: 'Reflections on a transformative holiday, serving in tech and church, and stepping into a new school season with faith and purpose.',
    slug: 'returning-to-campus',
    date: '2025-08-28',
  },
  {
    title: 'Dev Nights Confessions',
    excerpt: 'A loyal laptop, late nights, and the code that keeps me going.',
    slug: 'dev-nights-confessions',
    date: '2025-09-06',
  },
  {
    title: 'When the Chase Fades: A Quiet Revolution in Me',
    excerpt: 'How my perspective on relationships, purpose, and faith has shifted from chasing to building.',
    slug: 'when-the-chase-fades',
    date: '2025-09-07',
  },
  {
    title: 'Salt in the Wards, Light in the Shadows',
    excerpt: 'A hospital visit turns into a lesson on faith, courage, and being present for others.',
    slug: 'salt-in-the-wards',
    date: '2025-09-08',
  },

];

const BlogList = () => (
  <section className="max-w-2xl mx-auto py-10">
    <h2 className="text-3xl font-bold mb-6 text-center">Blog</h2>
    <div className="space-y-6">
      {posts.map((post, idx) => (
        <div key={idx} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold mb-1 text-black dark:text-white">{post.title}</h3>
          <p className="text-xs text-gray-500 mb-2">{post.date}</p>
          <p className="mb-2 text-black dark:text-white">{post.excerpt}</p>
          <Link to={`/blog/${post.slug}`} className="text-blue-600 underline">Read More</Link>
        </div>
      ))}
    </div>
  </section>
);

export default BlogList;
