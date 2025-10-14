import './app.css'
import {Router } from 'preact-router';
import Home from './Home.tsx';
export function App() {


  return (
    <div>
      <Router>
        <Home path="/" />
      </Router>
    </div>

  )
}
