import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AOSClient from "./components/AOSClient";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://isaif.online"),
  title: {
    default: "Md Saif — Full-Stack Web Developer",
    template: "%s | Md Saif",
  },
  description:
    "Md Saif is a Full-Stack Web Developer building modern web apps with Next.js, React, Node.js, and a security-aware mindset.",
  applicationName: "Md Saif Portfolio",
  keywords: [
    "Md Saif",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Node.js",
    "Web Developer Mumbai",
    "Portfolio",
    "Web Security",
  ],
  authors: [{ name: "Md Saif" }],
  creator: "Md Saif",
  publisher: "Md Saif",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://isaif.online",
    title: "Md Saif — Full-Stack Web Developer",
    description:
      "Portfolio of Md Saif — Full-Stack Web Developer (Next.js, React, Node.js) with a security-aware mindset.",
    siteName: "Md Saif Portfolio",
    images: [
      {
        url: "/og.png", // public/og.png
        width: 1200,
        height: 630,
        alt: "Md Saif Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md Saif — Full-Stack Web Developer",
    description:
      "Portfolio of Md Saif — Full-Stack Web Developer (Next.js, React, Node.js) with a security-aware mindset.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <AOSClient>

            {children}
          </AOSClient>

          <footer>
            <Footer />
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
