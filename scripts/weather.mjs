export async function initWeather() {
    try {
        const response = await fetch('data/weather.json');
        if (!response.ok) throw new Error('Weather data not available');
        const weather = await response.json();

        displayCurrentWeather(weather.current);
        displayForecast(getForecastHighs(weather.forecast));
    } catch (error) {
        console.error('Error loading weather:', error);
        displayWeatherError();
    }
}

function getForecastHighs(data) {
    const dailyHighs = {};
    data.list.forEach(item => {
        const date = new Date(item.dt * 1000).toDateString();
        const temp = item.main.temp_max;
        if (!dailyHighs[date] || temp > dailyHighs[date]) {
            dailyHighs[date] = temp;
        }
    });

    return Object.values(dailyHighs).slice(1, 6);
}

function displayCurrentWeather(data) {
    const container = document.querySelector('#current-weather');
    if (!container) return;

    container.innerHTML = `
        <div class="current-weather">
            <h3>Current Weather</h3>
            <div class="weather-main">
                <div class="weather-temp">${Math.round(data.main.temp)}°F</div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                     alt="${data.weather[0].description}" class="weather-icon">
            </div>
            <div class="weather-details">
                <p class="weather-desc">${data.weather[0].description}</p>
                <p>High: ${Math.round(data.main.temp_max)}°F</p>
                <p>Low: ${Math.round(data.main.temp_min)}°F</p>
                <p>Humidity: ${data.main.humidity}%</p>
            </div>
        </div>
    `;
}

function displayForecast(highTemperatures) {
    const container = document.querySelector('#weather-forecast');
    if (!container) return;

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date().getDay();

    container.innerHTML = `
        <h3>5-Day Forecast</h3>
        <div class="forecast-container">
            ${highTemperatures.map((temp, index) => {
        const dayIndex = (today + index + 1) % 7;
        return `
                    <div class="forecast-day">
                        <div class="forecast-date">${daysOfWeek[dayIndex]}</div>
                        <div class="forecast-high">${Math.round(temp)}°F</div>
                    </div>
                `;
    }).join('')}
        </div>
    `;
}

function displayWeatherError() {
    const containers = document.querySelectorAll('#current-weather, #weather-forecast');
    containers.forEach(container => {
        if (container) {
            container.innerHTML = '<p>Weather data temporarily unavailable</p>';
        }
    });
}
