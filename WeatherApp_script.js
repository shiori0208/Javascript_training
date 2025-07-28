document.addEventListener('DOMContentLoaded', () => {
    const city_input = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameDisplay = document.getElementById("city-name");
    const tempDisplay = document.getElementById("temperature");
    const descDisplay = document.getElementById("description");
    const errorMessage = document.getElementById("error-message"); 

    getWeatherBtn.addEventListener('click', () => {
        const city = city_input.value.trim();
        if(!city) return; 

       


    })

}); 