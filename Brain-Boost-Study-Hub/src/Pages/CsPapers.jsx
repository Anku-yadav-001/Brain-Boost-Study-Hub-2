import { Link } from "react-router-dom"
import "../Styling/Papers.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function CsPapers(){
    let {math3,ada,software,coa,os,ml,cn,cd,pm}=useContext(AuthContext)
    return <>
        <div className="select-subject-container" style={{display:math3 && !ada && !software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! ENGINEERING MATHEMATICS-3 PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && ada && !software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! ANALYSIS AND DESIGN OF ALGORITHM PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && software && !coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! SOFTWARE ENGINEERING PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && coa && !os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPUTER ORGANIZATION AND ARCHITECTURE PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && os && !ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! OPERATING SYSTEM PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && ml && !cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! MACHINE LEARNING  PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && cn && !cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPUTER NETWORK PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && !cn && cd && !pm? 'block':'none'}}>
        <h1 className="subject-header">!! COMPILER DESIGN PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
       <div className="select-subject-container" style={{display:!math3 && !ada && !software && !coa && !os && !ml && !cn && !cd && pm? 'block':'none'}}>
        <h1 className="subject-header">!! PROJECT MANAGEMENT PAPERS !!</h1>
        <div className="subject-list">
                    
           </div>
       </div>
    </>
}
export default CsPapers