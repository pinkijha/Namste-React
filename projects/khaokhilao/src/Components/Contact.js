import { CONTACT_IMAGE } from "../utils/constant";

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact-img">
                <img  className="contact-"
                src= {CONTACT_IMAGE} />

            </div>
            <form>
            <h1>Contact Us</h1>
            <label>First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            
            <label>First Name:</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            
            
            <label for="country">Country</label>
            <select id="country" name="country">
            <option value="australia">India</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
            </select>

            <button>Submit</button>

            
            </form>

        </div>
    )
}
export default Contact;