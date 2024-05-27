import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases",()=>{

  beforeAll(()=>{
    console.log('Before all')
  })
  beforeEach(()=>{
    console.log("Before Each");
  })

  afterAll(()=>{
    console.log("After All")      
  })

  afterEach(()=>{
    console.log("After each")
  })

  //NOTE: insted of writing test we can just write it
  test("Should laod the contact us component", () => {
    //when ever you are testing ui component inside react ,you will have to render that component on to js dom
    render(<Contact />);
  
    const heading = screen.getByRole("heading");
  
    //now I will write the assertion
    expect(heading).toBeInTheDocumnet();
  });
  
  test("Should laod the button inside Contact component", () => {
    //when ever you are testing ui component inside react ,you will have to render that component on to js dom
    render(<Contact />);
  
    const button = screen.getByRole("button");
  
    //now I will write the assertion
    expect(button).toBeInTheDocumnet();
  });
  
  test("Should laod the input name inside Contact component", () => {
    //when ever you are testing ui component inside react ,you will have to render that component on to js dom
    render(<Contact />);
  
    const inputName = screen.getByPlaceholderText("name");
  
    //now I will write the assertion
    expect(inputName).toBeInTheDocumnet();
  });
  
  test("Should laod the 2 input boxes inside Contact component", () => {
    //when ever you are testing ui component inside react ,you will have to render that component on to js dom
    render(<Contact />);
  
    const inputBoxes = screen.getAllByRole("textbox");
    console.log(inputBoxes.length);
  
    //now I will write the assertion
    expect(inputBoxes.length).toBe(2);
  });
  
})
//firstly we get the error saying jsx is not enabled for our application
// it says that add @babel/preset-react, then we need to install npm i -D @babel/preset-react
// after this we need to configure the babel as ['@babel/preset-react',{runtime:"automatic"}]    refer babel.config.js
//after changing all of this and if run the test case again it will fail again



