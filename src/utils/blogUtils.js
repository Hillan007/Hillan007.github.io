export const slugify = (text = '') =>
    text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');

export const getTextFromChildren = (children) => {
    if (!children) return '';
    if (typeof children === 'string') return children;
    if (Array.isArray(children)) return children.map(getTextFromChildren).join('');
    if (typeof children === 'object' && children.props) return getTextFromChildren(children.props.children);
    return '';
};

export const stripMarkdown = (markdown = '') =>
    markdown
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/`[^`]*`/g, ' ')
        .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
        .replace(/[#>*_~-]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

export const estimateReadTime = (markdown = '', wordsPerMinute = 220) => {
    const cleanText = stripMarkdown(markdown);
    const wordCount = cleanText ? cleanText.split(/\s+/).length : 0;
    const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
    return { minutes, wordCount };
};

export const extractToc = (markdown = '') => {
    const headings = [];
    const lines = markdown.split('\n');

    lines.forEach((line) => {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (!match) return;

        const level = match[1].length;
        const text = match[2].replace(/[#`*_~]/g, '').trim();
        if (!text) return;

        headings.push({
            level,
            text,
            id: slugify(text),
        });
    });

    return headings;
};

export const getRelatedPosts = (allPosts, currentPost, limit = 3) => {
    const scored = allPosts
        .filter((post) => post.slug !== currentPost.slug)
        .map((post) => {
            const sharedTags = post.tags.filter((tag) => currentPost.tags.includes(tag)).length;
            const categoryMatch = post.category === currentPost.category ? 2 : 0;
            return {
                ...post,
                score: sharedTags + categoryMatch,
            };
        })
        .sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return new Date(b.date) - new Date(a.date);
        });

    return scored.slice(0, limit);
};