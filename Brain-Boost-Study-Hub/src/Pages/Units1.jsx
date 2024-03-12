import { Link } from "react-router-dom"
import "../Styling/Units.css"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthContextProvider"

function Units1(){
   let { mlNotes,cnNotes,cdNotes,pmNotes}=useContext(AuthContext)
    return <>
       <div className="select-unit-container" style={{display: mlNotes && !cnNotes && !cdNotes && !pmNotes?'block':'none'}} >
        <h1 className="units-header">!! MACHINE LEARNING NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                  <Link to='https://drive.google.com/file/d/1zIrgofL-F_MfibAnV-vbmEPj-cZ1jFG9/view?usp=drive_link' target="_blank"><button className="glow">Unit 1</button></Link>
                  <Link to='https://drive.google.com/file/d/1-xfC0qkjYiuiBFtQCHm325NCH9GkelJT/view?usp=drive_link' target="_blank"><button className="glow">Unit 2</button></Link>
                  <Link to='https://drive.google.com/file/d/1On6dffS6D0G12-8xyRPny1AAz3we1EPG/view?usp=drive_link' target="_blank"><button className="glow">Unit 3</button></Link>
                  <Link to='https://drive.google.com/file/d/1X-e_kIpxCpBhMWSWO76Gbs8nTXg89zao/view?usp=drive_link' target="_blank"><button className="glow">Unit 4</button></Link>
                  <Link to='https://drive.google.com/file/d/1Fq2ZG8wTm0T9unc13cUqhivAZk10Ax8c/view?usp=drive_link' target="_blank"><button className="glow">Unit 5</button></Link>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !mlNotes && cnNotes && !cdNotes && !pmNotes?'block':'none'}} >
        <h1 className="units-header">!! COMPUTER NETWORK NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                  <Link to='https://drive.google.com/file/d/1x_BYu56KDqwi1JiTvrjhfTbZOwZXm0up/view?usp=drive_link' target="_blank"><button className="glow">Unit 1</button></Link>
                  <Link to='https://drive.google.com/file/d/17GWIREA0ZAx0svQMHEM5YSF_aSRFJekW/view?usp=drive_link' target="_blank"><button className="glow">Unit 2</button></Link>
                  <Link to='https://drive.google.com/file/d/1-ivfJFfl2hFvUCjBBH5VA3O8BXDhwVZr/view?usp=drive_link' target="_blank"><button className="glow">Unit 3</button></Link>
                  <Link to='https://drive.google.com/file/d/1KJn_Ae7pyv3eantVB3UoiE_aWwfsVif8/view?usp=drive_link' target="_blank"><button className="glow">Unit 4</button></Link>
                  <Link to='https://drive.google.com/file/d/1RGBHCm7AifEDympJY08p1Cz3lnNlluQG/view?usp=drive_link' target="_blank"><button className="glow">Unit 5</button></Link>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !mlNotes && !cnNotes && cdNotes && !pmNotes?'block':'none'}} >
        <h1 className="units-header">!! COMPILER DESIGN NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                  <Link to='https://drive.google.com/file/d/1fmHyRNTwwi-Tsz2z8n_-o2jWyCZJ_sHE/view?usp=drive_link' target="_blank"><button className="glow">Unit 1</button></Link>
                  <Link to='https://drive.google.com/file/d/1P6DM2Yu1pmYK04L3OJhHRppKcq8VwW2r/view?usp=drive_link' target="_blank"><button className="glow">Unit 2</button></Link>
                  <Link to='https://drive.google.com/file/d/1ZED1hdq-EcOAy1wdFlFtOOziDJGHwFaq/view?usp=drive_link' target="_blank"><button className="glow">Unit 3</button></Link>
                  <Link to='https://drive.google.com/file/d/1eu5yF22mv9Tu75qFTiKZDg6qZF4NOFnW/view?usp=drive_link' target="_blank"><button className="glow">Unit 4</button></Link>
                  <Link to='https://drive.google.com/file/d/1AKaZsP5FJvUQXgGZlUSxhBp0EgJIfNOb/view?usp=drive_link' target="_blank"><button className="glow">Unit 5</button></Link>
            </div>
       </div>
       <div className="select-unit-container" style={{display: !mlNotes && !cnNotes && !cdNotes && pmNotes?'block':'none'}} >
        <h1 className="units-header">!! PROJECT MANAGEMENT NOTES !!</h1>
       <h2 className="units-name">------SELECT UNIT------</h2>
        <div className="units-list">
                  <Link to='https://drive.google.com/file/d/1fma8SkP7sU2HPYrVx5X_O6UAAb0042UM/view?usp=drive_link' target="_blank"><button className="glow">Unit 1</button></Link>
                  <Link to='https://drive.google.com/file/d/1Pf4eWkv-hkEUMt_JnX1MpCC5sU3gThZX/view?usp=drive_link' target="_blank"><button className="glow">Unit 2</button></Link>
                  <Link to='https://drive.google.com/file/d/1DFbRc3nVPQ3ao2ZzAmopWL28IG_Txaz6/view?usp=drive_link' target="_blank"><button className="glow">Unit 3</button></Link>
            </div>
       </div>
       </>
}
export default Units1