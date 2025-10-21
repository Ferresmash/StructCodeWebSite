import { useEffect, useRef, useState } from "preact/hooks";
import { EmailIcon, PhoneIcon } from "../src/svgs.jsx";
import emailjs from "emailjs-com";

   
export function Contact() {
    const [isSending, setIsSending] = useState(false);
    const [sendResponse, setSendResponse] = useState("");
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: Event) => {
        e.preventDefault();

        if (!form.current) return;
        setIsSending(true);
        emailjs
        .sendForm(
            "service_1vnm2cc",   // from EmailJS dashboard
            "template_ifqz3yc",  // from EmailJS dashboard
            form.current,
            "Hd9Sy71i1BIK1WXmC"    // from EmailJS dashboard
        )
        .then(
            (result) => {
            setIsSending(false);
            setSendResponse("success");
            console.log("✅ Email sent:", result.text);
            //alert("Message sent successfully!");
            },
            (error) => {
            setIsSending(false);
            setSendResponse("error")
            console.error("❌ Error:", error.text);
            //alert("Failed to send message. Please try again.");
            }
        );
       
    };

    useEffect(() => {

    }, []);

    return (
        <div id={"contact"} className={"min-h-screen flex flex-col items-center justify-center gap-4 size-full bg-neutral-950"}>
            <div className={"max-w-[900px] w-full flex flex-col sm:flex-row gap-4 p-4 rounded-xl"}>
                <div className="sm:w-[50%] flex flex-col gap-2">
                    <h1>Kontaktinfo</h1>
                    <p className="text-lg text-nowrap">Struktura Solutions AB</p>
                    <div className="flex gap-2"><EmailIcon width="24"/><p className="text-lg text-nowrap">solutionsstruktura@gmail.com</p></div>
                   <div className="flex gap-2"><PhoneIcon width="24"/><p className="text-lg text-nowrap">070 123 45 67</p></div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="sm:w-[50%] flex flex-col items-start gap-4">
                    <input type="text" name="name" placeholder="Namn" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <input type="email" name="email" placeholder="Email" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <textarea name="message" placeholder="Meddelande" className="w-full min-h-[100px] p-2 rounded mb-2 text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    
                    <div className="flex gap-4 w-full items-start">
                        <button type="submit" disabled={isSending} className={`w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer ${isSending ? "opacity-20" : null}`}>{isSending ? <p>Skickar</p> : <p>Skicka</p>}</button>
                        
                    </div>
                    <div className={"text-white"}>
                        {sendResponse == "success" ? 
                        <p className={"py-2 px-4 bg-green-950 outline outline-green-900 rounded"}>Meddelandet har skickats!</p> : sendResponse == "error" ?
                        <p className={"py-2 px-4 bg-red-950 outline outline-red-900 rounded"}>Meddelandet kunde inte skickas!</p> : null}
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Contact;

   
   