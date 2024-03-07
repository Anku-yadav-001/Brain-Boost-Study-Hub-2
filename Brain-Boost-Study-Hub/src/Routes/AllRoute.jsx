import {Routes,Route} from "react-router-dom"
import Contact from "../NavItems/Contact"
import Services from "../NavItems/Services"
import Home from "../NavItems/Home"
import Whyus from "../NavItems/Whyus"
import About from "../NavItems/About"
function AllRoutes(){
    return <>
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/whyus" element={<Whyus/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
    </>
}
export default AllRoutes