import "../Styling/Services.css"
import Coding from "../assets/codinRound2.png"
import Academic from "../assets/admic1.png"
import Papers from "../assets/previousPaper1.png"
function Services(){
    return <>
    <div className="services-main-container">
        <h1 className="service-heading">OUR SERVICES...</h1>
        <div className="service-container">
        <div>
        <img src={Academic} alt=""  />
            <h3>ACADEMIC NOTES !!</h3>
            <p>On our website, All the Latest RGPV study materials are available.</p>
        </div>
        <div>
         
           <img src={Coding} alt="" />
            <h3>PROGRAMMING NOTES !!</h3>
            <p>All the latest programming notes are available here. </p>
        </div>
        <div>
           <img src={Papers} alt="" />
            <h3>RGPV PREVIOUS YEAR PAPERS</h3>
            <p>On our website, All the RGPV previous year papers available.</p>
        </div>
        </div>
    </div>
    </>
}
export default Services