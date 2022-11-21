import React from 'react'
import Header from './inc/Header'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Footer from './inc/Footer'
import './App.css'
import {BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
