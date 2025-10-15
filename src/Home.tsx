import homeimage from './assets/homeimage.png';
   
   export function Home() {

    
   
     return (
        <div id={"home"} className={"flex flex-col items-center justify-center gap-4 size-full bg-black/85 backdrop-blur-xl xl:backdrop-blur-2xl 2xl:backdrop-blur-3xl max-w-screen overflow-hidden"}>
        <div className={"flex flex-col items-center bg-black/30 p-5 rounded-xl max-w-screen"}>
          <p className="font-bold text-5xl pb-2">Låt oss hjälpa dig!</p>
          
          
          <p className="font-bold text-3xl text-center max-w-[600px]">Vi tar din idé till en verklig produkt!</p>

        </div>
        <div className="flex flex-col items-center bg-black/30 p-5 rounded-xl w-[70rem] max-w-screen">
            <img src={homeimage} alt="Bild" />
          </div>
      </div>
   
     )
   }

   export default Home;

   
   
