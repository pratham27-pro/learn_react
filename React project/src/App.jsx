import { useState } from 'react'

import './App.css'
import About from "./Components/About.jsx";
import Home from './Components/Home.jsx';
import Price from './Components/Price.jsx';
import PGComponent from './Components/Pg.jsx';
import Candidates from './Components/Candidates.jsx';
import Auth from './Components/Auth.jsx';
import Footer from './Components/Footer.jsx';
import { Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/pg",
      element: <PGComponent/>
    },
    {
      path: "/price",
      element: <Price/>
    },
    {
      path: "/candidates",
      element: <Candidates/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/auth",
      element: <Auth/>
    }
  ]);
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App
