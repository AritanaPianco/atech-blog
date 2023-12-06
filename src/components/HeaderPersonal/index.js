import { Link } from "react-router-dom"
import {auth} from "./../../firebaseconnection"
import {signOut} from "firebase/auth"
import "./headerPersonal.css" 

export default function HeaderPersonal(){


    const lideLogout = async () => {
        await signOut(auth) 
    } 


    return(
          <div>
              <header className="component-home header-personal">
                    <h1>All yours personal posts here</h1>  
                     
                  <nav className="personal-nav">

                     <input type="checkbox" className="menu-btn" id="menu-btn" />
                        <label htmlFor="menu-btn" className="menu-icon">
                              <span className="nav-icon"></span>
                        </label>
                      <ul className="nav" id="nav-menu">
                         <li><Link  to="/paginaPostagem">NewPost</Link></li>                            
                         <li><Link to="/">Home</Link></li>   
                         <button onClick={lideLogout}  className="btn-logout">Logout</button> 
                                          
                       </ul>

                  </nav>
                                            
              </header>

          </div>

    )


}