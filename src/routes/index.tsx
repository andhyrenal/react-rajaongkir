import { createHashRouter } from "react-router-dom";
import Login from "../components/Login";
import Home from "../components/Home";

export const router = createHashRouter([
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
]);