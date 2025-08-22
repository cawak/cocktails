import { useState, useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import MainLayout from './layouts/MainLayout'
import SearchForm from './components/SearchForm'
import LoadingIndicator from './components/LoadingIndicator'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  

function App() {

  const [search, setSearch] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState('');
  const [heading, setHeading] = useState('Random Drinks');
  const [loading, setLoading] = useState(false);

  const fetchRandomDrinks = async () => {
    setError('')
    setLoading(true)
    try {
      const url = `${API_BASE_URL}/random.php`
      const promises = Array.from({ length: 6 }, () => fetch(url).then(response => response.json()))
      const results = await Promise.all(promises)
      const randomDrinks = results.map(result => result.drinks[0])
      setDrinks(randomDrinks)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching random drinks:', error)
      setError('Error fetching random drinks')
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRandomDrinks();
  }, []);

  const handleSearch = (query) => {
    console.log('Search query:', query)

    if (!query) {
      setHeading('Random Drinks');
      fetchRandomDrinks();
      return;
    }
    
    setDrinks([]); 
    setError('');
    setLoading(true);
    try {
      const url = `${API_BASE_URL}/search.php?s=${query}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log('Search results:', data);
          setLoading(false);
          setHeading(`Search Results for "${query}"`);
          setDrinks(data.drinks || []);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
          setLoading(false);
          setError('Error fetching data')
        });
    } catch (error) {
      console.error('Error in handleSearch:', error);
      setError('Error fetching drinks');
      setLoading(false);
      setDrinks([]);
    }
  }

  return (
    <MainLayout>
      <div className="p-4">
        <div className="flex flex-col items-center mt-8 mb-8">
          <SearchForm search={search} setSearch={setSearch} handleSearch={handleSearch} />
        </div>
        <h2 className="text-2xl font-bold text-left mb-4">{heading}</h2>
        {drinks.length === 0 && !error && <p className="text-center py-8 text-gray-500">No drinks found. Try searching for something else.</p>}
        {error && <p className="text-red-500 text-center py-8">{error}</p>}
        {loading && <LoadingIndicator />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {drinks.map((drink) => (
            <Card
              key={drink.idDrink}
              drink={drink}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default App
