
import Landingpage from "./pages/landingpage";
import TelaLogin from "./pages/telaLogin";
import Home from "./pages/home";
import Login from "./pages/loginCliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agenda from "./pages/agenda";


export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landingpage/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/telaLogin" element={<TelaLogin/>}/>
                <Route path="/loginCliente" element={<Login/>}/>
                <Route path="/agenda" element={<Agenda/>}/>
            </Routes>
        </BrowserRouter>
    )
}