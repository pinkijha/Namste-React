import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import  "@testing-library/jest-dom";

describe("contactPage TestCases", () => {

    test('should load Contact Us component', () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
        
        //assertion
        expect(heading).toBeInTheDocument();
    });
    
    test('should load button inside Contact component', () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
        
        //assertion
        expect(button).toBeInTheDocument();
    });
    
    test('should load input place holder Contact Us component', () => {
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("enter your full name");
        
        
    console.log(inputName);
        //assertion
        expect(inputName).toBeInTheDocument();
    });
    
    
    test('should load alt attribute from img tag of Contact component', () => {
        render(<Contact/>);
    
        const img = screen.getByAltText("Contact");
        
        //assertion
        expect(img).toBeInTheDocument();
    });
    

})



