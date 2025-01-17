import { useState } from 'react'

import './App.css'
import About from "./Components/About.jsx";
import Home from './Components/Home.jsx';
import Price from './Components/Price.jsx';
import PGComponent from './Components/Pg.jsx';
import Candidates from './Components/Candidates.jsx';
import Profile from './Components/Profile.jsx';
import { Routes, Route, Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatApp from './Components/ChatUser.jsx';
import Signup from './Components/Signup.jsx';
import Login from './Components/Login.jsx';


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
      path: "/signup",
      element: <Signup/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/profile",
      element: <Profile/>
    },
    {
      path: "/chatting",
      element: <ChatApp/>
    }
  ]);
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
