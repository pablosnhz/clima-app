const api = {
    key: '78c2c673025dc1c7c3572ab38285d62e',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

async function search(query){
    try {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es`)
        const data = await response.json();
        console.log(data);
    } catch(err) {
        console.log(err);
        alert('Hubo un error');
    }
}

function onSubmit(event){
    event.preventDefault();
    search(searchInput.value)
}

const searchForm = document.getElementById('searchform');
const searchInput = document.getElementById('search__input');

searchForm.addEventListener('submit', onSubmit, true);
