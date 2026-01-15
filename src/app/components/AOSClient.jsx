"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function AOSClient({ children }) {
    useEffect(() => {
        Aos.init({
            duration: 800,
            once: false,      // true karoge to 1 baar hi chalega
            offset: 100,
            easing: "ease-in-out",
        });

        // first load ke baad refresh
        Aos.refresh();
    }, []);

    return <>{children}</>;
}
