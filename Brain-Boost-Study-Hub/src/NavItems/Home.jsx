import TypedComponent from "../Special-Components/TypedComponent"
import "../Styling/Home.css"
import SchoolBoy from "../assets/schoolboy-Photoroom.jpg"
function Home(){
    let words = ['Programming Language Notes.', 'RGPV Study Metarial.', 'RGPV Previous Year Question Papers.'];
    return <>
    <div className="home-main-container">
      <div className="main-intro">
      <h1>Welcome To Brain Boost Study Hub</h1>
        <h2>Your one-stop destination for study materials.</h2>
         <h2 className="typed-component">We Provide <span><TypedComponent words={words}/></span></h2>
         <hr style={{width:"80%",marginLeft:"4%",marginTop:"30px"}}/>
         <div className="content-buttons">
         <button>Programming Language Notes</button><br/>
         <button>Previous Year Papers</button><br/>
         <button>Academic Notes</button>
         </div>
      </div>
      <div class="image-container">
  <img src={SchoolBoy} alt="Schoolboy" className="schoolboy-image"/>
  </div>
        </div>
    </>
}
export default Home