import './App.css'
import React from "react";
import {Route, Routes} from "react-router-dom";
import Layouts from "@/layouts";
import Login from "@/pages/Login";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layouts/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
