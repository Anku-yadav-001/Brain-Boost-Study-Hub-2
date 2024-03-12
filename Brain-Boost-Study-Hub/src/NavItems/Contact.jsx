import "../Styling/Contact.css"
import Telegram from '../assets/linkdin.png'
import Whatsapp from "../assets/whatsapp.png"
import Mobile from "../assets/contact.png"
import Email from "../assets/email.png"
import ReactWhatsapp from "react-whatsapp"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bfgerr5', 'template_8xongz5', form.current, {
        publicKey: 'KlQdv1y6_dtujhDbI',
      })
      .then(
        () => {
          alert("Message successfully send")
        },
        (error) => {
          
          alert("failed !! try again")
        },
      );
  };

    return <>
    <div className="contact-main-container">
        <h1 className="contact-header">Contact Us...</h1>
   <div className="contact-align">
   <div className="contact-main-div">
            <div className="form-details">
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="Enter Name" name="user_name"/>
            <input type="email" placeholder="Enter Email" name="user_email"/><br />
            <input type="tel" placeholder="Enter Phone Number" name="user_mobile"/>
            <input type="text" placeholder="Subject" name="subject_name"/><br />
            <textarea  cols="40" rows="10" placeholder="Enter your comment" name="message"></textarea><br />
            <button value="Send">Send Message</button>
        </form>
            </div>
            <div className="contact-details">
                <a href="https://www.linkedin.com/in/aman-yadav-462a62258/" style={{textDecoration:"none"}} target="_blank">
                <div className="contact-redirection">
                    <img src={Telegram} alt="" />
                    <h2>Linkdin</h2>
                    <p>+91 7898446814</p>
                </div>
                </a>
              <a href="mailto:amany49751@gmail.com" style={{textDecoration:"none"}}  target="_blank">
              <div className="contact-redirection">
                <img src={Email} alt="" />
                <h2>E-Mail</h2>
                <p>amany49751@gmail.com</p>
                </div>
              </a>
               
    <ReactWhatsapp number="+91 7898446814" message="Hello, aman !" style={{background:"black",border:"none"}}  target="_blank">
               <div className="contact-redirection">
                <img src={Whatsapp} alt="" />
                <h2>Whatsapp</h2>
                <p>+91 7898446814</p>
                </div>
    </ReactWhatsapp>
                 
                <div className="contact-redirection">
                <img src={Mobile} alt="" />
                <h2>Call</h2>
                <p>+91 7898446814</p>
                </div>
            </div>
        </div>
   </div>
        <hr  style={{color:"red",marginTop:"20px",width:"90%",marginLeft:"5%"}}/>
       <div className="footer-details">
        <p style={{textDecoration:"underline"}}>Made With ❤️ By Aman yadav.</p>
        <p style={{marginTop:"5px",fontSize:"15px"}} className="desclaimer"><b>Disclaimer</b> : This is not an RGPV official site. We do not take any liability for the correctness of material we provide or host. Any messages sent by contact form regarding business or legal inquiry will not be taken seriously.</p>
       </div>
    </div>
    </>
}
export default Contact