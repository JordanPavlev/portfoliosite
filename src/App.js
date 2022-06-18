import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        
          <Route path='/' element={<Home />}/>
          <Route path='about' element={<About />} />
          
          <Route path='/' element={<Sidebar/>}>
          <Route path='contacts' element={<Contacts />} />
          </Route>
          </Route>
          
          
      </Routes>
    </>
  )
}

export default App;
