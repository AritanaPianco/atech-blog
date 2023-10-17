import { Link } from "react-router-dom"


export default function HeaderPostagem(){
    return(
        <div>
        <header className="component-home header-postagem">
              <h1>Make your new post bellow</h1>  
               

                <ul className="nav">
                   <li><Link  to="/myPosts">Myposts</Link></li>                            
                   <li><Link to="/">Home</Link></li>   
                    
                                    
                 </ul>
                                      
        </header>

    </div>
    )

}