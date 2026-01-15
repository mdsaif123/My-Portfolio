import BlogClient from "./BlogClient";

export const metadata = {
    title: "Blog | Md Saif",
    description:
        "Read Md Saif’s blog about full-stack development, Next.js, UI engineering, and web security learning.",
    alternates: { canonical: "/blog" },
    openGraph: {
        title: "Blog | Md Saif",
        description:
            "Articles on Next.js, full-stack development, UI, and web security learning.",
        url: "/blog",
        type: "website",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Md Saif Blog",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blog | Md Saif",
        description:
            "Articles on Next.js, full-stack development, UI, and web security learning.",
        images: ["/og.png"],
    },
};

export default function Page() {
    return <BlogClient />;
}
