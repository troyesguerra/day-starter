const key = 'ac82331ec8dc4ead94c63150222001'
const defaultLocation = 'manila';
const days = 1;
const url2 = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${defaultLocation}&days=${days}&aqi=yes&alerts=no`

const form = document.querySelector('#form');
const search = document.querySelector('.search')

const defaultCity = document.querySelector('.default-city')
const temperature = document.querySelector('.temperature')
const icon = document.querySelector('.icon')
const weather = document.querySelector('.weather')

const country = document.querySelector('.country');
const humidity = document.querySelector('.humidity');
const feelsLike = document.querySelector('.feels-like');
const wind = document.querySelector('.wind');
const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const moonrise = document.querySelector('.moonrise');
const moonPhase = document.querySelector('.moon-phase');

const panelDay = document.querySelector('.panel-day')
const currentTime = document.querySelector('.current-time')
const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const body = document.querySelector('body')
const quoteUrl = 'https://type.fit/api/quotes';

const dayImages = {
    "Sunny": 'https://images.unsplash.com/photo-1581077368851-1806b240bb5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Partly Cloudy": 'https://images.unsplash.com/photo-1614849427248-287c4e88ef58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Cloudy": 'https://images.unsplash.com/photo-1508012340316-cdf9d309cea0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',

    "Overcast": 'https://images.unsplash.com/photo-1499956827185-0d63ee78a910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Mist": 'https://images.unsplash.com/photo-1522159773307-1976d1531738?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',

    "Blowing Snow": 'https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80',

    "Blizzard": 'https://images.unsplash.com/photo-1616183524922-6578ae9d4d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',

    "Fog": 'https://images.unsplash.com/photo-1465326117523-6450112b60b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',

    "Freezing Fog": 'https://images.unsplash.com/photo-1517782520350-a197eca44965?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',

    "Light Drizzle": 'https://images.unsplash.com/photo-1516038858785-1cf85ef58b0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Freezing Drizzle": 'https://images.unsplash.com/photo-1493314894560-5c412a56c17c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',

    "Heavy freezing Drizzle": 'https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1334&q=80',

    "Light Rain": 'https://images.unsplash.com/photo-1516389207633-e5784a9518d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Moderate Rain": 'https://images.pexels.com/photos/1425299/pexels-photo-1425299.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',

    "Heavy Rain": 'https://images.unsplash.com/photo-1501999635878-71cb5379c2d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80',

    "Light Sleet": 'https://images.unsplash.com/photo-1556046683-f8c5a47641d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1201&q=80',

    "Moderate or heavy sleet": 'https://images.unsplash.com/photo-1567132801257-c956f7f99872?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',

    "Light Snow": 'https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',

    "Moderate Snow": 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',

    "Heavy Snow": 'https://images.unsplash.com/photo-1487424439918-bc6b5bef0380?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80',

    "Ice Pellets": 'https://images.unsplash.com/photo-1546734738-fbf210dd3b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80',


    "Moderate or Heavy Rain Shower": 'https://images.unsplash.com/19/drops.JPG?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1977&q=80',

    "Moderate or heavy rain in area with thunder": 'https://images.unsplash.com/photo-1597611902475-b05a17deb7d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1221&q=80',

    "Moderate or heavy snow in area with thunder": 'https://images.unsplash.com/photo-1609188922653-2d270e4b4da2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80'
}
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

getData(url2);

// Fetch Weather Data
// AXIOS METHOD

// axios.get(url)
//     .then(function (response) {
//         console.log(response)
//     })
//     .catch(function (err) {
//         console.log(err)
//     });

// async function getData() {
//     try {
//         const response = await axios.get(url);
//         console.log(response)
//     } catch (error) {
//         console.log(error)
//     }
// }

// Async/Await Method
async function getData(link) {
    try {
        const response = await axios.get(link);
        displayData(response.data)
    } catch (error) {
        console.log(error)
    }
}

const displayData = (data) => {

    defaultCity.textContent = data.location.name
    temperature.textContent = `${data.current.temp_c}°C`
    weather.textContent = data.current.condition.text
    country.textContent = data.location.country
    humidity.textContent = `${data.current.humidity}%`
    feelsLike.textContent = `${data.current.feelslike_c}°C`
    wind.textContent = `${data.current.wind_kph}kph`
    sunrise.textContent = data.forecast.forecastday[0].astro.sunrise
    sunset.textContent = data.forecast.forecastday[0].astro.sunset
    moonrise.textContent = data.forecast.forecastday[0].astro.moonrise
    moonPhase.textContent = data.forecast.forecastday[0].astro.moon_phase
    icon.src = data.current.condition.icon

    changeBackground(data.current.condition.text);
}

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hours12 = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const year = time.getFullYear();
    const ampm = hours >= 12 ? 'PM' : 'AM'

    const minutesDisplay = `${minutes < 10 ? `0${minutes}`: minutes}`
    const secondsDisplay = `${seconds < 10 ? `0${seconds}`: seconds}`

    panelDay.textContent = `${weekdays[day]}, ${months[month]}-${date}-${year}`
    currentTime.textContent = `${hours12}:${minutesDisplay}:${secondsDisplay} ${ampm}`
}

async function getQuote(quoteLink) {
    try {
        const response = await axios.get(quoteLink);
        displayQuote(response.data);

    } catch (err) {
        console.log(err)
    }
}

const displayQuote = (data) => {
    const num = Math.floor(Math.random() * 1643);
    const newQuote = data[num].text;
    const newAuthor = data[num].author;
    quote.textContent = `"${newQuote}"`;
    author.textContent = `-${newAuthor}`;
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const searchTerm = search.value
    console.log(searchTerm)

    const city = searchTerm;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${city}&days=${days}&aqi=yes&alerts=no`
    getData(url);
    search.value = '';
})

function changeBackground(status) {

    switch (status.toLowerCase()) {
        default:
            body.style.backgroundImage = `url(${dayImages["Sunny"]})`;
            break;
        case "sunny":
            body.style.backgroundImage = `url(${dayImages["Sunny"]})`;
            break;
        case "partly cloudy":
            body.style.backgroundImage = `url(${dayImages["Partly Cloudy"]})`;
            break;
        case "cloudy":
            body.style.backgroundImage = `url(${dayImages["Cloudy"]})`;
            break;
        case "overcast":
            body.style.backgroundImage = `url(${dayImages["Overcast"]})`;
            break;
        case "mist":
            body.style.backgroundImage = `url(${dayImages["Mist"]})`;
            break;
        case "blowing snow":
            body.style.backgroundImage = `url(${dayImages["Blowing Snow"]})`;
            break;
        case "blizzard":
            body.style.backgroundImage = `url(${dayImages["Blizzard"]})`;
            break;
        case "fog":
            body.style.backgroundImage = `url(${dayImages["Fog"]})`;
            break;
        case "freezing fog":
            body.style.backgroundImage = `url(${dayImages["Freezing Fog"]})`;
            break;
        case "light drizzle":
            body.style.backgroundImage = `url(${dayImages["Light Drizzle"]})`;
            break;
        case "freezing drizzle":
            body.style.backgroundImage = `url(${dayImages["Freezing Drizzle"]})`;
            break;
        case "light rain":
            body.style.backgroundImage = `url(${dayImages["Light Rain"]})`;
            break;
        case "light rain shower":
            body.style.backgroundImage = `url(${dayImages["Light Rain"]})`;
            break;
        case "moderate rain":
            body.style.backgroundImage = `url(${dayImages["Moderate Rain"]})`;
            break;
        case "heavy rain":
            body.style.backgroundImage = `url(${dayImages["Heavy Rain"]})`;
            break;
        case "light sleet":
            body.style.backgroundImage = `url(${dayImages["Light Sleet"]})`;
            break;
        case "moderate":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy sleet"]})`;
            break;
        case "heavy sleet":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy sleet"]})`;
            break;
        case "light snow":
            body.style.backgroundImage = `url(${dayImages["Light Snow"]})`;
            break;
        case "light snow showers":
            body.style.backgroundImage = `url(${dayImages["Light Snow"]})`;
            break;
        case "moderate snow":
            body.style.backgroundImage = `url(${dayImages["Moderate Snow"]})`;
            break;
        case "heavy snow":
            body.style.backgroundImage = `url(${dayImages["Heavy Snow"]})`;
            break;
        case "ice pellets":
            body.style.backgroundImage = `url(${dayImages["Ice Pellets"]})`;
            break;
        case "moderate rain shower":
            body.style.backgroundImage = `url(${dayImages["Moderate or Heavy Rain Shower"]})`;
            break;
        case "heavy rain shower":
            body.style.backgroundImage = `url(${dayImages["Moderate or Heavy Rain Shower"]})`;
            break;
        case "moderate rain in area with thunder":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy rain in area with thunder"]})`;
        case "heavy rain in area with thunder":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy rain in area with thunder"]})`;
            break;
        case "heavy rain in area with thunder":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy rain in area with thunder"]})`;
            break;
        case "heavy snow in area with thunder":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy snow in area with thunder"]})`;
            break;
        case "moderate snow in area with thunder":
            body.style.backgroundImage = `url(${dayImages["Moderate or heavy snow in area with thunder"]})`;
            break;
    }
}

setTime()
setInterval(setTime, 1000)
getQuote(quoteUrl);

const hamburger = document.querySelector('.hamburger-menu');
const infoContainer = document.querySelector('.info-container');

hamburger.addEventListener('click', () => {
    if (infoContainer.style.visibility === 'hidden') {
        infoContainer.style.visibility = 'visible'
    } else {
        infoContainer.style.visibility = 'hidden'
    }
})