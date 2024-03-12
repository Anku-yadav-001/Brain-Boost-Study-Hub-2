import "../Styling/About.css"
import StudyStack from "../assets/stydy-metarial-Photoroom.jpg"
function About(){
    return <>
    <div className="about-main-container">
        <div className="sub-container">
            <h2 className="about-h1">Brain Boost Stydy Hub</h2>
           <p className="about-p">Welcome to <b>Brain-Boost-Study-Hub</b>, your one-stop
                 destination for academic resources and study
                  materials. Our platform is dedicated to providing
                   students with easy access to a wide range of
                    materials to aid them in their educational journey.</p>

            <p className="about-p">Our platform offers a diverse range of materials,
                 including programming notes, academic notes,
                  previous year papers from RGPV (Rajiv Gandhi Proudyogiki Vishwavidyalaya),
                   and much more. Whether you're preparing for exams, working on assignments, 
                   or simply seeking to enhance your knowledge, you'll find valuable resources
                    here to support your academic endeavors.</p>
        </div>
        <div className="stack">
                <img src={StudyStack} alt="" className="study-stack"/>
        </div>
    </div>
    </>
}
export default About