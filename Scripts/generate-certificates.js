const fs = require('fs');
const path = require('path');

const repoRoot = path.join(__dirname, '..');
const certDir = path.join(repoRoot, 'public', 'certs');
const outFile = path.join(repoRoot, 'src', 'pages', 'Certificates.jsx');

function titleFromName(name) {
    const base = name.replace(/\.[^/.]+$/, '');
    return base
        .replace(/[-_]+/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

if (!fs.existsSync(certDir)) {
    console.error('certs directory not found:', certDir);
    process.exit(1);
}

const files = fs.readdirSync(certDir).filter(f => /\.(jpe?g|png|webp|pdf|svg)$/i.test(f));

const items = files.map((f, i) => ({
    id: i + 1,
    title: titleFromName(f),
    issuer: '',
    date: '',
    image: `/certs/${f}`,
    tags: [],
    verificationUrl: ''
}));

const fileContent = `import React, { useState, useMemo, useEffect, useRef } from 'react';

const sampleCertificates = ${JSON.stringify(items, null, 2)};

export default function Certificates() {
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selected, setSelected] = useState(null);
  const closeBtnRef = useRef(null);

  const allTags = useMemo(() => {
    const s = new Set();
    sampleCertificates.forEach(c => c.tags.forEach(t => s.add(t)));
    return ['All', ...Array.from(s)];
  }, []);

  const filtered = sampleCertificates.filter(c => {
    const matchesTag = activeTag === 'All' || c.tags.includes(activeTag);
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      c.title.toLowerCase().includes(q) ||
      c.issuer.toLowerCase().includes(q) ||
      (c.tags.join(' ').toLowerCase().includes(q));
    return matchesTag && matchesQuery;
  });

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelected(null);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (selected) closeBtnRef.current?.focus();
  }, [selected]);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <header className="mb-6">
        <h1 className="text-3xl font-semibold mb-2">Certificates</h1>
        <p className="text-gray-600 dark:text-gray-300">Professional certifications and course credentials — verified and downloadable.</p>
      </header>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={\`px-3 py-1 rounded-full text-sm border transition \${tag === activeTag
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700'
              }\`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search title, issuer or tags..."
            className="px-3 py-2 rounded border w-64 dark:bg-gray-800 dark:border-gray-700"
          />
          <div className="text-sm text-gray-500 dark:text-gray-400">{filtered.length} results</div>
        </div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(cert => (
          <article
            key={cert.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition overflow-hidden"
          >
            <div
              className="h-44 bg-gray-100 dark:bg-gray-700 overflow-hidden cursor-pointer"
              onClick={() => setSelected(cert)}
            >
              <img
                src={encodeURI(cert.image)}
                alt={cert.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{cert.title}</h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {cert.issuer} · <span className="font-mono">{cert.date}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map(t => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-3 border-t dark:border-gray-700 flex justify-end gap-2">
              <button
                onClick={() => setSelected(cert)}
                className="px-3 py-1 text-sm rounded bg-indigo-600 text-white"
              >
                View
              </button>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1 text-sm rounded border dark:border-gray-700"
              >
                Verify
              </a>
            </div>
          </article>
        ))}
      </section>

      {selected && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
          role="presentation"
        >
          <div
            className="bg-white dark:bg-gray-900 rounded-lg max-w-3xl w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-title"
          >
            <div className="flex justify-between items-start p-4 border-b dark:border-gray-700">
              <div>
                <h2 id="cert-title" className="text-xl font-semibold">{selected.title}</h2>
                <div className="text-sm text-gray-500 dark:text-gray-400">{selected.issuer} · {selected.date}</div>
              </div>
              <button
                ref={closeBtnRef}
                onClick={() => setSelected(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close certificate viewer"
              >
                Close
              </button>
            </div>

            <div className="p-4">
              <img src={encodeURI(selected.image)} alt={selected.title} className="w-full h-auto rounded" />
              <div className="mt-3 flex gap-2 justify-end">
                <a
                  href={encodeURI(selected.image)}
                  download
                  className="px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Download
                </a>
                <a
                  href={selected.verificationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border rounded"
                >
                  Verify
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
`;

fs.writeFileSync(outFile, fileContent, 'utf8');
console.log('Wrote', outFile);
`;

fs.writeFileSync(__filename, fs.readFileSync(__filename)); // noop to satisfy editors
console.log('Generate script created.'); 