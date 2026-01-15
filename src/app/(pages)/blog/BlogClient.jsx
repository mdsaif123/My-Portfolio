"use client";
import React, { useMemo, useState } from "react";
import styles from "./BlogPage.module.css";
import Link from "next/link";

const POSTS_PER_PAGE = 8;

const posts = [
    {
        id: "1",
        title: "Liquid Glass Navbar in Next.js",
        excerpt: "Sticky nav with active indicator and iOS inspired glass links.",
        date: "2025-12-10",
        tag: "UI",
        href: "/blog/liquid-navbar",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=80",
        featured: true,
    },
    {
        id: "2",
        title: "Next.js Folder Structure That Scales",
        excerpt: "A clean structure for components, pages and reusable utilities.",
        date: "2025-12-04",
        tag: "Next.js",
        href: "/blog/next-structure",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
        featured: true,
    },
    {
        id: "3",
        title: "Responsive UI Checklist",
        excerpt: "Spacing, typography and breakpoints that always work.",
        date: "2025-11-21",
        tag: "Frontend",
        href: "/blog/responsive-checklist",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "4",
        title: "API Integration Patterns",
        excerpt: "Loading, errors, caching and clean data flow in apps.",
        date: "2025-11-10",
        tag: "API",
        href: "/blog/api-integration",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "5",
        title: "Secure REST API Basics",
        excerpt: "Validation, auth, rate-limiting and safe API habits.",
        date: "2025-10-28",
        tag: "Backend",
        href: "/blog/secure-rest-api",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "6",
        title: "OWASP Top 10 (Beginner)",
        excerpt: "Simple overview of common vulnerabilities and prevention.",
        date: "2025-10-12",
        tag: "Security",
        href: "/blog/owasp-basics",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "7",
        title: "Git Workflow for Projects",
        excerpt: "Branches, commits and a workflow that stays clean.",
        date: "2025-09-25",
        tag: "Git",
        href: "/blog/git-workflow",
        image: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "8",
        title: "Deploy Next.js on Vercel",
        excerpt: "Env vars, build settings and deployment tips.",
        date: "2025-09-08",
        tag: "Deploy",
        href: "/blog/vercel-deploy",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1400&q=80",
    },
    {
        id: "9",
        title: "MongoDB Schema Tips",
        excerpt: "Collection design ideas for real projects.",
        date: "2025-08-20",
        tag: "Database",
        href: "/blog/mongodb-schema",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1400&q=80",
    },
];

export default function BlogPage() {
    const [query, setQuery] = useState("");
    const [page, setPage] = useState(1);

    const { featured, normal } = useMemo(() => {
        const q = query.trim().toLowerCase();
        const filtered = posts.filter((p) =>
            `${p.title} ${p.excerpt} ${p.tag}`.toLowerCase().includes(q)
        );

        const featuredPosts = filtered.filter((p) => p.featured).slice(0, 2);
        const normalPosts = filtered.filter((p) => !p.featured);

        return { featured: featuredPosts, normal: normalPosts };
    }, [query]);

    const totalPages = Math.max(1, Math.ceil(normal.length / POSTS_PER_PAGE));
    const safePage = Math.min(page, totalPages);

    const paginated = useMemo(() => {
        const start = (safePage - 1) * POSTS_PER_PAGE;
        return normal.slice(start, start + POSTS_PER_PAGE);
    }, [normal, safePage]);

    const onSearch = (e) => {
        setQuery(e.target.value);
        setPage(1);
    };

    return (
        <main className={styles.page}>
            <section className={styles.container}>
                <header className={styles.header} data-aos="fade-up">
                    <h1 className={styles.title}> Our <span className={styles.blogText}>Blog</span></h1>
                    <p className={styles.subtitle}>
                        Learnings about full-stack development, UI, Next.js and security.
                    </p>

                    <div className={styles.searchWrap}>
                        <input
                            className={styles.search}
                            value={query}
                            onChange={onSearch}
                            placeholder="Search blogs by title, topic, or tag..."
                        />
                    </div>
                </header>

                {/* featured row */}
                {featured.length > 0 && (
                    <section className={styles.featuredGrid}>
                        {featured.map((p, i) => (
                            <article key={p.id} className={styles.simpleCard} data-aos="fade-up"
                                data-aos-delay={`${(i + 1) * 100}`}
                                data-aos-duration="600"
                                data-aos-easing="ease-out-cubic">
                                <Link href={p.href} className={styles.imageLink}>
                                    <img src={p.image} alt={p.title} className={styles.image} />
                                </Link>

                                <div className={styles.metaRow}>
                                    <span className={styles.tag}>{p.tag}</span>
                                    <span className={styles.meta}>{p.date}</span>
                                </div>

                                <h2 className={styles.cardTitle}>{p.title}</h2>
                                <p className={styles.cardDesc}>{p.excerpt}</p>

                                <Link href={p.href} className={styles.readBtn}>
                                    Read More
                                </Link>
                            </article>
                        ))}
                    </section>
                )}

                {/* normal grid */}
                <section className={styles.postsGrid} >
                    {paginated.map((p, i) => (
                        <article key={p.id} className={styles.simpleCard} data-aos="fade-up"
                            data-aos-delay={`${(i + 1) * 100}`}
                            data-aos-duration="600"
                            data-aos-easing="ease-out-cubic">
                            <Link href={p.href} className={styles.imageLink}>
                                <img src={p.image} alt={p.title} className={styles.image} />
                            </Link>

                            <div className={styles.metaRow}>
                                <span className={styles.tag}>{p.tag}</span>
                                <span className={styles.meta}>{p.date}</span>
                            </div>

                            <h3 className={styles.postTitle}>{p.title}</h3>
                            <p className={styles.postDesc}>{p.excerpt}</p>

                            <Link href={p.href} className={styles.readBtn}>
                                Read More
                            </Link>
                        </article>
                    ))}
                </section>

                {/* pagination */}
                <div className={styles.pagination}>
                    <button
                        className={styles.pageBtn}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={safePage === 1}
                    >
                        Prev
                    </button>

                    <div className={styles.pageInfo}>
                        Page <strong>{safePage}</strong> of <strong>{totalPages}</strong>
                    </div>

                    <button
                        className={styles.pageBtn}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={safePage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </section>
        </main>
    );
}
