import { useState } from "react"
import {auth} from "./../../firebaseconnection"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate,Link } from "react-router-dom"
import { toast } from 'react-toastify'
import "./login.css"


export default function Login(){
      const [email,setEmail] = useState("")
      const [senha,setSenha] = useState("")
      const navigate = useNavigate()
  
  
   const lideLogin = async (e) => {
      e.preventDefault();
       
       if(email !== "" && senha !== ""){
           await signInWithEmailAndPassword(auth,email,senha)
           .then((res) => {
               toast.success(`SEJA BEM VINDO(a):  ${res.user.email}`)
               navigate("/myPosts", { replace:true })
               setEmail("")
               setSenha("")
           })
           .catch((err) => {
              toast.warning("ESSA CONTA NÃO EXISTE!")
           })

       }else{
           toast.warn("PREENCHA TODOS OS CAMPOS!")
       }
  
   }
   

  

  
  return(
   
    <div className="main-login-cadastro">
   
         <div className="container container-cadastro-login">

            <form onSubmit={lideLogin} >

                <div class="form-floating">
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email here"/>  
                  <label for="email">Email</label> 
                </div> 
              
               
    
                <div class="form-floating">
                  <input type="password"  className="form-control"  value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha here"/>       
                  <label for="password">Senha</label> 
                </div>   
                   

                <button type="submit" className="btn">Acessar Meus Posts</button>

                <Link  className="btn btn-link" to="/cadastro">
                   não possui conta? faça o cadastro!    
                </Link> 
            </form>       
              
          </div> 

    </div>
    )

    
}