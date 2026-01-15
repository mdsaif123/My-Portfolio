import Contact from "@/app/components/Contact/Contact";

export const metadata = {
    title: "Contact | Md Saif",
    description:
        "Contact Md Saif — Full-Stack Web Developer. Send a message for projects, collaboration, or hiring opportunities.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact | Md Saif",
        description:
            "Send a message to Md Saif for full-stack projects, collaborations, or opportunities.",
        url: "/contact",
        type: "website",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Contact Md Saif",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Md Saif",
        description:
            "Contact Md Saif — Full-Stack Web Developer. Let’s collaborate on your next project.",
        images: ["/og.png"],
    },
};

export default function Page() {
    return (
        <main>
            <section aria-label="Contact">
                <Contact />
            </section>
        </main>
    );
}
