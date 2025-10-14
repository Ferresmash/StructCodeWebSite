import { useEffect, useState } from "preact/hooks";

//small header with site title and navigation links
export function Header() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`w-full px-4 py-2 flex justify-center fixed top-0 z-10 transition-colors duration-300
        ${scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent" }`}>
            <div className={"max-w-[800px] w-full flex flex-row justify-between items-center"}>
                <p className="text-3xl font-bold">Silas AB</p>
                <nav>   
                    <a href="#home" class="text-white hover:underline mx-2 ">Home</a>
                    <a href="#about" className="text-white hover:underline mx-2">About</a>
                    <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
                </nav>
            </div>
            
        </header>
    )
} export default Header;