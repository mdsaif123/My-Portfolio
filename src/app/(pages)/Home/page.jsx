import Banner from "@/app/components/Hero/Banner";
import About from "@/app/components/About/About";
import Skills from "@/app/components/Skills/Skills";
import Projects from "@/app/components/Projects/Projects";
import Contact from "@/app/components/Contact/Contact";

export const metadata = {
    title: "Home",
    description:
        "Portfolio of Md Saif — Full-Stack Web Developer (Next.js, React, Node.js). Projects, skills, and contact.",
    alternates: { canonical: "/" },
};

export default function HomePage() {
    return (
        <main>
            <section aria-label="Hero">
                <Banner />
            </section>

            <section aria-label="About">
                <About />
            </section>

            <section aria-label="Skills">
                <Skills />
            </section>

            <section aria-label="Projects">
                <Projects />
            </section>

            <section aria-label="Contact">
                <Contact />
            </section>
        </main>
    );
}
