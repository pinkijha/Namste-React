import { useState } from "react";
import ContactFormClass from "./ContactFormClass";
const ContactForm = () =>{
    return (
        <div>
             <h1 className="contact-heading">Contact Us</h1>
            <div className="contact-card">
                <form className="contact-form">
                    Full Name:
                    <input type="text" placeholder="enter your full name"></input>
                    Email:
                    <input type="email" placeholder="enter your full email"></input>
                    Mobile Number:
                    <input type="number" placeholder="enter your full number"></input>
                    Subject:
                    <textarea
                        name="subject"
                        placeholder="Write something.."
                        style={{ height: '90px' }}
                    />                                     
                     {/* <ContactFormClass /> */}
                    <button className="submit-btn" type="submit">Send</button>
                </form>
            </div>
        </div>

    )
}

export default ContactForm;