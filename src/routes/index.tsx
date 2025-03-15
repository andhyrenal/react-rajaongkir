import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
]);