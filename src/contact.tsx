import { useRef } from "preact/hooks";
import { EmailIcon, PhoneIcon } from "../src/svgs.jsx";
import emailjs from "emailjs-com";

   
export function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: Event) => {
        e.preventDefault();

        if (!form.current) return;

        emailjs
        .sendForm(
            "service_1vnm2cc",   // from EmailJS dashboard
            "template_ifqz3yc",  // from EmailJS dashboard
            form.current,
            "Hd9Sy71i1BIK1WXmC"    // from EmailJS dashboard
        )
        .then(
            (result) => {
            console.log("✅ Email sent:", result.text);
            alert("Message sent successfully!");
            },
            (error) => {
            console.error("❌ Error:", error.text);
            alert("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <div id={"contact"} className={"flex flex-col items-center justify-center gap-4 size-full bg-neutral-950"}>
            <div className={"max-w-[900px] w-full flex flex-col sm:flex-row gap-4 p-4 rounded-xl"}>
                <div className="sm:w-[50%] flex flex-col gap-2">
                    <h1>Kontaktinfo</h1>
                    <p className="text-lg text-nowrap">Struktura Solutions AB</p>
                    <div className="flex gap-2"><EmailIcon width="24"/><p className="text-lg text-nowrap">solutionsstruktura@gmail.com</p></div>
                   <div className="flex gap-2"><PhoneIcon width="24"/><p className="text-lg text-nowrap">070 123 45 67</p></div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="sm:w-[50%] flex flex-col items-end gap-4">
                    <input type="text" name="name" placeholder="Namn" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <textarea name="message" placeholder="Meddelande" className="w-full min-h-[100px] p-2 rounded mb-2 text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <button type="submit" className="w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Skicka</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;

   
   