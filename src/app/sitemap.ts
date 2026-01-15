export default function sitemap() {
    const baseUrl = "https://isaif.online";
    const now = new Date();

    return [
        { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },

        // agar /projects page nahi hai aur section (#projects) home me hai, to isko remove kar do
        // { url: `${baseUrl}/projects`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

        { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    ];
}
