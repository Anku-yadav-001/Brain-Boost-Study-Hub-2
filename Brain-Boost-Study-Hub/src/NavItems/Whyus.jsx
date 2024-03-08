import "../Styling/Whyus.css"
import Registration from "../assets/registration.png"
import Free from "../assets/free.png"
import Notes from "../assets/notes.png"
function Whyus(){
    return <>
    <h1 className="whyus-header">WHY US</h1>
    <div className="whyus-main-container">
        <div>
            <img src={Registration} alt=""/>
            <h3>NO REGISTRATION NEED !</h3>
            <p>On our website, there is no need for any kind of registration, and there are no any kind of conditions or restrictions in our website for the students.</p>
        </div>
        <div>
            <img src={Free} alt="" />
            <h3>COMPLETELY FREE !</h3>
            <p>On our website, there is no need for any money, students can easily and freely access the notes.</p>
        </div>
        <div>
            <img src={Notes} alt="" />
            <h3>All NOTES AVAILABLE !</h3>
            <p>On our website, all kinds of notes are freely available like programming notes, academic notes, and so on</p>
        </div>
    </div>
    </>
}
export default Whyus