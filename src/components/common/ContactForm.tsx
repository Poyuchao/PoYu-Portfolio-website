

"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";

type FormData = {
    name: string;
    email: string;
    message: string;
};

type ContactFormProps = {
    handleSubmit: (formData: FormData) => void;
    submitForm: boolean;
    isSubmitted: boolean; 
    isError: boolean;
};

export default function ContactForm( {handleSubmit,submitForm,isSubmitted,isError }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    useEffect(() => {
        if (submitForm) {
            handleSubmit(formData);
        }
    }, [submitForm, handleSubmit, formData]);



    return (
        <form
            className="w-full max-w-2xl p-8 rounded-lg  space-y-8 "
          
        >
            
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name
                </label>
                <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    Message
                </label>
                <textarea
                    className="w-full  h-56 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            {isSubmitted &&(
                <div className="mt-4 p-4 text-green-800 bg-green-100 border border-green-400 rounded-md shadow-md text-center">
                    Message has been successfully sent!
                </div>
            )}
            {isError &&(
                <div className="mt-4 p-4 text-red-800 bg-red-100 border border-red-400 rounded-md shadow-md text-center">
                    Please fill in all fields, thanks! 
                </div>
            )}

            
        </form>
    );
}
