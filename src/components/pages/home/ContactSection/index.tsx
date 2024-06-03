"use client";

import { useTranslations } from "next-intl";
import ContactForm from "@src/components/common/ContactForm";
import { useState,useEffect } from "react";


export default function ContactSection() {
    const t = useTranslations("Home.ContactSection");

    const [submitForm, setSubmitForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleSubmit = async (formData: { name: string; email: string; message: string }) => {
        console.log('Submitting form data:', formData);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                console.log('Email sent successfully');
                setIsSubmitted(true); 
            } else {
                console.log('Error sending email');
                setIsError(true);
            }
        } catch (err) {
            console.log('Error sending email');
        } finally {
            setSubmitForm(false);
        }
    }

    const triggerFormSubmit = () => {
        setSubmitForm(true);
    }

    useEffect(()=>{
        if(isSubmitted){
            setTimeout(()=>{
                setIsSubmitted(false);
            },3000);
        }

        if (isError){
            setTimeout(()=>{
                setIsError(false);
            },3000);
        }
    
    })

    return (
        <section
            className="last-section-height flex items-center bg-primary-400 bg-noise"
            id="contact"
        >
            <div className="container grid cursor-default place-items-center gap-12 max-lg:py-12 lg:grid-cols-2 lg:gap-20">
                <div className="grid gap-4 font-semibold">
                    <h2 className="text-3xl font-bold md:text-6xl">
                        {t("title")}
                    </h2>
                    <p>{t("paragraph-one")}</p>
                    <p>{t("paragraph-two")}</p>
                    <div className="group inline-block w-fit">
                        <button
                            className="inline-block rounded-md border border-primary-300 bg-white px-4 py-2.5 font-semibold transition duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:shadow-[-4px_4px_0px_0px_#3a10e5]"
                            onClick={triggerFormSubmit}
                        >
                            {/* let's connect */}
                            {t("cta")}
                        </button>
                    </div>
                </div>
                <ContactForm handleSubmit={handleSubmit} submitForm={submitForm} isSubmitted={isSubmitted} isError={isError}/>
            </div>
        </section>
    );
}
