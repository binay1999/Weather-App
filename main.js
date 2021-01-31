var button = document.getElementById("btn");
var head = document.getElementById("heading");
var input = document.getElementById("inp");
var temperature = document.getElementById("temp");
var feel_like = document.getElementById("fl");
var hum = document.getElementById("hum");
var max = document.getElementById("max");
var min = document.getElementById("min");


button.addEventListener('click', e => {
    clear();
    let city = input.value;
    head.innerText=city;
    
    //ES6 template strings helped me to pass the value of city
    let url= `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7efed7047fb79693ebcf74d7887dc59b&units=metric`;
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        printData(data);
    });
});
function printData(data){
    let main = data['main'];
    let temp =  main['temp'];
    let feels_like = main['feels_like'];
    let humidity =  main['humidity'];
    let temp_max =  main['temp_max'];
    let temp_min =  main['temp_min'];
    
    temperature.innerText = 'Temperature: ' + temp;
    feel_like.innerText = 'Feels like: ' + feels_like;
    hum.innerText = 'Humidity: ' + humidity;
    max.innerText = 'Maximum Temperature: ' + temp_max;
    min.innerText = 'Minimun Temperatue: ' + temp_min;
}
