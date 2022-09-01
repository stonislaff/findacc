import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import MainPage from "./pages/mainpage/mainpage";
import Background from "./components/background/background";
import Search from "./pages/search/search";
import About from "./pages/aboutus/about";
import Rate from "./pages/rate/rate";
import Login from "./pages/login/login";
import SignUp from "./pages/signup/signup";

function App() {
  return (
      <BrowserRouter>
          <Header/>
        <Routes>
            <Route path="/" element={<Background block={<MainPage/>}/>}/>
            <Route path="/search" element={<Background block={<Search/>}/>}/>
            <Route path="/rate" element={<Background block={<Rate/>}/>}/>
            <Route path="/about-us" element={<Background block={<About/>}/>}/>
            <Route path="/login" element={<Background block={<Login/>}/>}/>
            <Route path="/sign-up" element={<Background block={<SignUp/>}/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
