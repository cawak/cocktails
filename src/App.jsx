import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import DrinksByIngredient from './views/DrinksByIngredient'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ingredient/:ingredient" element={<DrinksByIngredient />} />
    </Routes>
  )
}

export default App
