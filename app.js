const card = document.getElementById('card')

const city = document.getElementById('city')
const date = document.getElementById('date')
const temp = document.getElementById('temp')
const weather = document.getElementById('weather')
const range = document.getElementById('range')

const searchForm = document.getElementById('searchform');
const searchInput = document.getElementById('search__input');


searchForm.addEventListener('submit', onSubmit, true);

const api = {
    key: '78c2c673025dc1c7c3572ab38285d62e',
    url: `https://api.openweathermap.org/data/2.5/weather`
}



function onSubmit(event){
    event.preventDefault();
    search(searchInput.value)
}

async function search(query){
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
        const data = await response.json();
        
        card.style.display = 'block';

        city.textContent = `${data.name}, ${data.sys.country}`;
        date.textContent = (new Date()).toLocaleDateString();
        temp.textContent = toCelsius(data.main.temp);
        weather.textContent = data.weather[0].description;
        range.textContent = `${toCelsius(data.main.temp_min)} / ${toCelsius(data.main.temp_max)}`;


    } catch(err) {
        console.log(err);
        alert('Hubo un error');
    }
}

function toCelsius(temperature) {
    const celsius = temperature - 273.15;
    const celsiusString = parseInt(celsius).toString(); 
    return `${celsiusString}°C`;
}