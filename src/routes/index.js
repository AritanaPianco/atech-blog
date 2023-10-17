import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Postagens from "../pages/Postagem"
import PersonalPost from "../pages/PersonalPost"
import Private from "./Private"
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import Erro from "../pages/Erro"

export default function RoutesApp(){
    return(
        
        <BrowserRouter>
               <Routes>
                      <Route path="/" element={<Home/>}/>
                      <Route path="/paginaPostagem" element={<Private> <Postagens/> </Private>}/>
                      <Route path="/myPosts" element={ <Private> <PersonalPost/> </Private>}/>
                      <Route path="/cadastro" element={<Cadastro/>}/>
                      <Route path="/login" element={<Login/>}/>
                      <Route path="*" element={<Erro/>}/>

               </Routes>
             
        </BrowserRouter>      
   
         
    )
}