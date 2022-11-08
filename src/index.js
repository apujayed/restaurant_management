import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import SignupPage from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
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
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
  rootElement
);
