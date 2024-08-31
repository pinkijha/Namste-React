import { CONTACT_IMAGE } from "../utils/constant";
// import ContactForm from "./ContactForm";
// import ContactFormClass from "./ContactFormClass";
import React from "react";
// import UserContext from "../utils/UserContext";


const Contact = () =>{
    return(
        <div className="contact flex flex-col items-center lg:flex-row lg:items-start p-4">
                  <div className="contact-img w-full lg:w-1/2 flex justify-center mb-4 lg:mb-0">
                      <img
                          className="w-full max-w-md h-auto rounded-lg shadow-lg"
                          src={CONTACT_IMAGE}
                          alt="Contact"
                      />
                  </div>
                  <div>
               <h1 className="contact-heading text-lg font-bold">Contact Us</h1>
              <div className="contact-card">
                  <form className="contact-form">
                      Full Name:
                      <input type="text" placeholder="enter your full name"></input>
                      Email:
                      <input type="email" placeholder="enter your email"></input>
                      Mobile Number:
                      <input type="number" placeholder="enter your number"></input>
                      Subject:
                      <textarea
                          name="subject"
                          placeholder="Write something.."
                          style={{ height: '90px' }}
                      />                             
                      <button className="submit-btn" type="submit">Send</button>
                  </form>
              </div>
          </div>
              </div>
    )
}


export default Contact;
