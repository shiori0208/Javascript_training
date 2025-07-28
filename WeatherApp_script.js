document.addEventListener('DOMContentLoaded', () => {
    const city_input = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const tempDisplay = document.getElementById("temperature");
    const descDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message"); 

    const API_KEY = "b562d08adfdfc4a84eb9c50aa1f5eb48"; 


    getWeatherBtn.addEventListener('click', () => {
        const city = city_input.value.trim();
        if(!city) return; 

    }); 

    function fetchWeatherData(city) {
        //gets data
    }

    function displayWeatherData(weatherData) {
        //display
    }

    function showError() {
        weatherInfo.classList.add('hidden');
        errorMessage.classList.remove('hidden'); 
    }

}); 
