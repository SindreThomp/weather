const app = new Vue({
	el:'#app',
	data:{
		loading:true,
		lat:null,
		lon:null,
		location:null,
		temp:null,
		temp_low:null,
		temp_high:null,
		images:{
			"rain":[
				"clouds.jpg"
			]
		}
	},
	created() {

		navigator.geolocation.getCurrentPosition(pos => {
			console.log('got coordinates', pos.coords);
			this.lat = pos.coords.latitude;
			this.lon = pos.coords.longitude;
			this.loadWeather();
		});

	},
	methods:{
		loadWeather() {
     axios.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22kristiansand%22)%20and%20u%3D%27c%27%20&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`)
    .then(res => {
				let weather = res.data.query.results.channel;
				console.log('response',weather);

				this.location = weather.location.city + ", " + weather.location.region;
        this.temp = weather.item.condition.temp;
				this.temp_low = weather.item.forecast[0].low;
				this.temp_high = weather.item.forecast[0].high;
				this.desc = weather.item.condition.text;
				this.loading = false;
			})
			.catch(e => {
				console.error(e);
			});

		}
	}

});
