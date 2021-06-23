function getWeatherKiev(){
    fetch('http://api.openweathermap.org/data/2.5/weather?id=703448&appid=b2e5436d2cfc0def4de91fbf8d654a51')
    .then(function (resp) {
    return resp.json()
    })

        .then(function (data) {
    console.log(data);
    document.querySelector('.location').textContent = data.name.toUpperCase();
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg; C';
    let desc = data.weather[0].description;
    document.querySelector('.weathercon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
    let date = new Date();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let minutes =
        date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
    let result = `${weekday[date.getDay()].toUpperCase()} | ${months[date.getMonth()].toUpperCase().substring(0, 3)}
         ${date.getDate()} |  ${date.getHours()}:${minutes}`;
        document.querySelector('.date').innerHTML=result;

        })

    .catch(function () {
    // catch any errors
    });
}

document.querySelector('.btnKiev').addEventListener('click',getWeatherKiev);

function getWeatherDnipro (){
fetch('http://api.openweathermap.org/data/2.5/weather?q=Dnipro,ua&appid=b2e5436d2cfc0def4de91fbf8d654a51')
.then(function (resp) {
    return resp.json()
})


.then(function (data) {
    console.log(data);
    document.querySelector('.location').textContent = data.name.toUpperCase();
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg; C';
    let desc = data.weather[0].description;
    document.querySelector('.weathercon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
    document.querySelector('.description').innerHTML = data.weather[0].description.toUpperCase();
    let date = new Date();

    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    let minutes =
        date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
    let result = `${weekday[date.getDay()].toUpperCase()} | ${months[date.getMonth()].toUpperCase().substring(0, 3)}
         ${date.getDate()} |  ${date.getHours()}:${minutes}`;
        document.querySelector('.date').innerHTML=result;

})
.catch(function () {
    // catch any errors
})
}


document.querySelector('.btnDnipro').addEventListener('click',getWeatherDnipro);


function getWeatherKalutara (){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Kalutara,lk&appid=b2e5436d2cfc0def4de91fbf8d654a51')
    .then(function (resp) {
        return resp.json()
    })
    
    
    .then(function (data) {
        console.log(data);
        document.querySelector('.location').textContent = data.name.toUpperCase();
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg; C';
        let desc = data.weather[0].description;
        document.querySelector('.weathercon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
        document.querySelector('.description').innerHTML = data.weather[0].description.toUpperCase();
        let date = new Date();
        let n = date.getTimezoneOffset();
        console.log(n);
        let timezone = n / -60;
        console.log(timezone);
        
        let months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ];
    
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
    
        let minutes =
            date.getMinutes() <= 9 ? "0" + date.getMinutes() : date.getMinutes();
        let result = `${weekday[date.getDay()].toUpperCase()} | ${months[date.getMonth()].toUpperCase().substring(0, 3)}
             ${date.getDate()} |  ${date.getHours() + 3}:${minutes}`;
            document.querySelector('.date').innerHTML=result;
    
    })
    .catch(function () {
        // catch any errors
    })
    }
    
    
    document.querySelector('.btnSriLanka').addEventListener('click',getWeatherKalutara);