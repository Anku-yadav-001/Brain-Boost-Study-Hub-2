/*--Modules--*/
import {Link} from "react-router-dom"

/*--Assets--*/
import GifFile from "../assets/bbsh.png"

/*--Styling--*/
import "../Styling/Navbar.css"
function Navbar(){
    return (
        <>
        <div id="navbar-main-container">
            <div className="image-container">
              <img src={GifFile} alt=""  className="image1"/>
            </div>

            <div className="navitems-container">
            <div><Link to="/" className="navItems">Home</Link></div>
            <div><Link to="/about" className="navItems">About Us</Link></div>
            <div><Link to="/whyus" className="navItems">Why Us</Link></div>
            <div><Link to="/services" className="navItems">Our Services</Link></div>
            <div><Link to="/contact" className="navItems">Contact</Link></div> 
            </div>
        </div>        
        </>
    )
}
export default Navbar