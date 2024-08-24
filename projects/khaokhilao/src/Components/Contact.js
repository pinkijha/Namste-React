import { CONTACT_IMAGE } from "../utils/constant";
import ContactForm from "./ContactForm";
import ContactFormClass from "./ContactFormClass";
import React from "react";
import UserContext from "../utils/UserContext";

class Contact extends React.Component {

    constructor(){
        super();
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="contact">
                <div className="contact-img">
                    <img  className="contact-img"
                    src= {CONTACT_IMAGE} />
                </div>
                <div>
                    <UserContext.Consumer>
                        {({logedInUser}) =>
                             <h1 className="font-bold">User: {logedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                {/* <ContactForm/> */}
                <ContactFormClass  />
            </div>
        )
    }
    
  
    
}
export default Contact;