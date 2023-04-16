import Controller from '@ember/controller';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class WeatherController extends Controller {
  query = '';

  @action
  updateQuery(event) {
    this.set('query', event.target.value);
  }

  @action
  async searchWeather(event) {
    event.preventDefault();

    // Fetch weather data using the OpenWeatherMap API
    // Replace YOUR_API_KEY with your actual API key
    const apiKey = 'a78659d13e596b5af12ae15d4d6d70e0';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${apiKey}&units=metric`
    );
    const weatherData = await response.json();

    if (response.ok) {
      this.set('weatherData', {
        cityName: weatherData.name,
        temperature: weatherData.main.temp,
        description: weatherData.weather[0].description,
        icon: weatherData.weather[0].icon,
        humidity: weatherData.main.humidity,
        windSpeed: weatherData.wind.speed,
        pressure: weatherData.main.pressure,
      });
    } else {
      alert('Error: ' + weatherData.message);
    }
  }
}
