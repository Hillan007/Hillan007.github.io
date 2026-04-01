export const BLOG_POSTS = [
    {
        title: 'Flask Deployment for Beginners',
        excerpt: 'A step-by-step guide to getting your Flask app live on the web, with tips for Vercel and Heroku.',
        slug: 'flask-deployment-for-beginners',
        date: '2025-08-15',
        category: 'Tech',
        tags: ['Flask', 'Deployment', 'Beginner Guide'],
    },
    {
        title: 'Building Moodly: From Idea to Launch',
        excerpt: 'How I built Moodly, a music recommendation app, from inspiration to launch.',
        slug: 'building-moodly-from-idea-to-launch',
        date: '2025-08-10',
        category: 'Build in Public',
        tags: ['Product', 'Startup', 'JavaScript'],
    },
    {
        title: 'Faith in Tech',
        excerpt: 'How faith and scripture guide my coding, learning, and purpose in tech.',
        slug: 'faith-in-tech',
        date: '2025-08-20',
        category: 'Faith',
        tags: ['Faith', 'Purpose', 'Tech Journey'],
    },
    {
        title: 'Returning to Campus: A Heart Full of Growth, A Spirit Ready to Lead',
        excerpt: 'Reflections on a transformative holiday, serving in tech and church, and stepping into a new school season with faith and purpose.',
        slug: 'returning-to-campus',
        date: '2025-08-28',
        category: 'Life',
        tags: ['Campus', 'Leadership', 'Growth'],
    },
    {
        title: 'Dev Nights Confessions',
        excerpt: 'A loyal laptop, late nights, and the code that keeps me going.',
        slug: 'dev-nights-confessions',
        date: '2025-09-06',
        category: 'Tech',
        tags: ['Developer Life', 'Motivation', 'Coding'],
    },
    {
        title: 'When the Chase Fades: A Quiet Revolution in Me',
        excerpt: 'How my perspective on relationships, purpose, and faith has shifted from chasing to building.',
        slug: 'when-the-chase-fades',
        date: '2025-09-07',
        category: 'Faith',
        tags: ['Reflection', 'Purpose', 'Faith'],
    },
    {
        title: 'Salt in the Wards, Light in the Shadows',
        excerpt: 'A hospital visit turns into a lesson on faith, courage, and being present for others.',
        slug: 'salt-in-the-wards',
        date: '2025-09-08',
        category: 'Faith',
        tags: ['Service', 'Compassion', 'Reflection'],
    },
    {
        title: 'God\'s Timing is the Best',
        excerpt: 'Leading without a smartphone taught me that tools don\'t define leadership-the vessel does.',
        slug: 'gods-timing-is-the-best',
        date: '2026-02-27',
        category: 'Leadership',
        tags: ['Leadership', 'Faith', 'Personal Growth'],
    },
];

export const BLOG_CATEGORIES = [...new Set(BLOG_POSTS.map((post) => post.category))];
export const BLOG_TAGS = [...new Set(BLOG_POSTS.flatMap((post) => post.tags))];