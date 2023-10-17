import { useState,useEffect, cloneElement } from "react"
import {db} from "./../../firebaseconnection"
import HeaderPersonal from "../../components/HeaderPersonal"
import {onSnapshot,query,orderBy,where,collection,deleteDoc,doc} from "firebase/firestore"
import Card from 'react-bootstrap/Card'
import Pub from "../../components/Pub"
import "./personal.css"
import { toast } from "react-toastify"



export default function PersonalPost(){
     const [posts,setPosts] = useState([])
     const [user,setUser] = useState({}) 
 

    
    useEffect(() => {
        async function loadPersonalPosts(){
             const userLogado = localStorage.getItem("userLogado") 
             setUser(JSON.parse(userLogado))
             

             if(userLogado){
               const user = JSON.parse(userLogado)      
               
               const postsRef = collection(db,"posts")
               const searchCondition = query(postsRef,orderBy("dataPublic", "desc"), where("userUid", "==", user?.id))
               const unsub = onSnapshot(searchCondition, (collection) => {
                  const myPosts = []
                  
                  collection.forEach((post) => {
                

                     myPosts.push({
                        id: post.id,
                        titulo: post.data().titulo,
                        conteudo: post.data().conteudo,
                        autor: post.data().autor,
                        dataPublic: post.data().dataPublic,
                        userUid: post.data().userUid   
                     })
                   
                  })
                  
                  console.log(myPosts)
                  setPosts(myPosts)
                

    
               })
               

             } 
            
        
        }

        
        loadPersonalPosts()
        
    },[])  
    
    

    const lideDelete = async (id) => {
       const docRef = doc(db,"posts", id)
       await deleteDoc(docRef)              
       toast.success("Deletado com sucesso!")
      
    }
    
   
    
    
    if(posts.length === 0){
       return(
          <Pub/>
       ) 
    }
    


    return(
        <div className="main">
            <HeaderPersonal/> 
    

        <div className="container container-cards container-personal">
           {posts.map((post) => (
                <Card className="card" key={post.id}>
                <Card.Header className="card-header">By {post.autor}</Card.Header>

                <Card.Body className="card-body">
                  <Card.Title className="card-title">{post.titulo}</Card.Title>
                  <Card.Text className="card-text">
                        {post.conteudo}
                  </Card.Text>
                </Card.Body>
                      
                  <Card.Subtitle className="card-footer">Public at:  {post.dataPublic}</Card.Subtitle>
                  <button className="btn-delete" onClick={() => lideDelete(post.id)}>Deletar</button>
              </Card>

            ))}  
        </div>



 
            
              
        </div>
    )
}