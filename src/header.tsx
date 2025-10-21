import { useEffect, useState } from "preact/hooks";
import logo from './assets/logo.png';

//small header with site title and navigation links
export function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    function scrollToSection(id: string) {
        const section = document.getElementById(id);    
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <header className={`w-full px-4 py-2 flex max-w-screen justify-center fixed top-0 z-10 transition-colors duration-300
        ${scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent" }`}>
            <div className={"max-w-[1000px] w-full flex flex-row gap-2 justify-start items-center"}>
                <img src={logo} alt="Logo" className="w-8 h-8"/>
                <p className="text-3xl font-bold">STRUKTURɅ</p>
                <nav className={"p-2 ml-auto"}>   
                    <button onClick={() => scrollToSection("home")} class="text-white hover:underline mx-2 cursor-pointer">Hem</button>
                    <button onClick={() => scrollToSection("about")} className="text-white hover:underline mx-2 cursor-pointer">Om oss</button>
                    <button onClick={() => scrollToSection("contact")} className="text-white hover:underline mx-2 cursor-pointer">Kontakta</button>
                </nav>
            </div>
            
        </header>
    )
} export default Header;