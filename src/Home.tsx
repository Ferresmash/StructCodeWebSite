import homeimage from './assets/homeimage.png';
   
   export function Home() {

    function scrollToSection(id: string) {
        const section = document.getElementById(id);    
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }
   
     return (
        <div id={"home"} className={"min-h-screen flex flex-col px-2 xs:px-5 sm:px-20 items-center justify-center gap-4 bg-black/80  xl:backdrop-blur-2xl 2xl:backdrop-blur-3xl max-w-screen overflow-hidden"}>
        <div className={"max-w-[900px] w-full flex flex-col gap-4 my-20 text-center sm:text-start items-center sm:items-start"}>
          <p className="font-bold text-5xl pb-2">Låt oss hjälpa dig!</p>
          <p className="font-bold text-3xl max-w-[600px] opacity-70">Vi tar din idé till en verklig produkt!</p>
          <p className={"max-w-[500px] w-full px-4 sm:px-0 opacity-50"}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <div className={"flex gap-4 mt-10"}>
            <button className={"landingPageBtn"} onClick={() => scrollToSection("about")}>Om oss</button>
            <button className={"landingPageBtn"} onClick={() => scrollToSection("contact")}>Kontakta oss</button>
          </div>
        </div>
      </div>
   
     )
   }

   export default Home;

   
   
