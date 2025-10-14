

   
   export function Contact() {

    
   
     return (
        <div className={"flex flex-col items-center justify-center gap-4 size-full bg-neutral-950"}>
        <div className={"flex flex-col items-center bg-black/30 p-5 rounded-xl"}>
            <label className="font-bold text-5xl pb-2">Kontakt</label>
            <input type="text" placeholder="Namn" className="p-2 rounded-md mb-2 text-white"/>
            <label className="font-bold text-3xl text-center max-w-[600px]">Fyll i dina kontaktuppgifter så hör vi av oss!</label>
            <input type="text" placeholder="Namn" className="p-2 rounded-md mb-2 text-white"/>

        </div>
      </div>
   
     )
   }

   export default Contact;

   
   