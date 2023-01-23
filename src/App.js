import React from 'react'
import Header from './inc/Header'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Footer from './inc/Footer'
import Animals from './pages/Animals'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import DbOperations from './components/db-operations'
import Admin from './pages/Admin'
import Forms from './pages/Forms'
import Mruczek from './pages/animalpages/Mruczek'
import Reks from './pages/animalpages/Reks'
import Leo from './pages/animalpages/Leo'
import Lucy from './pages/animalpages/Lucy'
import Misiek from './pages/animalpages/Misiek'
import Tiger from './pages/animalpages/Tiger'
import Klemens from './pages/animalpages/Klemens'
import Boran from './pages/animalpages/Boran'
import Sofi from './pages/animalpages/Sofi'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/Animals" element={<Animals />}/>
        <Route path="/Animals/Mruczek" element={<Mruczek />}/>
        <Route path="/Animals/Klemens" element={<Klemens />}/>
        <Route path="/Animals/Lucy" element={<Lucy />}/>
        <Route path="/Animals/Leo" element={<Leo />}/>
        <Route path="/Animals/Tiger" element={<Tiger />}/>
        <Route path="/Animals/Sofi" element={<Sofi />}/>
        <Route path="/Animals/Misiek" element={<Misiek />}/>
        <Route path="/Animals/Boran" element={<Boran />}/>
        <Route path="/Animals/Reks" element={<Reks />}/>
        <Route path="/Admin" element={<Admin />}/>
        <Route path="/Forms" element={<Forms />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
