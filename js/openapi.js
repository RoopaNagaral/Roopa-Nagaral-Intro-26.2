const temperature = document.getElementById('temperature');
const weather = document.getElementById('weather');
const hourlyTemp = document.getElementById('hourlyTemp');
const weatherCondition = document.getElementById('weatherCondition');

temperature.addEventListener('click', getTemperature);
weather.addEventListener('click', getWeatherCondition);
async function getTemperature() {
    hourlyTemp.classList.remove('hourlyTempHide');
    hourlyTemp.classList.add('hourlyTemp');
    weatherCondition.classList.remove('weatherCond');
    weatherCondition.classList.add('weatherCondHide');

    try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.7831&longitude=-96.8067&hourly=temperature_2m,precipitation,wind_speed_10m&forecast_days=1');
        const data = await response.json();
        //console.log(data);
        const timeArray = data.hourly.time;
        const tempArray = data.hourly.temperature_2m;
        
        const hours = hourlyTemp.querySelector('.hour');
        const temps = hourlyTemp.querySelector('.temp');
        
        for(let i = 0; i < timeArray.length; i++){
            const timeString = timeArray[i];
            const hourList = document.createElement('li');
            const tempList = document.createElement('li');

            hourList.innerText = timeString.slice(11);
            tempList.innerText = tempArray[i];

            hours.appendChild(hourList);
            temps.appendChild(tempList);
            //console.log(timeString.slice(11), tempArray[i]);
        }

    } catch(error) {
        console.error(error);
    }
}

async function getWeatherCondition() {
    weatherCondition.classList.remove('weatherCondHide');
    weatherCondition.classList.add('weatherCond');
    hourlyTemp.classList.remove('hourlyTemp');
    hourlyTemp.classList.add('hourlyTempHide');

     try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=32.7831&longitude=-96.8067&hourly=temperature_2m,wind_speed_10m,relative_humidity_2m,rain,showers,snowfall,wind_direction_10m&forecast_days=1');
        const data = await response.json();
        //console.log(data.hourly.rain);
        const timeArray = data.hourly.time;
        const arrayWindSpeed = data.hourly.wind_speed_10m;
        const arrayWindDirection = data.hourly.wind_direction_10m;
        const arrayHumidity = data.hourly.relative_humidity_2m;
        const arrayRain = data.hourly.rain;
        const arrayShower = data.hourly.showers;
        const arraySnow = data.hourly.snowfall;
        
        const hours = weatherCondition.querySelector('.hours');
        const windSpeed = weatherCondition.querySelector('.windSpeed');
        const windDirection = weatherCondition.querySelector('.windDirection');
        const humidity = weatherCondition.querySelector('.humidity');
        const rain = weatherCondition.querySelector('.rain');
        const shower = weatherCondition.querySelector('.shower');
        const snow = weatherCondition.querySelector('.snow');

        for(let i = 0; i < timeArray.length; i++){
            const timeString = timeArray[i];
            const hoursList = document.createElement('li');
            const windSpeedList = document.createElement('li');
            const windDirectionList = document.createElement('li');
            const humidityList = document.createElement('li');
            const rainList = document.createElement('li');
            const showersList = document.createElement('li');
            const snowList = document.createElement('li');

            hoursList.innerText = timeString.slice(11);
            windSpeedList.innerText = arrayWindSpeed[i];
            windDirectionList.innerText = arrayWindDirection[i];
            humidityList.innerText = arrayHumidity[i];
            rainList.innerText = arrayRain[i];
            showersList.innerText = arrayShower[i];
            snowList.innerText = arraySnow[i];

            //console.log(arrayWindSpeed.length, windSpeedList);
            hours.appendChild(hoursList);
            windSpeed.appendChild(windSpeedList);
            windDirection.appendChild(windDirectionList);
            humidity.appendChild(humidityList);
            rain.appendChild(rainList);
            shower.appendChild(showersList);
            snow.appendChild(snowList);
        }

    } catch(error) {
        console.error(error);
    }
}