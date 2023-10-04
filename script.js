const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
    cityName.innerHTML=city;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
		.then(response => response.json())
		.then(response => {
			console.log(response)

			cloud_pct.innerHTML = response.cloud_pct
			feels_like.innerHTML = response.feels_like
			humidity.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			min_temp.innerHTML = response.min_temp
			temp.innerHTML = response.temp
			wind_degrees.innerHTML = response.wind_degrees
			wind_speed.innerHTML = response.wind_speed

			const milliseconds1 = response.sunrise

			var seconds1 = Math.floor(milliseconds1 / 1000);
			var minutes1 = Math.floor(seconds1 / 60);
			var hours1 = Math.floor(minutes1 / 60);

			$seconds1 = seconds1 % 60;
			$minutes1 = minutes1 % 60;
			$hours1 = hours1 % 12;
			
			rise.innerHTML = $hours1+":"+$minutes1+":"+$seconds1;

			const milliseconds2 = response.sunset

			var seconds2 = Math.floor(milliseconds2 / 1000);
			var minutes2 = Math.floor(seconds2 / 60);
			var hours2 = Math.floor(minutes2 / 60);

			$seconds2 = seconds2 % 60;
			$minutes2 = minutes2 % 60;
			$hours2 = hours2 % 12;
			
			set.innerHTML = $hours2+":"+$minutes2+":"+$seconds2;
			
		})
		.catch(err => console.error(err))
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value);
})









