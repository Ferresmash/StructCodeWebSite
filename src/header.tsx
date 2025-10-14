//small header with site title and navigation links
export function Header() {
    return (
        <header className="max-w-[900px] w-full px-4 py-2 flex justify-between items-center fixed top-0">
            <p className="text-3xl font-bold">Silas AB</p>
            <nav>   
                <a href="#home" class="text-white hover:underline mx-2 ">Home</a>
                <a href="#about" className="text-white hover:underline mx-2">About</a>
                <a href="#contact" className="text-white hover:underline mx-2">Contact</a>
            </nav>
        </header>
    )
}