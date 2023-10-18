import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let apiKey = "ce144f0cf51fa43f03431f0488a36728";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/oncecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Weaterforecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thur</div>
          <WeatherIcon code="01d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherFroecast-temperature-max">19º</span>
            <span className="WeatherFroecast-temperature-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
