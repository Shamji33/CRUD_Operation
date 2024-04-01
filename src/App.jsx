import { useState } from 'react'
import './App.css'
import ViewData from './Components/View_data/ViewData'
import { Route, Routes } from 'react-router'
import Add from './Components/Add/Add'
import Update from './Components/Update/Update'
import Header from './Components/Header/Header'

function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<ViewData/>}/>
      <Route path='/create' element={<Add/>}/>
      <Route path='/update/:id' element={<Update/>}/>
      <Route path='/delete' element={<Add/>}/>
    </Routes>
    </>
  )
}

export default App
