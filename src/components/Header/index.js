import { Link } from "react-router-dom"
import "./header.css"



export default function Header(){
    return(
          <div>
              <header className="component-home header">
                    <h1>Atech-Blog</h1>  
                     

                    <nav>

                        <input type="checkbox" className="menu-btn" id="menu-btn" />
                        <label htmlFor="menu-btn" className="menu-icon">
                              <span className="nav-icon"></span>
                        </label>

                      <ul className="nav" id="nav-menu">
                         <li><Link to="/myPosts">MyPosts</Link></li>                            
                         <li><Link to="/login">Login</Link></li>                            
                         <li><Link className="cads" to="/cadastro">Cadastro</Link></li>                            

                      </ul>
                    </nav>
                        
                        
                    
              </header>

          </div>

    )


}
