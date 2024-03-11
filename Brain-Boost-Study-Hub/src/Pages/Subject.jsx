import "../Styling/Subject.css"
import { AuthContext } from "../Context/AuthContextProvider"
import { useContext } from "react"
import { Link } from "react-router-dom"
function Subject(){
   let {firstSemSub,secondSemSub,thirdSemSub,fourthSemSub,fifthSemSub,sixSemSub,sevenSemSub,eightSemSub,csBranch,ecBranch,ceBranch,meBranch,setChemistry,setMath,setEnglish,setBeee,setEgraphic,
        setMath3,setAda,setSoftware,setCoa,setOs,setMl,setCn,setCd,setPm,setPhysics,setmath2,setMechanical,setCivil,setBasic}=useContext(AuthContext);

   function handleChemistry(){
    setChemistry(true)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
   }
   function handleMath(){
    setChemistry(false)
    setMath(true)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
   }
   function handleEnglish(){
    setChemistry(false)
    setMath(false)
    setEnglish(true)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
   }
   function handleBeee(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(true)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
   }
  function handleGraphics(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(true)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
  }
  function handlePhysics(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(true)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
  }
  function handleMath2(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(true)
    setMechanical(false)
    setCivil(false)
    setBasic(false)
  }
  function handleMechanical(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(true)
    setCivil(false)
    setBasic(false)
  }
  function handleCivil(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(true)
    setBasic(false)
  }
  function handleComputer(){
    setChemistry(false)
    setMath(false)
    setEnglish(false)
    setBeee(false)
    setEgraphic(false)
    setPhysics(false)
    setmath2(false)
    setMechanical(false)
    setCivil(false)
    setBasic(true)
  }
  function handleMath3(){
      setMath3(true)
      setAda(false)
      setSoftware(false)
      setCoa(false)
      setOs(false)
      setMl(false)
      setCn(false)
      setCd(false)
      setPm(false)
  }
  function handleAda(){
      setMath3(false)
      setAda(true)
      setSoftware(false)
      setCoa(false)
      setOs(false)
      setMl(false)
      setCn(false)
      setCd(false)
      setPm(false)
  }
  function handleSoftware(){
      setMath3(false)
      setAda(false)
      setSoftware(true)
      setCoa(false)
      setOs(false)
      setMl(false)
      setCn(false)
      setCd(false)
      setPm(false)
  }
  function handleCoa(){
      setMath3(false)
      setAda(false)
      setSoftware(false)
      setCoa(true)
      setOs(false)
      setMl(false)
      setCn(false)
      setCd(false)
      setPm(false)
  }
  function handleOs(){
      setMath3(false)
      setAda(false)
      setSoftware(false)
      setCoa(false)
      setOs(true)
      setMl(false)
      setCn(false)
      setCd(false)
      setPm(false)
  }
  function handleMl(){
    setMath3(false)
    setAda(false)
    setSoftware(false)
    setCoa(false)
    setOs(false)
    setMl(true)
    setCn(false)
    setCd(false)
    setPm(false)
  }
  function handleCn(){
    setMath3(false)
    setAda(false)
    setSoftware(false)
    setCoa(false)
    setOs(false)
    setMl(false)
    setCn(true)
    setCd(false)
    setPm(false)
  }
  function handleCd(){
    setMath3(false)
    setAda(false)
    setSoftware(false)
    setCoa(false)
    setOs(false)
    setMl(false)
    setCn(false)
    setCd(true)
    setPm(false)
  }
  function handlePm(){
    setMath3(false)
    setAda(false)
    setSoftware(false)
    setCoa(false)
    setOs(false)
    setMl(false)
    setCn(false)
    setCd(false)
    setPm(true)
  }
    return <>
      <div>
      <div className="select-subject-container"  style={{ display: firstSemSub && csBranch && !ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 1ST SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <Link to='/previous-year-chemistry-papers' onClick={handleChemistry}><button>BT-101 - Engineering Chemistry</button></Link>
            <Link to='/previous-year-mathematics-papers' onClick={handleMath}><button>BT-102 - Mathematics-I</button></Link>
            <Link to='/previous-year-english-for-communication-papers'><button onClick={handleEnglish}>BT-103 - English for Communication</button></Link>
            <Link to='/previous-year-basic-electrical-and-electronic-engineering-papers' ><button onClick={handleBeee}>BT-104 - Basic Electrical & Electronics Engineering</button></Link>
            <Link to='/previous-year-engineering-graphics-papers'><button onClick={handleGraphics}>BT-105 - Engineering Graphics</button></Link>
        </div>
       </div>
       <div className="select-subject-container"  style={{ display: secondSemSub && csBranch && !ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 2ND SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <Link to='/previous-year-physics-papers'> <button onClick={handlePhysics}>BT-201 - Engineering Physics</button></Link>
           <Link to='/previous-year-mathematics-2-papers'> <button onClick={handleMath2}>BT-202 - Mathematics-II</button></Link>
           <Link to='/previous-year-basic-mechanical-engineering-papers'> <button onClick={handleMechanical}>BT-203 - Basic Mechanical Engineering</button></Link>
           <Link to='/previous-year-basic-civil-engineering-papers'> <button onClick={handleCivil}>BT-204 - Basic Civil Engineering & Mechanics</button></Link>
           <Link to='/previous-year-basic-computer-engineering-papers'> <button onClick={handleComputer}>BT-205 - Basic Computer Engineering</button></Link>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: thirdSemSub && csBranch && !ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
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
       <div className="select-subject-container"  style={{ display: fourthSemSub && csBranch && !ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 4TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <Link to='/previous-year-mathematics-3-papers'> <button onClick={handleMath3}>BT-401 - Mathematics- III</button></Link>
           <Link to='/previous-year-analysis-and-design-of-algorithm-papers'> <button onClick={handleAda}>CS-402 - Analysis Design of Algorithm</button></Link>
           <Link to='/previous-year-software-engineering-papers'> <button onClick={handleSoftware}>CS-403 - Software Engineering</button></Link>
           <Link to='/previous-year-computer-organization-and-architecture-papers'> <button onClick={handleCoa}>CS-404 - Computer Org. & Architecture</button></Link>
           <Link to='/previous-year-operating-system-papers'> <button onClick={handleOs}>CS-405 - Operating Systems</button></Link>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fifthSemSub && csBranch && !ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 5TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>CS-501 - Theory of Computation</button>
            <button>CS-502 - Database Management Systems</button>
            <button>CS-503 - Data Analytics</button>
            <button>CS-503 - Pattern Recognition</button>
            <button>CS-503 - Cyber Security</button>
            <button>CS-504 - Internet and Web Technology</button>
            <button>CS-504 - Object Oriented Programming</button>
            <button>CS-504 - Introduction to Database Management Systems</button>
            <button>CS-505 - Lab (Linux)</button>
            <button>CS-506 - Lab (Python)</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sixSemSub && csBranch && !ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 6TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <Link to='/previous-year-machine-learning-papers'> <button onClick={handleMl}>CS-601 - Machine Learning</button></Link>
           <Link to='/previous-year-computer-network-papers'> <button onClick={handleCn}>CS-602 - Computer Networks</button></Link>           
           <Link to='/previous-year-compiler-design-papers'> <button onClick={handleCd}>CS-603 - Compiler Design</button></Link>
           <Link to='/previous-year-project-management-papers'> <button onClick={handlePm}>CS-604 - Project Management</button></Link>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sevenSemSub && csBranch && !ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
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

       <div className="select-subject-container"  style={{ display: eightSemSub && csBranch && !ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
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

       <div className="select-subject-container"  style={{ display: firstSemSub && !csBranch && ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"yellow"}}>!! 1ST SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>BT-101 - Engineering Chemistry</button>
            <button>BT-102 - Mathematics-I</button>
            <button>BT-103 - English for Communication</button>
            <button>BT-104 - Basic Electrical & Electronics Engineering</button>
            <button>BT-105 - Engineering Graphics</button>
            <button>BT-106 - Manufacturing Practices</button>
        </div>
       </div>
      </div>

      <div className="select-subject-container"  style={{ display: secondSemSub && !csBranch && ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
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

       <div className="select-subject-container"  style={{ display: thirdSemSub && !csBranch && ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 3RD SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>BT-301 - Mathematics-III</button>
            <button>EC-302 - Electronic Measurement & Instrumentation</button>
            <button>EC-303 - Digital System Design</button>
            <button>EC-304 - Electronic Devices</button>
            <button>EC-305 - Network Analysis</button>
            <button>EC-306 - EMI Lab</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fourthSemSub && !csBranch && ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 4TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>ES-401 - Energy & Environmental Engineering</button>
            <button>EC-402 - Signals & Systems</button>
            <button>EC-403 - Analog Communication</button>
            <button>EC-404 - Control System</button>
            <button>EC-405 - Analog Circuits</button>
            <button>EC-406 - Simulation Lab</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fifthSemSub && !csBranch && ecBranch  && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 5TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>EC-501 - Microprocessor & its Application</button>
            <button>EC-502 - Digital Communication</button>
            <button>EC-503 - CNTl</button>
            <button>EC-503 - Mobile Communication</button>
            <button>EC-503 - Advanced Control system</button>
            <button>EC-504 - EMT (Electro Magnetic Theory)</button>
            <button>EC-504 - Computer System Organisation</button>
            <button>EC-504 - Process Control Instrumentation</button>
            <button>EC-505 - CNTL Lab</button>
            <button>EC-506 - Matlab Programming</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sixSemSub && !csBranch && ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 6TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>EC-601 - Digital Signal Processing</button>
            <button>EC-602 - Antenna & Wave propagation</button>
            <button>EC-603 - Data Communication</button>
            <button>EC-603 - CMOS Design</button>
            <button>EC-603 - Satellite Communication</button>
            <button>EC-604 - Microcontroller & Embedded system</button>
            <button>EC-604 - Bio-medical Electronics</button>
            <button>EC-604 - Power Electronics</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sevenSemSub && !csBranch && ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 7TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>EC-701 - VLSI Design</button>
          <button>EC-702 - Information Theory & Coding</button>
          <button>EC-702 - Microwave Engg</button>
          <button>EC-702 - Nano Electronics</button>
          <button>EC-703 - Cellular Mobile Communication</button>
          <button>EC-703 - Internet of Things</button>
          <button>EC-703 - Probability Theory & Stochastic Processor</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: eightSemSub && !csBranch && ecBranch && !ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 8TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
         <button>EC-801 - Optical Fiber Communication</button>
         <button>EC-802 - 5G Technology</button>
         <button>EC-802 - AI & Signal Processing</button>
         <button>EC-802 - Wireless Communication</button>
         <button>EC-803 - Digital Image Processing</button>
         <button>EC-803 - Speech Processing</button>
         <button>EC-803 - Wireless Network</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: firstSemSub && !csBranch && !ecBranch  && ceBranch && !meBranch? 'block' : 'none' }}>
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
      
       <div className="select-subject-container"  style={{ display: secondSemSub && !csBranch && !ecBranch && ceBranch && !meBranch? 'block' : 'none' }}>
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

       <div className="select-subject-container"  style={{ display: thirdSemSub && !csBranch && !ecBranch && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 3RD SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <button>BT-301 - Mathematics-III</button>
           <button>CE-302 - Construction Materials</button>
           <button>CE-303 - Surveying</button>
           <button>CE-304 - Building Planning & Architecture</button>
           <button>CE-305 - Strength of Materials</button>
           <button>CE-306 - Study of Historical & Ancient Civil Engineering Practices</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fourthSemSub && !csBranch && !ecBranch  && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 4TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <button>ES-401 - Energy & Environmental Engineering</button>
           <button>CE-402 - Construction Technology</button>
           <button>CE-403 - Structural Analysis-I</button>
           <button>CE-404 - Transportation Engineering-I</button>
           <button>CE-405 - Engineering Geology & Remote Sensing</button>
           <button>CE-406 - Software Lab</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fifthSemSub && !csBranch && !ecBranch  && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 5TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
           <button>CE-501 - Fluid Mechanics I</button>
           <button>CE-502 - Transportation Engg II</button>
           <button>CE-503 - Structural Analysis-II</button>
           <button>CE-503 - Construction planning and management</button>
           <button>CE-503 - Quantity surveying & Costing</button>
           <button>CE-503 - Marine Construction</button>
           <button>CE-504 - Urban and town planning</button>
           <button>CE-504 - Remote Sensing and GIS</button>
           <button>CE-504 - Renewable energy resources</button>
           <button>CE-504 - Entrepreneurship development and management</button>
           <button>CE-505 - Quantity surveying & Costing</button>
           <button>CE-506 - Material Testing Lab</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sixSemSub && !csBranch && !ecBranch && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 6TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>CE-601 - Structural Design and Drawing (RCC-I)</button>
            <button>CE-602 - Environmental Engineering I</button>
            <button>CE-603 - Water resources engineering</button>
            <button>CE-603 - Precast and modular construction</button>
            <button>CE-603 - Advance pavement design</button>
            <button>CE-603 - Cost effective and Eco-friendly structures</button>
            <button>CE-604 - Fluid Mechanics II</button>
            <button>CE-604 - Intellectual Property rights(IPR)</button>
            <button>CE-604 - Environmental Impact Assessment</button>
            <button>CE-604 - Operation Research</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sevenSemSub && !csBranch && !ecBranch && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 7TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>CE-701 - Geotechnical Engg</button>
          <button>CE-702 - Environmental Engg-II</button>
          <button>CE-702 - Prestressed Concrete Structures</button>
          <button>CE-702 - Structural Design & Drawing [RCC-II]</button>
          <button>CE-702 - Structural Dynamics</button>
          <button>CE-703 - Building Services</button>
          <button>CE-703 - Integrated Waste Management</button>
          <button>CE-703 - Internet of Things</button>
          <button>CE-703 - Project Management</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: eightSemSub && !csBranch && !ecBranch && ceBranch && !meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 8TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
        <button>CE-801 - Design of Steel Structures</button>
        <button>CE-802 - Bridge Engineering</button>
        <button>CE-802 - Earthquake Resistant Design of Structures</button>
        <button>CE-802 - Engineering Hydrology</button>
        <button>CE-802 - Foundation Engineering</button>
        <button>CE-803 - Artificial Intelligence</button>
        <button>CE-803 - Data Analytics</button>
        <button>CE-803 - Integrated Water Management</button>
        <button>CE-803 - Retrofitting and Rehabilitation of Structures</button>
        </div>
       </div>


       <div className="select-subject-container"  style={{ display: firstSemSub && !csBranch && !ecBranch  && !ceBranch && meBranch? 'block' : 'none' }}>
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
      
       <div className="select-subject-container"  style={{ display: secondSemSub && !csBranch && !ecBranch && !ceBranch && meBranch? 'block' : 'none' }}>
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

       <div className="select-subject-container"  style={{ display: thirdSemSub && !csBranch && !ecBranch && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 3RD SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>BT-301 - Mathematics-III</button>
          <button>ME-302 - Thermodynamics</button>
          <button>ME-303 - Materials Technology</button>
          <button>ME-304 - Strength of Material</button>
          <button>ME-305 - Manufacturing Process</button>
          <button>ME-306 - Thermal Engg Lab</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fourthSemSub && !csBranch && !ecBranch  && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 4TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>ES-401 - Energy & Environmental Engineering</button>
          <button>ME-402 - INSTRUMENTATION & CONTROL</button>
          <button>ME-403 - THEORY OF MACHINES</button>
          <button>ME-404 - FLUID MECHANICS</button>
          <button>ME-405 - MANUFACTURING TECHNOLOGY</button>
          <button>ME-406 - SOFTWARE LAB</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: fifthSemSub && !csBranch && !ecBranch  && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 5TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>ME-501 - I C Engines</button>
          <button>ME-502 - Mechanical Vibration</button>
          <button>ME-503 - Mechatronics</button>
          <button>ME-503 - Dynamics of Machine</button>
          <button>ME-503 - Alternate Automotive Fuels & Emissions</button>
          <button>ME-504 - Industrial Engineering & Ergonomics</button>
          <button>ME-504 - TQM and SQC</button>
          <button>ME-504 - Finite Element Method</button>
          <button>ME-505 - FEM/CFD Lab</button>
          <button>ME-506 - Python</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sixSemSub && !csBranch && !ecBranch && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 6TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
            <button>ME-601 - Thermal Engineering and Gas Dynamics</button>
            <button>ME-602 - Machine Component Design</button>
            <button>ME-603 - Turbo Machinery</button>
            <button>ME-603 - Computer Aided Engineering</button>
            <button>ME-603 - Product Design</button>
            <button>ME-604 - Robotics</button>
            <button>ME-604 - Optimisation Techniques</button>
            <button>ME-604 - Renewable Energy Technology</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: sevenSemSub && !csBranch && !ecBranch && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 7TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
          <button>ME-701 - Heat and Mass Transfer</button>
          <button>ME-702 - Advance Machine Design</button>
          <button>ME-702 - Advance Machining Processes</button>
          <button>ME-702 - Internet of Things [IOT]</button>
          <button>ME-702 - Power Plant Engineering</button>
          <button>ME-703 - Artificial Intelligence Techniques</button>
          <button>ME-703 - Operation Research and Supply Chain</button>
          <button>ME-703 - Reliability Engineering</button>
          <button>ME-703 - Systems Engineering</button>
        </div>
       </div>

       <div className="select-subject-container"  style={{ display: eightSemSub && !csBranch && !ecBranch && !ceBranch && meBranch? 'block' : 'none' }}>
        <h1 className="subject-header">-----SELECT SUBJECTS----</h1>
        <h2 className="subject-header" style={{color:"red"}}>!! 8TH SEMESTER LATEST !!</h2>
        <div className="subject-list">
       <button>ME-801 - Refrigeration & Air Conditioning</button>
       <button>ME-802 - Automobile Engineering</button>
       <button>ME-802 - Machine Tool Design</button>
       <button>ME-802 - Production Planning and Control</button>
       <button>ME-802 - Tribology & Maintenance Engineering</button>
       <button>ME-803 - Data analytics</button>
       <button>ME-803 - Energy Conservation, Management & Audit</button>
       <button>ME-803 - Entrepreneurship and Management Concepts</button>
       <button>ME-803 - Management Information System</button>
        </div>
       </div>

    </>
}
export default Subject