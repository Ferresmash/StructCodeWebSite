import './app.css'

export function App() {
  return (
    <div className="w-screen h-screen bg-[url(green-light.jpg)] bg-center bg-cover">
      <div className={"flex flex-col items-center justify-center gap-4 size-full bg-black/85 backdrop-blur-xl xl:backdrop-blur-2xl 2xl:backdrop-blur-3xl"}>
        <p className="font-bold text-5xl">Silas AB</p>
        <p className="font-bold text-3xl text-center max-w-[600px]">AI-genererad kod som kommer hålla max en vecka, helt gratis!</p>
      </div>
    </div>

  )
}
