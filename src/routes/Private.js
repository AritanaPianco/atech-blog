//verificação de user logado

import {auth} from "./../firebaseconnection"
import {onAuthStateChanged} from "firebase/auth"
import {useState,useEffect} from "react"
import {Navigate} from "react-router-dom"


export default function Private({children}){
    const [loading,setLoading] = useState(true) // controle de carregamento
    const [user,setUser] = useState(false) // verificação
    
     
    useEffect(() => {
       async function checarUser(){
             let unsub =  onAuthStateChanged(auth, (user) => {
                  
               if(user){
                   const userData = {
                       id: user.uid,
                       email: user.email
                   }  
                   localStorage.setItem("userLogado", JSON.stringify(userData))
                   setLoading(false)
                   setUser(true)
                
                }else{
                    setLoading(false)
                    setUser(false)
                }
            
           })    
           
        
        
       }


       
       checarUser()
       
    },[])
    
    if(loading){
       return(
           <div>Carregando myPosts..</div>
       )
    }


    if(!user){ // se !false = true executa, se !true = false n executa
       return <Navigate to="/"/>  
    }
    
    

    return children
}