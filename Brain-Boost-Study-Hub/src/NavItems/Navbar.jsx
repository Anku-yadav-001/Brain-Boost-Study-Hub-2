/*--Modules--*/
import {Link} from "react-router-dom"

/*--Assets--*/
import GifFile from "../assets/bbsh.png"
import Menu from "../assets/menu.png"

/*--Styling--*/
import "../Styling/Navbar.css"
import { useState } from "react"
function Navbar(){
    let [show,setShow]=useState(false)
    return (
        <>
        <div id="navbar-main-container">
            <div className="image-container">
              <img src={GifFile} alt=""  className="image1"/>
            </div>

           <div className="menu-icon">
           <div className="navitems-container">
            <div><Link to="/" className="navItems">Home</Link></div>
            <div><Link to="/about" className="navItems">About Us</Link></div>
            <div><Link to="/whyus" className="navItems">Why Us</Link></div>
            <div><Link to="/services" className="navItems">Our Services</Link></div>
            <div><Link to="/contact" className="navItems">Contact</Link></div> 
           </div>
            </div>
            <div className="menu-icon-1" >
            <img src={Menu} alt="" style={{width:"95%",height:"5vh"}} onClick={()=>setShow(!show)} />
           </div>
           <div className="after-show" style={{display:show?'block':'none'}}>
            <div><Link to="/"className="showing-items">Home</Link></div>
            <div><Link to="/about"className="showing-items">About Us</Link></div>
            <div><Link to="/whyus"className="showing-items">Why Us</Link></div>
            <div><Link to="/services"className="showing-items">Our Services</Link></div>
            <div><Link to="/contact"className="showing-items">Contact</Link></div> 
           </div>
        </div>        
       
        </>
    )
}
export default Navbar