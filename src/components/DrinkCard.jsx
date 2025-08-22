export default function DrinkCard({ drink }) {
  return (
    <div className="bg-gray-800 text-white rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={drink.strDrinkThumb} alt="Drink" />
      <div className="px-4 py-3">
        <div className="font-bold text-xl mb-2">{drink.strDrink}</div>
        <p className="text-gray-300 text-base">
          {drink.strInstructions?.slice(0, 100)}...
        </p>
      </div>
    </div>
  )
}