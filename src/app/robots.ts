export default function robots() {
    const baseUrl = "https://isaif.online";

    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
        host: "isaif.online",
    };
}
