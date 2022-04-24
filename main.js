let place=document.querySelector('.location');
let button=document.querySelector('.button');
let temprature=document.querySelector('.temprature');

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place.value}&units=metric&appid=151bebe1768d5b347105d1fb20ad8221`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Invalid Location'));
})

const displayData=(weather)=>{
    temprature.innerText=`${weather.main.temp}°C`
}