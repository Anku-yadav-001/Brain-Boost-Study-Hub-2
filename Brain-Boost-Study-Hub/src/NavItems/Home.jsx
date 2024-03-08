import { useState } from "react";
import TypedComponent from "../Special-Components/TypedComponent"
import "../Styling/Home.css"
import SchoolBoy from "../assets/schoolboy-Photoroom.jpg"
function Home(){
    let words = ['Programming Language Notes.', 'RGPV Study Metarial.', 'RGPV Previous Year Question Papers.'];
    let [visible,setVisible]=useState(false)
    let [previous,setPrevious]=useState(false)
    let [programming,setProgramming]=useState(false)
    function AcademicPreview(){
      setPrevious(false)
      setProgramming(false)
      setVisible(!visible)
    }
    function PreviousPreview(){
         setVisible(false)
         setProgramming(false)
          setPrevious(!previous)
    }
    function ProgrammingPreview(){
      setVisible(false)
      setPrevious(false)
         setProgramming(!programming)
    }
    return <>
    <div className="home-main-container">
      <div className="main-intro">
      <h1>Welcome To Brain Boost Study Hub</h1>
        <h2>Your one-stop destination for study materials.</h2>
         <h2 className="typed-component">We Provide <span><TypedComponent words={words}/></span></h2>
         <hr style={{width:"80%",marginLeft:"4%",marginTop:"30px"}}/>
         
<div className="show-hide">

<div className="content-buttons">
         <button onClick={ProgrammingPreview}>Programming Language Notes</button><br/>
         <button onClick={PreviousPreview}>Previous Year Papers</button><br/>
         <button onClick={AcademicPreview}>Academic Notes</button>
         </div>
          
         <div className="main-show-hide" style={{ display: visible ? 'block' : 'none' }}>
          <p>---SELECT DEGREE---</p>
         <button>Bachelor of Technology(B.Tech)</button>
         </div>
         <div className="main-show-hide" style={{ display: previous ? 'block' : 'none' }}>
         <p>---SELECT DEGREE---</p>
         <button>B.Tech Previous Year Papers</button>
         </div>
         <div className="main-show-hide" style={{ display: programming ? 'block' : 'none' }}>
          <p>---SELECT PROGRAMMING LANGUAGE--</p>
        <button>HTML5</button>
        <button>CSS3</button>
        <button>JavaScript</button>
        <button>React</button>
        <button>Java</button>
        <button>Python</button>
         </div>
</div>


      </div>
      <div class="image-container">
  <img src={SchoolBoy} alt="Schoolboy" className="schoolboy-image"/>
  </div>
        </div>
    </>
}
export default Home