const api = {
    key: '78c2c673025dc1c7c3572ab38285d62e',
    url: `https://api.openweathermap.org/data/2.5/weather`
}

function onsubmit(event){
    event.preventDefault();
    alert(searchInput.value);
}

const search = document.getElementById('search')
const searchInput = document.getElementById('search__input') 

search.addEventListener('submit', onsubmit, true);
