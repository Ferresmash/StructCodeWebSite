

   
export function Contact() {

    return (
        <div className={"flex flex-col items-center justify-center gap-4 size-full bg-neutral-950"}>
            <div className={"w-[400px] flex flex-col gap-4 items-end bg-black/30 p-4 rounded-xl"}>
                <p className="w-full text-center text-lg">Kontakta oss</p>
                <input type="text" placeholder="Namn" className="w-full p-2 rounded-md text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                <input type="text" placeholder="Email" className="w-full p-2 rounded-md text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                <textarea placeholder="Meddelande" className="w-full p-2 rounded-md mb-2 text-white bg-neutral-900 focus:outline-1 focus:outline-neutral-700"/>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Skicka</button>
            </div>
        </div>
    )
}

export default Contact;

   
   