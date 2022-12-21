const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ad853b7eb4msh9cc3ed0585ea9d0p1d1ae3jsnae2bd4ec48e9',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getweather = (city) => {
	cityName.innerHTML=city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			//cloud_pct.innerHTML = response.cloud_pct
			temp.innerHTML = response.temp
			temp2.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			humidity2.innerHTML = response.humidity
			min_temp.innerHTML = response.min_temp
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed2.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset


		})
		.catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getweather(city.value)

})
getweather("Delhi")

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctd.innerHTML = response.cloud_pct
			tempd.innerHTML = response.temp
			feels_liked.innerHTML = response.feels_like
			humidityd.innerHTML = response.humidity
			min_tempd.innerHTML = response.min_temp
			max_tempd.innerHTML = response.max_temp
			wind_speedd.innerHTML = response.wind_speed
			wind_degreesd.innerHTML = response.wind_degrees
			sunrised.innerHTML = response.sunrise
			sunsetd.innerHTML = response.sunset


		})

		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctm.innerHTML = response.cloud_pct
			tempm.innerHTML = response.temp
			feels_likem.innerHTML = response.feels_like
			humiditym.innerHTML = response.humidity
			min_tempm.innerHTML = response.min_temp
			max_tempm.innerHTML = response.max_temp
			wind_speedm.innerHTML = response.wind_speed
			wind_degreesm.innerHTML = response.wind_degrees
			sunrisem.innerHTML = response.sunrise
			sunsetm.innerHTML = response.sunset


		})

		
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctb.innerHTML = response.cloud_pct
			tempb.innerHTML = response.temp
			feels_likeb.innerHTML = response.feels_like
			humidityb.innerHTML = response.humidity
			min_tempb.innerHTML = response.min_temp
			max_tempb.innerHTML = response.max_temp
			wind_speedb.innerHTML = response.wind_speed
			wind_degreesb.innerHTML = response.wind_degrees
			sunriseb.innerHTML = response.sunrise
			sunsetb.innerHTML = response.sunset


		})
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Chennai', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctc.innerHTML = response.cloud_pct
			tempc.innerHTML = response.temp
			feels_likec.innerHTML = response.feels_like
			humidityc.innerHTML = response.humidity
			min_tempc.innerHTML = response.min_temp
			max_tempc.innerHTML = response.max_temp
			wind_speedc.innerHTML = response.wind_speed
			wind_degreesc.innerHTML = response.wind_degrees
			sunrisec.innerHTML = response.sunrise
			sunsetc.innerHTML = response.sunset


		})
		
		fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
		.then(response => response.json())
		.then((response) => {
			console.log(response)
			cloud_pctk.innerHTML = response.cloud_pct
			tempk.innerHTML = response.temp
			feels_likek.innerHTML = response.feels_like
			humidityk.innerHTML = response.humidity
			min_tempk.innerHTML = response.min_temp
			max_tempk.innerHTML = response.max_temp
			wind_speedk.innerHTML = response.wind_speed
			wind_degreesk.innerHTML = response.wind_degrees
			sunrisek.innerHTML = response.sunrise
			sunsetk.innerHTML = response.sunset


		})
		
		
