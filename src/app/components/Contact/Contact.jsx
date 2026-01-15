
"use client";
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Mail, Phone, MapPin, Copy, Check } from "lucide-react";
import Threads from "../ReactBits/threads/Threads";

export default function Contact() {
    const [copiedKey, setCopiedKey] = useState(null);

    //  Web3Forms result state
    const [result, setResult] = useState("");

    const copyText = async (key, text) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedKey(key);
            setTimeout(() => setCopiedKey(null), 1200);
        } catch {
            const textarea = document.createElement("textarea");
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand("copy");
            document.body.removeChild(textarea);
            setCopiedKey(key);
            setTimeout(() => setCopiedKey(null), 1200);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setResult("Sending....");

        const formData = new FormData(e.target);
        formData.append("access_key", "14d8288e-fa09-4922-a5d3-92970358eb2a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                e.target.reset();
            } else {
                console.log("Error", data);
                setResult(data.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Error sending form:", error);
            setResult("An error occurred. Please try again.");
        }
    };

    const phone = "+91 6204180519";
    const email = "mdsaif62041@gmail.com";
    const address = "Mumbai, Maharashtra, India";

    return (
        <section className={styles.section}>
            {/* BACKGROUND THREADS */}
            <div className={styles.threadsBg} aria-hidden="true">
                <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
            </div>

            {/* CONTENT */}
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2 className={styles.title}>
                        {" "}
                        <span className={styles.contactred}>Contact</span> Us
                    </h2>
                    <p className={styles.subtitle}>
                        Want to collaborate or have a project in mind? Send a message — I’ll
                        reply as soon as possible.
                    </p>
                </header>

                <div className={styles.grid}>
                    <div className={styles.formCol}>
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.fieldRow}>
                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor="name">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        name="name"            // ✅ web3forms
                                        className={styles.input}
                                        placeholder="Your name"
                                        type="text"
                                        required
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label className={styles.label} htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        name="email"           // ✅ web3forms
                                        className={styles.input}
                                        placeholder="you@example.com"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>

                            {/* OPTIONAL: phone field (hidden bhi rakh sakte ho) */}
                            {/* <input type="hidden" name="phone" value="" /> */}

                            <div className={styles.field}>
                                <label className={styles.label} htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"          // ✅ web3forms
                                    className={styles.textarea}
                                    placeholder="Tell me about your project..."
                                    rows={6}
                                    required
                                />
                            </div>

                            <button className={styles.submit} type="submit">
                                Send Message
                            </button>

                            {/* ✅ Result message (no design change, just text) */}
                            {result ? (
                                <div
                                    className={`${styles.formNotice} ${result === "Form Submitted Successfully"
                                        ? styles.noticeSuccess
                                        : styles.noticeError
                                        }`}
                                    role="status"
                                    aria-live="polite"
                                >
                                    <span className={styles.noticeIcon} aria-hidden="true">
                                        {result === "Form Submitted Successfully" ? "✓" : "!"}
                                    </span>

                                    <div className={styles.noticeText}>
                                        <div className={styles.noticeTitle}>
                                            {result === "Form Submitted Successfully"
                                                ? "Message sent!"
                                                : "Something went wrong"}
                                        </div>

                                        <div className={styles.noticeDesc}>
                                            {result === "Form Submitted Successfully"
                                                ? "Thanks for reaching out — I’ll contact you soon."
                                                : result}
                                        </div>
                                    </div>
                                </div>
                            ) : null}

                        </form>
                    </div>

                    <aside className={styles.infoCol}>
                        <div className={styles.infoCard}>
                            <h3 className={styles.infoTitle} aria-labelledby="contact-title">
                                Contact Details
                            </h3>
                            <p className={styles.infoText}>
                                You can reach me directly using the details below.
                            </p>

                            <div className={styles.infoList}>
                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrap}>
                                        <Phone size={18} />
                                    </div>
                                    <div className={styles.infoBody}>
                                        <div className={styles.infoLabel}>Phone</div>
                                        <div className={styles.infoValue}>{phone}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className={styles.copyBtn}
                                        onClick={() => copyText("phone", phone)}
                                        aria-label="Copy phone"
                                    >
                                        {copiedKey === "phone" ? (
                                            <Check size={16} />
                                        ) : (
                                            <Copy size={16} />
                                        )}
                                    </button>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrap}>
                                        <Mail size={18} />
                                    </div>
                                    <div className={styles.infoBody}>
                                        <div className={styles.infoLabel}>Email</div>
                                        <div className={styles.infoValue}>{email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className={styles.copyBtn}
                                        onClick={() => copyText("email", email)}
                                        aria-label="Copy email"
                                    >
                                        {copiedKey === "email" ? (
                                            <Check size={16} />
                                        ) : (
                                            <Copy size={16} />
                                        )}
                                    </button>
                                </div>

                                <div className={styles.infoItem}>
                                    <div className={styles.iconWrap}>
                                        <MapPin size={18} />
                                    </div>
                                    <div className={styles.infoBody}>
                                        <div className={styles.infoLabel}>Location</div>
                                        <div className={styles.infoValue}>{address}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
