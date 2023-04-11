import { forecastType } from "../types";

type Props = {
    data: forecastType
}

const WeatherCard = ({ data }: Props): JSX.Element => {
  return (
    <li className="flex flex-col text-zinc-700 bg-white py-10 px-6 rounded-2xl">
      <h1 className="text-2xl">{data.name}, <span className="text-lg font-normal">{data.sys.country}</span></h1>
      <div className="flex flex-col mt-6">
        <h2 className="text-4xl font-bold">{data.main.temp}°</h2>
        <img 
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
            alt={data.weather[0].description}
            className="w-24"
        />
        <h2 className="text-2xl mt-2">{data.weather[0].description}</h2>
      </div>
    </li>
  );
};



export default WeatherCard;