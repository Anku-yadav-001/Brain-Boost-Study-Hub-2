import { Link } from "react-router-dom"
import "../Styling/Units.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function Units(){
   let {chemistryNotes,mathNotes,englishNotes,beeeNotes,graphicsNotes}=useContext(AuthContext)
    return <>
     <div className="select-unit-container" style={{display: chemistryNotes && !mathNotes && !englishNotes && !beeeNotes && !graphicsNotes?'block':'none'}} >
        <h1 className="units-header">!! ENGINEERING CHEMISTRY NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                <Link to='https://drive.google.com/file/d/1PQy1-udl_FRrhCSQAydlXbLG8LwZmi5F/view?usp=drive_link' target="_blank"> <button className="glow">Unit 1</button></Link>
                <Link to='https://drive.google.com/file/d/14oKTfKsJzA3HZO1AsKnBsJSevqli8mS5/view?usp=drive_link' target="_blank"> <button className="glow">Unit 2</button></Link>
                <Link to='https://drive.google.com/file/d/1Hnf685QpNCC3C2meklEKD_7jEQWqKdb8/view?usp=drive_link' target="_blank"> <button className="glow">Unit 3</button></Link>
                <Link to='https://drive.google.com/file/d/1cIrp55dY-Rg11gOoqpiTh3WDZ2qHk2eY/view?usp=drive_link' target="_blank"> <button className="glow">Unit 4</button></Link>
                <Link to='https://drive.google.com/file/d/163-yKpqum8OZSb-cHqslD4VACJhPLBUe/view?usp=drive_link' target="_blank"> <button className="glow">Unit 5</button></Link>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !chemistryNotes && mathNotes && !englishNotes && !beeeNotes && !graphicsNotes?'block':'none'}} >
        <h1 className="units-header">!! ENGINEERING MATHEMATICS-1 NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                <Link to='https://drive.google.com/file/d/1JLP6qWGnFgbJHn0A602UxjKDK4K6Qfh3/view?usp=drive_link' target="_blank"> <button className="glow">Unit 1</button></Link>
                <Link to='https://drive.google.com/file/d/1bdZNFL30I8f1gbRbvg0tjhKGFAhiNuqH/view?usp=drive_link' target="_blank"> <button className="glow">Unit 2</button></Link>
                <Link to='https://drive.google.com/file/d/1xWo42x1njt7j83fuAc8o8CbIpTu8mhbE/view?usp=drive_link' target="_blank"> <button className="glow">Unit 3</button></Link>
                <Link to='https://drive.google.com/file/d/1Hm01dWIi1uU819TEiEXnskdmB6-MK4J0/view?usp=drive_link' target="_blank"> <button className="glow">Unit 4</button></Link>
                <Link to='https://drive.google.com/file/d/11hDUZYVvoz31Waw_C6-PF8gbIWyLiJif/view?usp=drive_link' target="_blank"> <button className="glow">Unit 5</button></Link>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !chemistryNotes && !mathNotes && englishNotes && !beeeNotes && !graphicsNotes?'block':'none'}} >
        <h1 className="units-header">!! ENGLISH FOR COMMUNICATION NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                   <button className="glow">Unit 1</button>
                   <button className="glow">Unit 2</button>
                   <button className="glow">Unit 3</button>
                   <button className="glow">Unit 4</button>
                   <button className="glow">Unit 5</button>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !chemistryNotes && !mathNotes && !englishNotes && beeeNotes && !graphicsNotes?'block':'none'}} >
        <h1 className="units-header">!! BASIC ELECTRICAL AND ELECTRONIC NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                   <button className="glow">Unit 1</button>
                   <button className="glow">Unit 2</button>
                   <button className="glow">Unit 3</button>
                   <button className="glow">Unit 4</button>
                   <button className="glow">Unit 5</button>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !chemistryNotes && !mathNotes && !englishNotes && !beeeNotes && graphicsNotes?'block':'none'}} >
        <h1 className="units-header">!! ENGINEERING GRAPHICS NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                   <button className="glow">Unit 1</button>
                   <button className="glow">Unit 2</button>
                   <button className="glow">Unit 3</button>
                   <button className="glow">Unit 4</button>
                   <button className="glow">Unit 5</button>
            </div>
       </div>
       </>
}
export default Units