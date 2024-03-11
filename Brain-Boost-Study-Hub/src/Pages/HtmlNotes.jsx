import { useContext } from "react"
import "../Styling/HtmlNotes.css"
import { AuthContext } from "../Context/AuthContextProvider"
import { Link } from "react-router-dom"
function HtmlNotes(){
    let {htmlNotes,cssNotes,jsNotes,reactNotes}=useContext(AuthContext)
    return <>
    <div className="htmlnotes-main-container"  style={{display:htmlNotes && !cssNotes && !jsNotes && !reactNotes?'block':'none'}}>
        <div className="html-notes">
            <h1>HTML Full Notes</h1>
           <Link to="https://drive.google.com/file/d/11qzlXnLgloB9DHF1_3R-y1-l-_PUpP6e/view?usp=drive_link" target="_blank" download>
           <div className="button-container">
            <button class="glow-on-hover" type="button">Download Notes Here!</button>
            </div>
           </Link>
        </div>
        </div>

        <div className="htmlnotes-main-container" style={{display:!htmlNotes && cssNotes && !jsNotes && !reactNotes?'block':'none'}}>
        <div className="html-notes">
            <h1>CSS Full Notes</h1>
           <Link to="https://drive.google.com/file/d/15alyjjg0xvNOH9SQMdiagmd_zpJsbkhK/view?usp=sharing" target="_blank" download>
           <div className="button-container">
            <button class="glow-on-hover" type="button">Download Notes Here!</button>
            </div>
           </Link>
        </div>
        </div>

        <div className="htmlnotes-main-container" style={{display:!htmlNotes && !cssNotes && jsNotes && !reactNotes?'block':'none'}}>
        <div className="html-notes">
            <h1>Java Script Full Notes</h1>
           <Link to="https://drive.google.com/file/d/1L5AcHfI0g00qakvJVW8IwQT5PCRPFyRG/view?usp=sharing" target="_blank" download>
           <div className="button-container">
            <button class="glow-on-hover" type="button">Download Notes Here!</button>
            </div>
           </Link>
        </div>
        </div>

        <div className="htmlnotes-main-container" style={{display:!htmlNotes && !cssNotes && !jsNotes && reactNotes?'block':'none'}}>
        <div className="html-notes">
            <h1>React Full Notes</h1>
           <Link to="https://drive.google.com/file/d/1CZPU_GCekPIXFr4IQIZxgXcOpoMWs9ek/view?usp=sharing" target="_blank" download>
           <div className="button-container">
            <button class="glow-on-hover" type="button">Download Notes Here!</button>
            </div>
           </Link>
        </div>
        </div>
    </>
}
export default HtmlNotes