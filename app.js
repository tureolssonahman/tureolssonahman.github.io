
var button = document.querySelector('.Submit');
var inputValue = document.querySelector('.inputValue');
var namn = document.querySelector('.namn');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
    
function fetchApi() {
            
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&lang=sv&appid=78cc52620ef2e1a839eee97a0d2c1c42')
    .then(response => response.json())
    .then(data => {

        var nameValue = data.name;
        namn.innerHTML = nameValue;


        var tempValue = Math.round(data.main.temp);
        temp.innerHTML = tempValue + " °C";


        var descValue = data.weather[0].description;
        desc.innerHTML = descValue;


      });
        

};


function printApi() {
            
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&units=metric&metric&lang=sv&appid=78cc52620ef2e1a839eee97a0d2c1c42')
    .then(response => response.json())
    .then(data => {
        console.log(data)
      });
    }


document.querySelector('.Submit').addEventListener("click", fetchApi);
document.querySelector('.Submit').addEventListener("click", printApi);





