import {Routes,Route} from "react-router-dom"
import Contact from "../NavItems/Contact"
import Services from "../NavItems/Services"
import Home from "../NavItems/Home"
import Whyus from "../NavItems/Whyus"
import About from "../NavItems/About"
import Subject from "../Pages/Subject"
import Notes from "../Pages/Notes"
import HtmlNotes from "../Pages/HtmlNotes"
import CssNotes from "../Pages/CssNotes"
import Javascript from "../Pages/Javascript"
import ReactNotes from "../Pages/React"
import Papers from "../Pages/Papers"

function AllRoutes(){
   
    return <>
    <div>
        <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/whyus" element={<Whyus/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>

            <Route path="/1st-semester-previous-year-paper" element={<Subject/>}/>
            <Route path="/2nd-semester-previous-year-paper" element={<Subject/>}/>
            <Route path="/3rd-semester-previous-year-paper" element={<Subject/>}/>
            <Route path="/4th-semester-previous-year-paper" element={<Subject/>}/> 
            <Route path="/5th-semester-previous-year-paper" element={<Subject/>}/> 
            <Route path="/6th-semester-previous-year-paper" element={<Subject/>}/> 
            <Route path="/7th-semester-previous-year-paper" element={<Subject/>}/> 
            <Route path="/8th-semester-previous-year-paper" element={<Subject/>}/> 

            <Route path="/1st-semester-notes" element={<Notes/>}/>
            <Route path="/2nd-semester-notes" element={<Notes/>}/>
            <Route path="/3rd-semester-notes" element={<Notes/>}/>
            <Route path="/4th-semester-notes" element={<Notes/>}/> 
            <Route path="/5th-semester-notes" element={<Notes/>}/> 
            <Route path="/6th-semester-notes" element={<Notes/>}/> 
            <Route path="/7th-semester-notes" element={<Notes/>}/> 
            <Route path="/8th-semester-notes" element={<Notes/>}/> 

             <Route path="/HTML-full-notes-with-brain-boost-study-hub" element={<HtmlNotes/>}/> 
             <Route path="/CSS-full-notes-with-brain-boost-study-hub" element={<HtmlNotes/>}/>
             <Route path="/JavaScript-full-notes-with-brain-boost-study-hub" element={<HtmlNotes/>}/>
             <Route path="/React-full-notes-with-brain-boost-study-hub" element={<HtmlNotes/>}/>

             <Route path="/previous-year-chemistry-papers" element={<Papers/>}/>
             <Route path="/previous-year-mathematics-papers" element={<Papers/>}/>
             <Route path="/previous-year-english-for-communication-papers" element={<Papers/>}/>
             <Route path="/previous-year-basic-electrical-and-electronic-engineering-papers" element={<Papers/>}/>
             <Route path='/previous-year-engineering-graphics-papers' element={<Papers/>}/>

        </Routes>
    </div>
    </>
}
export default AllRoutes