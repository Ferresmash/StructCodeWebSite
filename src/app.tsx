import About from './about.tsx'
import './app.css'
import Contact from './contact.tsx'
import { Header } from './header.tsx'
import { Home } from './home.tsx'


export function App() {
  return (
    <div className={`w-screen h-screen bg-[url(/green-light.jpg)] bg-center bg-cover`}>
      <Header/>
      <Home/>
      <About/>
      <Contact/>
    </div>

  )
}
