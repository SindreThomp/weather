//Melding
let weatherApp = new Vue({
  el: "#app",
  data: {
    currentTemp: '',
    currentWindSpd: '',
    city: ''
  },

  methods: {
    getWeather(city) {
      this.city = city;

      var i;
      for (i = 0; i < 1; i++) {
        let url = "http://api.openweathermap.org/data/2.5/weather?q= " + city + "&APPID=2509c1ec40c32caf78e39a525a287619";
        axios
          .get(url)
          .then(response => {
            this.currentTemp = Math.round(response.data.main.temp - 273.15);
            this.currentWindSpd = response.data.wind.speed;
          })
          .catch(error => {
            console.log(error);
          });
      }
    },

  },
  beforeMount() {
    //this.customWeather("Oslo");
  },

})
