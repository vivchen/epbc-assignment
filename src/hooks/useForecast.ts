import { useState, useEffect, ChangeEvent, SetStateAction } from 'react';

import { optionType, forecastType } from '../types/index'

const useForecast = (setWeatherCards: { (value: SetStateAction<forecastType[]>): void; (arg0: (prevWeatherCards: any) => any[]): void; }) => {
    const limit = 5;
    const [term, setTerm] = useState<string>('');
    const [city, setCity] = useState<optionType | null>(null)
    const [searchOptions, setSearchOptions] = useState<[]>([]);
    const [forecast, setForecast] = useState<forecastType | null>(null)
    
    const getSearchOptions = (value: string) => {
        fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=${limit}&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then(res => res.json())
        .then(data => setSearchOptions(data))
    }

    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setTerm(value);

        if (value === '') return;

        getSearchOptions(value);
    }

    const onOptionSelect = (option: optionType) => {
        setCity(option);
    }

    const getForecast = (city: optionType) => { 
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${city.lat}&lon=${city.lon}&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then((data) => {
            setForecast(data)
     
            // setWeatherCards((prevWeatherCards: any) => [...prevWeatherCards, data]);
            setWeatherCards(prevWeatherCards => {
                // Check if data already exists in prevWeatherCards
                const isDataExists = prevWeatherCards.find(
                    (weatherCard: forecastType) => weatherCard.name === data.name
                );
                
                // If data doesn't exist, add it to prevWeatherCards
                if (!isDataExists) {
                    return [...prevWeatherCards, data];
                }
                
                // If data already exists, return the unchanged prevWeatherCards
                return prevWeatherCards;
                });
        })
    }
    
    const onSubmit = () => {
        if (!city) return;
        
        getForecast(city);
    }

    useEffect(() => {
        if (city) {
        setTerm(city.name);
        setSearchOptions([]);
        }
    }, [city])

    return { term, searchOptions, forecast, onInputChange, onOptionSelect, onSubmit }
}

export default useForecast;