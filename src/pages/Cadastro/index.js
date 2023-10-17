import {auth} from "./../../firebaseconnection"
import {createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate,Link} from "react-router-dom"
import { useState} from "react"
import { toast } from 'react-toastify'

export default function Cadastro(){
    
      const [email,setEmail] = useState("")
      const [senha,setSenha] = useState("")
      const navigate = useNavigate()
        
 

    const lideCadastro = async (e) => {
         e.preventDefault(); 
        
        if(email !== "" && senha !== ""){
             //pode prosseguir com cadastro
             await createUserWithEmailAndPassword(auth,email,senha)
             .then((user) => {
                 toast.success("CADASTRADO COM SUCESSO!") 
                 navigate("/", { replace: true })
                 setEmail("")
                 setSenha("") 
                 
              
            })  
            .catch((err) => {
               if(err.code === "auth/weak-password"){
                   toast.warn("SENHA MUITO FRACA!")
               }else if(err.code === "auth/email-already-in-use"){
                    toast.warn("ESSE EMAIL JÁ EXISTE!")
               }
            })              
                  

        }else{
            toast.warn("PREENCHA TODOS OS CAMPOS!")
        }

    }



     return(
       <div className="main-login-cadastro">

           <h1>Faça parte da Atech-blog!</h1>
        <div className="container container-cadastro-login">

          <form onSubmit={lideCadastro}>
                      
              <div class="form-floating">
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email here"/>  
                  <label for="email">Email</label> 
             </div>     

             <div class="form-floating">
                  <input type="password"  className="form-control"  value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="senha here"/>       
                  <label for="password">Senha</label> 
            </div>       
                     
                  <button type="submit" className="btn">Cadastro</button>

             <Link className="btn" to="/login">
                 Já possui conta? volte para login! 
             </Link> 

          </form>       

             

        </div>
       </div>
     )
}