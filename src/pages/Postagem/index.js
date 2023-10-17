import { useState,useEffect } from "react"
import HeaderPostagem from "../../components/HeaderPostagem"
import {db} from "./../../firebaseconnection"
import {addDoc, collection} from "firebase/firestore"
import { toast } from "react-toastify"
import "./postagem.css"

export default function Postagens(){
      const [title,setTitle] = useState("")
      const [content,setContent] = useState("")
      const [name,setName] = useState("")
      const [user,setUser] = useState({})



   useEffect(() => {
       let userData = localStorage.getItem("userLogado")
       setUser(JSON.parse(userData)) 
       
   },[])
  


     const lidePublic = async (e) => {
          e.preventDefault();
          
          if(title === "" || content === "" || name === ""){
             toast.warn("PREENCHA TODOS OS CAMPOS!")
             return;
          }
          

         await addDoc(collection(db, "posts"), {
           
              titulo: title,
              conteudo: content,
              autor: name,
              dataPublic: new Date().toLocaleDateString(),
              userUid: user?.id 
            
          })
          .then(() => {
             setTitle("")
             setContent("")
             setName("")
             toast.success("PARABÉNS PELA NOVA PUBLICAÇÃO!") 
          })
         .catch((err) => {
            toast.warn("HOUVE ALGUM ERRO! " + err) 
         })

    }



    return(
        <div className="main">
            <HeaderPostagem/>       
             
           <div className="container">

             <div className="conatainer-public">
              <form onSubmit={lidePublic} className="public-form">
                
                 <label>Titulo</label>
                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                 <label>Conteúdo</label>   
                 <textarea cols="40" rows="20" maxLength="800"  value={content} onChange={(e) => setContent(e.target.value)}/>

                 <label>Autor/ Nome ou Nickname</label> 
                 <input type="text" value={name} onChange={(e) => setName(e.target.value)}/> 

                  <button type="submit" className="btn-pub">Publicar</button> 
              </form>
              </div>

           </div>
             

        </div>
    )
}