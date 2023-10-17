import { Link } from "react-router-dom"



export default function Erro(){
   return(
     <div className="main main-pub">
        <div className="container container-pub">
             <div className="">

            
             <h1>404 Essa pagina não existe :(</h1>
             <Link to="/"  className="btn-post">Home</Link>              
            </div> 

        </div>
     </div> 
   )

}

