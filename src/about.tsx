import axelicon from './assets/axelicon.png';
import ferreicon from './assets/ferreicon.jpg';
import pontusicon from './assets/pontusicon.png';
import williamicon from './assets/william.jpg';

   
   export function About() {

    
   
     return (
        <div id={"about"} className={"flex flex-col min-h-screen items-center justify-center gap-4 bg-neutral-900 "}>
        <div className={"flex flex-col items-center  p-5 rounded-xl mt-10"}>
          <p className="font-bold text-5xl pb-2">Om oss</p>
          <p className="font-bold text-3xl text-center max-w-[600px]">Vi är experter på allting</p>
          <p className={"max-w-[700px] w-full px-8 sm:px-0 text-center mt-4"}>StructurA är ett svenskt företag som grundades 2023 av fyra passionerade individer med en gemensam vision: att hjälpa företag och entreprenörer att förverkliga sina idéer genom skräddarsydda mjukvarulösningar av högsta kvalitet. Vårt team består av erfarna utvecklare, designers och projektledare som alla delar en passion för teknik och innovation. Vi tror på kraften i samarbete och strävar efter att bygga långsiktiga relationer med våra kunder genom att leverera lösningar som inte bara uppfyller deras behov utan också överträffar deras förväntningar.</p>
        </div>
        <div className={"flex flex-col items-center  p-5 rounded-xl mt-10"}>
          <p className="font-bold text-3xl text-center max-w-[600px]">Vi som jobbar här</p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <div className={"flex flex-col items-center p-5 rounded-xl"}>
          <img  src={ferreicon} className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Ferdinand Öhrn</p>
          {/* <p className="text-center max-w-[200px] text-neutral-400">"Allt kan göras om man vågar!"</p> */}
        </div>
        <div className={"flex flex-col items-center  p-5 rounded-xl"}>
          <img  src={williamicon} className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">William Lindahl</p>
          {/* <p className="text-center max-w-[200px] text-neutral-400">"Att lära många ting lär oss inte att förstå"</p> */}
        </div>
        <div className={"flex flex-col items-center  p-5 rounded-xl"}>
          <img  src={pontusicon} className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Pontus Lindholm</p>
          {/* <p className="text-center max-w-[200px] text-neutral-400">"Livet är inte ett problem som skall lösas utan en verklighet som skall upplevas"</p> */}
        </div>
        <div className={"flex flex-col items-center p-5 rounded-xl"}>
          <img  src={axelicon} className="w-32 h-32 mb-4 rounded-full"/>
          <p className="font-bold text-2xl pb-2">Axel Edner</p>
          {/* <p className="text-center max-w-[200px] text-neutral-400">"Livet är kort. Låt oss säga sanningen"</p> */}
        </div>
        </div>

        
      </div>
   
     )
   }

   export default About;

   
   
