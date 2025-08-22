import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import DrinkCard from '../components/DrinkCard'
import LoadingIndicator from '../components/LoadingIndicator'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function DrinksByIngredient() {
  const ingredient = ''
  const drinks = []
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  return (
    <MainLayout>
      <div className='p-4'>
        <h2 className='text-2xl font-bold mb-4'>Drinks with {ingredient}</h2>
        {error && <p className="text-center py-8 text-red-500">{error}</p>}
        {loading && <LoadingIndicator />}
        {!loading && drinks.length === 0 && !error && <p className="text-center py-8 text-gray-400">No drinks found</p>}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {drinks.map(drink => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}