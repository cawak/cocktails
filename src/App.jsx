import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import MainLayout from './layouts/MainLayout'
import SearchForm from './components/SearchForm'
import LoadingIndicator from './components/LoadingIndicator'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Ingredients from './views/Ingredients'
import DrinksByIngredient from './views/DrinksByIngredient'

function App() {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredients" element={<Ingredients />} />
      <Route path="/ingredient/:ingredient" element={<DrinksByIngredient />} />
    </Routes>
  )
}

export default App
