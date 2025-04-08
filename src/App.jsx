import './App.css'
import { NavBar } from './common/NavBar';
import { Marque } from './components/Marque'
import Marquee from "react-fast-marquee";

function App() {

  return (
    <>
      <Marquee >
        <Marque />
      </Marquee>
      <NavBar />
    </>
  )
}

export default App
