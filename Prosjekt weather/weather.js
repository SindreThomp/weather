let weatherApp = new Vue({
  el: "#app",
  data: {
    currentTemp: 0,
    averageTemp: 0,
    currentWindSpd: 0,
    averageWindSpd: 0,
    city: ''
  },

  methods: {
    getWeather(city) {
      this.city = city;
      this.currentTemp = 0;
      this.currentWindSpd = 0;
      this.getWeather1(city);
      this.getWeather2(city);
      this.getWeather3(city);
      setTimeout(() => this.getAverage(), 1000);
    },

    getWeather1(city) {
        let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=2509c1ec40c32caf78e39a525a287619";
        axios
          .get(url)
          .then(response => {
            this.currentTemp = this.currentTemp + response.data.main.temp;
            this.currentWindSpd = this.currentWindSpd + response.data.wind.speed;
          })
          .catch(error => {
            console.log(error);
          });
    },

    getWeather2(city) {
      let url = "https://api.weatherbit.io/v2.0/current?city=" + city + "&key=3ac7161f99364282867da9e035189d75";
      axios
        .get(url)
        .then(response => {
          this.currentTemp = this.currentTemp + response.data.data[0].temp;
          this.currentWindSpd = this.currentWindSpd + response.data.data[0].wind_spd;
        })
        .catch(error => {
          console.log(error);
        });
    },

    getWeather3(city) {
      let url = "https://api.apixu.com/v1/current.json?key=c42cf85cc5c14e369e9111602182111&q=" + city + "";
      axios
        .get(url)
        .then(response => {
          this.currentTemp = this.currentTemp + response.data.current.temp_c;
          this.currentWindSpd = this.currentWindSpd + (response.data.current.wind_kph / 3.6);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getAverage() {
      this.currentTemp = (this.currentTemp / 3).toFixed(2);
      this.averageTemp = this.currentTemp;
      this.currentWindSpd = (this.currentWindSpd / 2).toFixed(2);
      this.averageWindSpd = this.currentWindSpd;
    },
  },
  beforeMount() {
    //this.customWeather("Oslo");
  },

})
