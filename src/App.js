import React from "react";
import { createGlobalStyle } from "styled-components";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
// import Nav from "./components/Nav";
// import Products from "./containers/Products";
// import FoodMenu from "./containers/FoodMenu";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
  }
  body {
    margin:0;
    padding-top:60px;
    font-size:14px;
  }

`
  ;

const getData = () => {
  console.log("azim")
}
getData()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
]);
export default function App() {
  return (
    <div className="App">
      {/* <GlobalStyle />
      <Nav />
      <FoodMenu />
      <Cart /> */}
      <RouterProvider router={router} />
    </div>
  );
}
