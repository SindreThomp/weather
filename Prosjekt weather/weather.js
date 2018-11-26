let weatherApp = new Vue({
  el: '#app',
  data: {
    city: '',
    sky: '',
    currentTemp: '',
    feelsLikeTemp: '',
    wind: '',
    winddir: '',
    rainfall: '',

    weatherbitSky: '',
    weatherbitCTemp: '',
    weatherbitFTemp: '',
    weatherbitWind: '',
    weatherbitWinddir: '',
    weatherbitRainfall: '',

    apixuCTemp: '',
    apixuFTemp: '',
    apixuWind: '',
    apixuRainfall: ''
  },

  methods: {

    getAverage(city) {
      this.city = city;
      this.sky = weatherbitSky;
      this.currentTemp = ((weatherbitCTemp + apixuCTemp) / 2).toFixed(1);
      this.feelsLikeTemp = ((weatherbitFTemp + apixuFTemp) / 2).toFixed(1);
      this.wind = ((weatherbitWind + apixuWind) / 2).toFixed(1);
      this.winddir = weatherbitWinddir;
      this.rainfall = ((weatherbitRainfall + apixuRainfall) / 2).toFixed(1);
    },

    getWeatherBit(city) {
      this.weatherbitSky = weatherbitSky;
      this.weatherbitCTemp = weatherbitCTemp;
      this.weatherbitFTemp = weatherbitFTemp;
      this.weatherbitWind = weatherbitWind;
      this.weatherbitWinddir = weatherbitWinddir;
      this.weatherbitRainfall = weatherbitRainfall;

      let url = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=3ac7161f99364282867da9e035189d75"

      axios
        .get(url)
        .then(response => {
          this.weatherbitSky = response.data.data[0].weather.description;
          this.weatherbitCTemp = response.data.data[0].temp;
          this.weatherbitFTemp = response.data.data[0].app_temp;
          this.weatherbitWind = response.data.data[0].wind_spd;
          this.weatherbitWinddir = response.data.data[0].wind_cdir;
          this.weatherbitRainfall = response.data.data[0].precip;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getWeatherApixu(city) {
      this.apixuCTemp = apixuCTemp;
      this.apixuFTemp = apixuFTemp;
      this.apixuWind = apixuWind;
      this.apixuRainfall = apixuRainfall;

      let url = "https://api.apixu.com/v1/current.json?key=c42cf85cc5c14e369e9111602182111&q=" + city + ""
      axios
        .get(url)
        .then(response => {
          this.apixuCTemp = response.data.current.temp_c;
          this.apixuFTemp = response.data.current.feelslike_c;
          this.apixuWind = response.data.current.wind_mph * 0.44704;
          this.apixuRainfall = response.data.current.precip_mm;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  beforeMount() {
    this.getWeatherBit();
    this.getWeatherApixu();
    this.getAverage();
  },
})