import { useState } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Skills from './components/Skills'


function App() {
 

  return (
   <div className="app">
<BrowserRouter>

<Header/>
<Routes>

  <Route path='/' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/skills' element={<Skills/>} />

  <Route path='/projects' element={<Project/>} />
  <Route path='/contact' element={<Contact/>} />
</Routes>

</BrowserRouter>

   </div>
  )
}

export default App
