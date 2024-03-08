import "../Styling/Services.css"
import Coding from "../assets/coding.png"
import Academic from "../assets/academic.png"
import Papers from "../assets/papers.png"
function Services(){
    return <>
    <div className="services-main-container">
        <h1 className="service-heading">OUR SERVICES...</h1>
        <div className="service-container">
        <div>
          <img src={Academic} alt=""  style={{width:"50%"}}  />
            <h3>ACADEMIC NOTES !!</h3>
            <p>On our website, All the Latest RGPV study materials are available here.</p>
        </div>
        <div>
           <img src={Coding} alt="" style={{width:"50%"}} />
            <h3>PROGRAMMING NOTES !!</h3>
            <p>On our website, All the latest programming notes are available here. </p>
        </div>
        <div>
           <img src={Papers} alt=""style={{width:"50%"}} />
            <h3>RGPV PREVIOUS YEAR PAPERS</h3>
            <p>On our website, all kinds of notes are freely available like programming notes, academic notes, and so on</p>
        </div>
        </div>
    </div>
    </>
}
export default Services