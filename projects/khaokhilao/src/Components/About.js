import { ABOUT_IMAGE } from "../utils/constant";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
    return (
        <div>
        <div className="about flex m-[20px]">
            <div className="about-section m-[10px] p-[80px]">
            <h1 className="about-heading font-bold text-5xl"> We Deliver <br/> Delicious & <br/> healthy Food</h1>
            <p className="about-para mt-[10px]">At <span className="title text-orange-700 font-bold">Khao Khilao</span>, we're passionate about bringing delicious food from your favorite restaurants straight to your doorstep. Our mission is to provide a seamless and delightful food delivery experience, making it easy for you to enjoy a variety of cuisines from the comfort of your home or office.</p>
            <button className="booktable 
            bg-orange-500 text-white rounded-md border-orange-200
             cursor-pointer p-2 mt-4  text-2xl">Book A Table</button>
            </div>
            <img 
            className="about-img ml-0 mr-[50px]"
            src={ABOUT_IMAGE} 
            />             
        </div>
        <div className=" flex justify-center mt-4 p-4 border border-t-2 shadow-inner ">
        <Footer/>
      </div> 
      </div>
    )
}

export default About;