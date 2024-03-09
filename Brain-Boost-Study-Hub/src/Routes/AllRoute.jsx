import {Routes,Route} from "react-router-dom"
import Contact from "../NavItems/Contact"
import Services from "../NavItems/Services"
import Home from "../NavItems/Home"
import Whyus from "../NavItems/Whyus"
import About from "../NavItems/About"
import Subject from "../Pages/Subject"
function AllRoutes(){
    return <>
    <div>
        <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/whyus" element={<Whyus/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/1st-semester-subjects" element={<Subject/>}/>
            <Route path="/2nd-semester-subjects" element={<Subject/>}/>
            <Route path="/3rd-semester-subjects" element={<Subject/>}/>
            <Route path="/4th-semester-subjects" element={<Subject/>}/> 
            <Route path="/5th-semester-subjects" element={<Subject/>}/> 
            <Route path="/6th-semester-subjects" element={<Subject/>}/> 
            <Route path="/7th-semester-subjects" element={<Subject/>}/> 
            <Route path="/8th-semester-subjects" element={<Subject/>}/> 

        </Routes>
    </div>
    </>
}
export default AllRoutes