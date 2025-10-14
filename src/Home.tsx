   import { Header } from './header'

   
   export function Home() {

    
   
     return (
        <div className="w-screen h-screen bg-[url(green-light.jpg)] bg-center bg-cover">
        <div className={"flex flex-col items-center justify-center gap-4 size-full bg-black/80 backdrop-blur-3xl"}>
            <Header></Header>
            <p className="font-bold text-5xl">Silas AB</p>
            <p className="font-bold text-3xl text-center max-w-[600px]">AI-genererad kod som kommer hålla max en vecka, helt gratis!</p>
        </div>
        </div>
   
     )
   }

   export default Home;

   
   
