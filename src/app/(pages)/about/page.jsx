import AboutClient from "./AboutClient";

export const metadata = {
    title: "About | Md Saif",
    description:
        "About Md Saif — Full-Stack Web Developer. Education, experience (Rabs Net Solution internship), projects, and a security-aware mindset.",
    alternates: {
        canonical: "/about",
    },
    openGraph: {
        title: "About | Md Saif",
        description:
            "Learn more about Md Saif — Full-Stack Web Developer (Next.js, React, Node.js) with a security-aware mindset.",
        url: "/about",
        type: "article",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "About Md Saif",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About | Md Saif",
        description:
            "About Md Saif — Full-Stack Web Developer. Education, experience and projects.",
        images: ["/og.png"],
    },
};

export default function AboutPage() {
    return <AboutClient />;
}
