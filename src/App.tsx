import Search from './components/Search';
import useForecast from './hooks/useForecast';
import { forecastType } from './types';
import { useState } from 'react';

import WeatherCard from './components/WeatherCard';

const App = (): JSX.Element => {

  const [weatherCards, setWeatherCards] = useState<forecastType[]>([]);
  const { term, searchOptions, onInputChange, onOptionSelect, onSubmit } = useForecast(setWeatherCards);

  return (
    <main className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full">
      
      <Search term={term} searchOptions={searchOptions} onInputChange={onInputChange} onOptionSelect={onOptionSelect} onSubmit={onSubmit} />

      <ul className="grid gap-8 mt-10 grid-cols-4 p-10">
        {weatherCards.map((weatherCard, index) => (
          <WeatherCard data={weatherCard} index={index} />
        ))}
      </ul>
      
    </main>
  )
}

export default App
