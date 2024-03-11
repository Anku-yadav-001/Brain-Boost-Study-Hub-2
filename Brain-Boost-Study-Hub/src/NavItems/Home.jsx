import { useContext, useState } from "react";
import {Link, Route, Routes} from "react-router-dom"
import TypedComponent from "../Special-Components/TypedComponent"
import "../Styling/Home.css"
import SchoolBoy from "../assets/schoolboy-Photoroom.jpg"
import { AuthContext } from "../Context/AuthContextProvider";

function Home(){
    let words = ['Programming Language Notes.', 'RGPV Study Metarial.', 'RGPV Previous Year Question Papers.'];
    let [visible,setVisible]=useState(false)
    let [previous,setPrevious]=useState(false)
    let [programming,setProgramming]=useState(false)

    let [branch,setBranch]=useState(false)
    let [year,setYear]=useState(false)
    let [semester,setSemester]=useState(false)
    let {setFirstSemSub,setSecondSemSub,setThirdSemSub,setFourthSemSub,setFiveSemSub,setSixSemSub,setSevenSemSub,setEightSemSub,
         setHtmlNotes,setCssNotes,setJsNotes,setReactNotes,setEcBranch,setCsBranch,setCeBranch,setMeBranch}=useContext(AuthContext)

  let [firstYear,setFirstYear]=useState(false)
  let [secondYear,setSecondyear]=useState(false)
  let [thirdYear,setThirdYear]=useState(false)
  let [fourthYear,setFourthYear]=useState(false)

  let [acadmi,setAcadmi]=useState(false)
  let [previ,setPrevi]=useState(false)

    function AcademicPreview(){
      setPrevious(false)
      setProgramming(false)
      setBranch(false)
      setYear(false)
      setSemester(false)
      setVisible(!visible)
      setAcadmi(true)
      setPrevi(false)
    }
    function PreviousPreview(){
      setProgramming(false)
      setBranch(false)
      setYear(false)
      setVisible(false)
      setSemester(false)
      setPrevious(!previous)
      setAcadmi(false)
      setPrevi(true)
    }
    function ProgrammingPreview(){
      setBranch(false)
      setYear(false)
      setSemester(false)
      setVisible(false)
      setPrevious(false)
      setProgramming(!programming)
    }
    function TitleToBranch(){
        setProgramming(false)
        setVisible(false)
        setPrevious(false)
        setYear(false)
        setSemester(false)
        setBranch(!branch)
    }
   function BranchToYearCs(){
       setProgramming(false)
       setVisible(false)
       setPrevious(false)
        setBranch(false)
        setSemester(false)
        setMeBranch(false)
        setCsBranch(true)
        setEcBranch(false)
        setYear(!year)
   }
   function BranchToYearEc(){
    setProgramming(false)
    setVisible(false)
    setPrevious(false)
     setBranch(false)
     setSemester(false)
     setCsBranch(false)
     setMeBranch(false)
     setEcBranch(true)
     setYear(!year)
}
function BranchToYearCe(){
  setProgramming(false)
  setVisible(false)
  setPrevious(false)
   setBranch(false)
   setSemester(false)
   setCsBranch(false)
   setMeBranch(false)
   setEcBranch(false)
   setCeBranch(true)
   setYear(!year)
}
function BranchToYearMe(){
  setProgramming(false)
  setVisible(false)
  setPrevious(false)
   setBranch(false)
   setSemester(false)
   setCsBranch(false)
   setEcBranch(false)
   setCeBranch(false)
   setMeBranch(true)
   setYear(!year)
}
   function YearToSemester1(){
       setFirstYear(true)
       setSecondyear(false)
       setThirdYear(false)
       setFourthYear(false)

    

       setYear(false)
       setSemester(!semester)
   }
   function YearToSemester2(){
    setFirstYear(false)
       setSecondyear(true)
       setThirdYear(false)
       setFourthYear(false)


       setYear(false)
       setSemester(!semester)
     
   }
  function YearToSemester3(){
    setFirstYear(false)
       setSecondyear(false)
       setThirdYear(true)
       setFourthYear(false)

       setYear(false)
       setSemester(!semester)
  }
  function YearToSemester4(){
       setFirstYear(false)
       setSecondyear(false)
       setThirdYear(false)
       setFourthYear(true)

  
       setYear(false)
       setSemester(!semester)
  }
  function handleFirst(){
    setFirstSemSub(true)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(false)
  }  
  function handleSecond(){
    setFirstSemSub(false)
    setSecondSemSub(true)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(false)
  }

  function handleThird(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(true)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(false)
  }
  function handleFourth(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(true)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(false)
  }
  function handleFive(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(true)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(false)
  }
  function handleSix(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(true)
    setSevenSemSub(false)
    setEightSemSub(false)
  }
  function handleSeven(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(true)
    setEightSemSub(false)
  }
  function handleEight(){
    setFirstSemSub(false)
    setSecondSemSub(false)
    setThirdSemSub(false)
    setFourthSemSub(false)
    setFiveSemSub(false)
    setSixSemSub(false)
    setSevenSemSub(false)
    setEightSemSub(true)
  }

function handleHtml(){
  setHtmlNotes(true)
  setCssNotes(false)
  setJsNotes(false)
  setReactNotes(false)
}
function handleCss(){
  setHtmlNotes(false)
  setCssNotes(true)
  setJsNotes(false)
  setReactNotes(false)
}
function handleJs(){
  setHtmlNotes(false)
  setCssNotes(false)
  setJsNotes(true)
  setReactNotes(false)
}
function handleReact(){
  setHtmlNotes(false)
  setCssNotes(false)
  setJsNotes(false)
  setReactNotes(true)
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
          <p>---SELECT COURSE---</p>
         <button onClick={TitleToBranch}>Bachelor of Technology(B.Tech)</button>
         </div>
         <div className="main-show-hide" style={{ display: previous ? 'block' : 'none' }}>
         <p>---SELECT COURSE---</p>
         <button onClick={TitleToBranch}>B.Tech Previous Year Papers</button>
         </div>
         <div className="main-show-hide" style={{ display: programming ? 'block' : 'none' }}>
          <p>---SELECT LANGUAGE--</p>
        <Link to='/HTML-full-notes-with-brain-boost-study-hub'><button onClick={handleHtml}>HTML5</button></Link>
        <Link to='/CSS-full-notes-with-brain-boost-study-hub'><button onClick={handleCss}>CSS3</button></Link>
        <Link to='/JavaScript-full-notes-with-brain-boost-study-hub'><button onClick={handleJs}>JavaScript</button></Link>
        <Link to='/React-full-notes-with-brain-boost-study-hub'><button onClick={handleReact}>React</button></Link>
         </div>
         <div className="main-show-hide" style={{ display: branch ? 'block' : 'none' }}>
          <p>---SELECT BRANCE--</p>
        <button onClick={BranchToYearCs}>CSE</button>
        <button onClick={BranchToYearEc}>ECE</button>
        <button onClick={BranchToYearMe}>ME</button>
        <button onClick={BranchToYearCe}>CE</button>
         </div>

         <div className="main-show-hide" style={{ display: year ? 'block' : 'none' }}>
          <p>---SELECT YEAR--</p>
        <button onClick={YearToSemester1}>First</button>
        <button onClick={YearToSemester2}>Second</button>
        <button onClick={YearToSemester3}>Third</button>
        <button onClick={YearToSemester4}>Fourth</button>
         </div>

         <div className="main-show-hide" style={{ display: semester && previ && !acadmi? 'block' : 'none' }}>
          <p>---SELECT SEMESTER--</p>
        <Link to='/1st-semester-previous-year-paper'><button style={{display:firstYear?"block":"none"}} onClick={handleFirst}>First</button></Link>
        <Link to='/2nd-semester-previous-year-paper'><button style={{display:firstYear?"block":"none"}} onClick={handleSecond}>Second</button></Link>
        <Link to='/3rd-semester-previous-year-paper'><button style={{display:secondYear?"block":"none"}} onClick={handleThird}>Third</button></Link>
        <Link to='/4th-semester-previous-year-paper'><button style={{display:secondYear?"block":"none"}} onClick={handleFourth}>Fourth</button></Link>
        <Link to='/5th-semester-previous-year-paper'><button style={{display:thirdYear?"block":"none"}} onClick={handleFive}>Fifth</button></Link>
        <Link to='/6th-semester-previous-year-paper'><button style={{display:thirdYear?"block":"none"}} onClick={handleSix}>Six</button></Link>
        <Link to='/7th-semester-previous-year-paper'><button style={{display:fourthYear?"block":"none"}} onClick={handleSeven}>Seven</button></Link>
        <Link to='/8th-semester-previous-year-paper'><button style={{display:fourthYear?"block":"none"}} onClick={handleEight}>Eight</button></Link>
         </div>
         <div className="main-show-hide" style={{ display: semester && acadmi && !previ? 'block' : 'none' }}>
          <p>---SELECT SEMESTER--</p>
        <Link to='/1st-semester-notes'><button style={{display:firstYear?"block":"none"}} onClick={handleFirst}>First</button></Link>
        <Link to='/2nd-semester-notes'><button style={{display:firstYear?"block":"none"}} onClick={handleSecond}>Second</button></Link>
        <Link to='/3rd-semester-notes'><button style={{display:secondYear?"block":"none"}} onClick={handleThird}>Third</button></Link>
        <Link to='/4th-semester-notes'><button style={{display:secondYear?"block":"none"}} onClick={handleFourth}>Fourth</button></Link>
        <Link to='/5th-semester-notes'><button style={{display:thirdYear?"block":"none"}} onClick={handleFive}>Fifth</button></Link>
        <Link to='/6th-semester-notes'><button style={{display:thirdYear?"block":"none"}} onClick={handleSix}>Six</button></Link>
        <Link to='/7th-semester-notes'><button style={{display:fourthYear?"block":"none"}} onClick={handleSeven}>Seven</button></Link>
        <Link to='/8th-semester-notes'><button style={{display:fourthYear?"block":"none"}} onClick={handleEight}>Eight</button></Link>
         </div>
        
</div>


      </div>
      <div className="image-container">
  <img src={SchoolBoy} alt="Schoolboy" className="schoolboy-image"/>
  </div>
        </div>
 <div className="scripting"> 
      <marquee direction="left" >This is not an RGPV official website. This is only for student help. We are not responsible for any kind of failure from the student side. We do not take any liability for the correctness of the material.</marquee>
 </div>
    </>
}
export default Home