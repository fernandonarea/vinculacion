import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DatosEmpleo from "./pages/Datos";
import Estudiante from "./pages/Estudiantes";
import Profesores from "./pages/Profesores";
import Contacto from "./pages/Contacto";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";


function App(){
  return(
    <BrowserRouter>
      <NavBar></NavBar>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Estudiante" element={<Estudiante/>}/>
          <Route path="/Datos" element={<DatosEmpleo/>}/>
          <Route path="/Profesores" element={<Profesores/>}/>
          <Route path="/Contacto" element={<Contacto/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;