import { writeFile } from 'node:fs/promises';

const API_KEY = process.env.OPENWEATHER_API_KEY;
const LATITUDE = 22.087;
const LONGITUDE = -159.492;
const UNITS = 'imperial';

if (!API_KEY) {
    console.error('OPENWEATHER_API_KEY is not set.');
    process.exit(1);
}

async function getWeatherData(endpoint) {
    const url = `https://api.openweathermap.org/data/2.5/${endpoint}?lat=${LATITUDE}&lon=${LONGITUDE}&units=${UNITS}&appid=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`OpenWeather ${endpoint} request returned ${response.status}`);
    }
    return response.json();
}

const current = await getWeatherData('weather');
const forecast = await getWeatherData('forecast');

const weather = {
    updated: new Date().toISOString(),
    current,
    forecast
};

await writeFile('data/weather.json', JSON.stringify(weather, null, 2) + '\n');
console.log('Saved weather data.');