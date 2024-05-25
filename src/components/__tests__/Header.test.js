import { fireEvent, render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load the Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");

  expect(loginButton).toBeInTheDocument();
});

it("should load the Header component with a cart items 2", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart:(2 Items)");

  expect(cartItems).toBeInTheDocument();
});

it("should load the Header component with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //writing the regex
  const cartItems = screen.getByText(/cart/);

  expect(cartItems).toBeInTheDocument();
});




it("should change login button to logout onclick of hutton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton=screen.getByRole("button",{name:'Login'})

  fireEvent.click(loginButton)

  const logoutButton=screen.getByRole("button",{name:'Logout'})
  
  expect(logoutButton).toBeInTheDocument()
  
});












//at first it will fail : shows could not find react-redux context value, so we need to give a provider
// after this we should provide the contex of react router don (Link tag)
