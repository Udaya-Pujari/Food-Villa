import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurentMenu from "./components/RestaurentMenu";
import UserContext from "./components/UserContext";
// import Grocery from "./components/Grocery";

// the following names are used for optimising the code

//1. chunking.
//2. code Splitting.
//3. Dynamic Bundling.
//4. lazy loading.
//5. on demand loading.
//6. dynamic import.

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    //make a api call for username and password
    const data = {
      name: "Udaya Puajri",
    };
    setUserName(data.name);
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
      <div className="app">
        <Header />
        {/* ------- */}
        {/* <Body /> */}
        <Outlet />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurentMenu />,
      },
      {
        path: "/grocery",
        element: (
          //insted of loading we can pass the shimmer UI in the below line
          <Suspense fallback={<h1>Loading ....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
