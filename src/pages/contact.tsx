import { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './contact.module.css';

function ContactForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    return (
        <div className={styles.formContainer}>
            <form action="https://formspree.io/f/mgepgaww" method="POST" target="_blank">
                <div className={styles.formElement}>
                    <label htmlFor="email" className={styles.formLabel}>Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.formElement}>
                    <label htmlFor="message" className={styles.formLabel}>Your Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        className={styles.formTextarea}
                    />
                </div>
                <button
                    type="submit"
                    className={styles.formButton}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default function Contact(): JSX.Element {
    return (
        <Layout>
            <div className={styles.spacer} />
            <ContactForm />
        </Layout>
    );
}
