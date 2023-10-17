import { Link } from "react-router-dom"
import "./pub.css"

export default function Pub(){
  return(
    <div className="main main-pub">

      <div className="container container-pub">
             <h1>Você ainda não possui publicações :(</h1>              
             <Link to="/paginaPostagem" className="btn-post">New post</Link>
             <Link to="/" className="btn-post">Home</Link>
      </div>

    </div>
  )
}
