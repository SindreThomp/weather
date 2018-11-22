let weatherApp = new Vue({
  el: '#app',
  data: {
    city: '',
    sky: '',
    currentTemp: '',
    feelsLikeTemp: '',
    wind: '',
    winddir: '',
    rainfall: ''
  },

  methods: {
    getWeather(city) {
      this.city = city;

      let url = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=3ac7161f99364282867da9e035189d75"

      axios
        .get(url)
        .then(response => {
          this.sky = response.data.data[0].weather.description;
          this.currentTemp = ((response.data.current.temp_c + response.data.data[0].temp) / 2).toFixed(1);
          this.feelsLikeTemp = ((response.data.current.feelslike_c + response.data.data[0].app_temp) / 2).toFixed(1);
          this.wind = (((response.data.current.wind_mph * 0.44704) + response.data.data[0].wind_spd) / 2).toFixed(1);
          this.winddir = response.data.data[0].wind_cdir;
          this.rainfall = ((response.data.current.precip_mm + response.data.data[0].precip) / 2).toFixed(1);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getWeather();
  },
})


"https://api.apixu.com/v1/current.json?key=c42cf85cc5c14e369e9111602182111&q=" + city + ""