

   
export function Contact() {

    return (
        <div className={"flex flex-col items-center justify-center gap-4 size-full bg-neutral-950"}>
            <div className={"max-w-[800px] w-full flex flex-col sm:flex-row gap-4 p-4 rounded-xl"}>
                <div className="grow flex flex-col gap-2">
                    <h1>Kontaktinfo</h1>
                    <p className="text-lg">Aktiebolaget AB</p>
                    <p className="text-lg">Email: Email@gmail.com</p>
                    <p className="text-lg">Telefon: 070-123 45 67</p>
                </div>
                <div className="grow flex flex-col items-end gap-4">
                    <p className="w-full text-center text-lg">Kontakta oss</p>
                    <input type="text" placeholder="Namn" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <input type="text" placeholder="Email" className="w-full p-2 rounded text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <textarea placeholder="Meddelande" className="w-full min-h-[100px] p-2 rounded mb-2 text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                    <button className="w-32 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Skicka</button>
                </div>
            </div>
        </div>
    )
}

export default Contact;

   
   