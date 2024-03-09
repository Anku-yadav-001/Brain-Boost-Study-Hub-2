import "../Styling/Subject.css"
import { AuthContext } from "../Context/AuthContextProvider"
import { useContext } from "react"
function Subject(){
   let {firstSemSub,secondSemSub,thirdSemSub,fourthSemSub,fifthSemSub,sixSemSub,sevenSemSub,eightSemSub}=useContext(AuthContext)
    return <>
      <div>
      <div className="select-subject-container"  style={{ display: firstSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 1ST SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>BT-101 - Engineering Chemistry</button>
            <button>BT-102 - Mathematics-I</button>
            <button>BT-103 - English for Communication</button>
            <button>BT-104 - Basic Electrical & Electronics Engineering</button>
            <button>BT-105 - Engineering Graphics</button>
            <button>BT-106 - Manufacturing Practices</button>
        </div>
       </div>
       <div className="select-subject-container"  style={{ display: secondSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 2ND SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>BT-201 - Engineering Physics</button>
            <button>BT-202 - Mathematics-II</button>
            <button>BT-203 - Basic Mechanical Engineering</button>
            <button>BT-204 - Basic Civil Engineering & Mechanics</button>
            <button>BT-205 - Basic Computer Engineering</button>
            <button>BT-206 - Language Lab & Seminars</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: thirdSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 3RD SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>ES-301 - Energy & Environmental Engineering</button>
            <button>CS-302 - Discrete Structure</button>
            <button>CS-303 - Data Structure</button>
            <button>CS-304 - Digital Systems</button>
            <button>CS-305 - Object Oriented Programming & Methodology</button>
            <button>CS-306 - Computer Workshop</button>
        </div>
       </div>
       <div className="select-subject-container"  style={{ display: fourthSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 4TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>BT-401 - Mathematics- III</button>
            <button>CS-402 - Analysis Design of Algorithm</button>
            <button>CS-403 - Software Engineering</button>
            <button>CS-404 - Computer Org. & Architecture</button>
            <button>CS-405 - Operating Systems</button>
            <button>CS-406 - Programming Practices</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fifthSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 5TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>CS-501 - Theory of Computation</button>
            <button>CS-502 - Database Management Systems</button>
            <button>CS-503 - Data Analytics</button>
            <button>CS-503 - Pattern Recognition</button>
            <button>CS-503 - Cyber Security</button>
            <button>CS-504 - Internet and Web Technologys</button>
            <button>CS-504 - Object Oriented Programming</button>
            <button>CS-504 - Introduction to Database Management Systems</button>
            <button>CS-505 - Lab (Linux)</button>
            <button>CS-506 - Lab (Python)</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sixSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 6TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>CS-601 - Machine Learning</button>
            <button>CS-602 - Computer Networks</button>
            <button>CS-603 - Advanced Computer Architecture</button>
            <button>CS-603 - Computer Graphics & Visualisation</button>
            <button>CS-603 - Compiler Design</button>
            <button>CS-604 - Knowledge Management</button>
            <button>CS-604 - Project Management</button>
            <button>CS-604 - Rural Technology & Community Development</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sevenSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 7TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <button>CS-701 - Software Architectures</button>
           <button>CS-702 - Big Data</button>
           <button>CS-702 - Computational Intelligence</button>
           <button>CS-702 - Deep & Reinforcement Learning</button>
           <button>CS-702 - Wireless & Mobile Computing</button>
           <button>CS-703 - Agile Software Development</button>
           <button>CS-703 - Cryptography & Information Security</button>
           <button>CS-703 - Data Mining and Warehousing</button>
           <button>CS-703 - Disaster Management</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: eightSemSub ? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 8TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>CS-801 - Internet of Things</button>
          <button>CS-802 - Block Chain Technologies</button>
          <button>CS-802 - Cloud Computing</button>
          <button>CS-802 - High Performance computing</button>
          <button>CS-802 - Object Oriented Software Engineering</button>
          <button>CS-803 - Game Theory with Engineering applications</button>
          <button>CS-803 - Image Processing and Computer Vision</button>
          <button>CS-803 - Internet of Things</button>
          <button>CS-803 - Managing Innovation and Entrepreneurship</button>
        </div>
       </div>
      </div>
    </>
}
export default Subject