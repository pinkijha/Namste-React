import { ABOUT_IMAGE } from "../utils/constant";
import Header from "./Header";

const About = () => {
    return (
        <div className="about">
            <div className="about-section">
            <h1 className="about-heading"> We Deliver <br/> Delicious & <br/> healthy Food</h1>
            <p className="about-para">At <span className="title">Khao Khilao</span>, we're passionate about bringing delicious food from your favorite restaurants straight to your doorstep. Our mission is to provide a seamless and delightful food delivery experience, making it easy for you to enjoy a variety of cuisines from the comfort of your home or office.</p>
            <button className="booktable">Book A Table</button>
            </div>
            <img 
            className="about-img"
            src={ABOUT_IMAGE} 
            />
        </div>
    )
}

export default About;