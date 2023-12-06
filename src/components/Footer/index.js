import { Link } from "react-router-dom"
import {ImGithub, ImLinkedin, ImInstagram} from "react-icons/im"
import "./footer.css"

export default function Footer(){
   return(
        <div>
             <footer className="component-home footer">
              <div className="wrapper-footer">

                <article className="footer-article">
                  <h2>Atech-blog</h2>
                  <p>this is the place where you get the best curiosities about world's tecnology</p>
                </article>     
                        
                  <ul className="nav-footer">
                     <li><Link rel="external" target="bank" to={`https://github.com/AritanaPianco`}><ImGithub className="icon-footer"/>Github</Link></li>
                     <li><Link rel="external" target="bank" to={`https://www.linkedin.com/in/aritana-pianco-179093257/`}><ImLinkedin className="icon-footer"/>Linkedln</Link></li>
                     <li><Link rel="external" target="bank" to={`https://www.instagram.com/arthenull_/?hl=pt_BR`}><ImInstagram className="icon-footer"/>instagram</Link></li>
                  </ul>
             </div>
             </footer>

        </div> 
    
   )

}
