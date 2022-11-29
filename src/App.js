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

export default function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />}/>
        <Route path="/animals" element={<Animals />}/>
        <Route path="/Admin" element={<Admin />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
