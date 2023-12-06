import {db} from "./../../firebaseconnection"
import {collection,onSnapshot,query,orderBy} from "firebase/firestore"
import { useState,useEffect } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'

import "./home.css"

export default function Home(){
    const [posts,setPosts] = useState([])
    
    
    useEffect(() => {
        async function loadAllPosts(){
            let postsRef = collection(db,"posts")    
            let searchBycondition =  query(postsRef,orderBy("dataPublic", "desc")) 
                      
            const unsub = onSnapshot(searchBycondition, (colection) => {
                   let allPosts = []  
                
                 colection.forEach((post) => {
                     allPosts.push({
                        id: post.id,
                        titulo: post.data().titulo,
                        conteudo: post.data().conteudo,
                        autor: post.data().autor,
                        dataPublic: post.data().dataPublic,
                       


                     })  
                 })
            
                 setPosts(allPosts)    
            })
        } 
           
        loadAllPosts()
    
    },[])
    
    
    return(
 <div className="main">
        
    <Header/>  
  
  <Carousel data-bs-theme="dark" className="carrosel">
      <Carousel.Item className="carrosel-item" interval={3000}>
        <img
          className="d-block w-100"
          src={require(`./../../images/view-3d-man-with-tech-device.jpg`)}
          alt="First slide"
        />
        <Carousel.Caption className="carrosel-assunto">
          <h5>Tech-assuntos</h5>
          <p>Assuntos recorrentes que dev's junios encontram no decorrer de sua carreira.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item className="carrosel-item" interval={3000}>
        <img
          className="d-block w-100"
          src={require(`./../../images/3d-workstation-with-computer-peripheral-devices.jpg`)}
          alt="Second slide"
        />
        <Carousel.Caption className="carrosel-assunto">
          <h5>Tech-tecnology</h5>
          <p>É importante ter uma bom senso de suas techs, então compartilhar de suas técnicas torna-se interessante.</p>
        </Carousel.Caption>
      </Carousel.Item>
        

      <Carousel.Item className="carrosel-item" interval={3000}>
        <img
          className="d-block w-100"
          src={require(`./../../images/view-3d-male-teacher.jpg`)}
          alt="Third slide"
        />
        <Carousel.Caption className="carrosel-assunto">
          <h5>Tech-class</h5>
          <p>
            Um bom tempo de estudo e prática pode o tornar compartilhador de conhecimento.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>


     <h2 className="title-public">Publications</h2>
          

 
 <div className="wrapper-container-cards">
   <div className="container-cards">
     {posts.map((post) => (
        <div className="card" key={post.id}>

        <div className="card-header">By {post.autor}</div>
        <div className="card-body">
          <div className="card-title">{post.titulo}</div>
          <div className="card-text">
               {post.conteudo}
          </div>
        </div>
          <div className="card-footer">Public at:  {post.dataPublic}</div>
      </div>
             

     ))}  
    </div>
    </div>

      <Footer/>           
    </div>

      
    )
}