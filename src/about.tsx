

   
   export function About() {

    
   
     return (
        <div className={"flex flex-col items-center justify-center gap-4 bg-neutral-900 "}>
        <div className={"flex flex-col items-center  p-5 rounded-xl mt-10"}>
          <p className="font-bold text-5xl pb-2">Om oss</p>
          <p className="font-bold text-3xl text-center max-w-[600px]">Vi är experter på allting</p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className={"flex flex-col items-center hover:bg-black/30  p-5 rounded-xl"}>
          <img  src="src\assets/ferreicon.jpg" className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Ferdinand Öhrn</p>
          <p className="text-center max-w-[200px] text-neutral-400">"Allt kan göras om man vågar!"</p>
        </div>
        <div className={"flex flex-col items-center  p-5 rounded-xl"}>
          <img  src="src\assets/William.jpg" className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">William Lindahl</p>
          <p className="text-center max-w-[200px] text-neutral-400">"Att lära många ting lär oss inte att förstå"</p>
        </div>
        <div className={"flex flex-col items-center  p-5 rounded-xl"}>
          <img  src="src\assets\pontusicon.png" className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Pontus Lindholm</p>
          <p className="text-center max-w-[200px] text-neutral-400">"Livet är inte ett problem som skall lösas utan en verklighet som skall upplevas"</p>
        </div>
        <div className={"flex flex-col items-center p-5 rounded-xl"}>
          <img  src="src\assets/axelicon.png" className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Axel Edner</p>
          <p className="text-center max-w-[200px] text-neutral-400">"Livet är kort. Låt oss säga sanningen"</p>
        </div>
        </div>

        
      </div>
   
     )
   }

   export default About;

   
   
