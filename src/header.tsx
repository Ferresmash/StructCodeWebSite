//small header with site title and navigation links
export function Header() {
    return (
        <header className="w-full px-4 py-2 flex justify-center items-center fixed top-0 z-10">
            <div className={"max-w-[800px] w-full flex flex-row justify-between"}>
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