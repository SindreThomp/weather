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

      var urlArray = new Array(
        "http://api.openweathermap.org/data/2.5/weather?q= " + city + "&APPID=2509c1ec40c32caf78e39a525a287619",
        "http://api.openweathermap.org/data/2.5/weather?q=Olso&APPID=2509c1ec40c32caf78e39a525a287619");

      var i;
      for (i = 0; i < 1; i++) {
        let url = urlArray[i];
        axios
          .get(url)
          .then(response => {
            this.currentTemp = Math.round(response.data.main.temp - 273.15);
            //tempVar = Math.round(response.data.main.temp - 273.15);
            this.currentWindSpd = response.data.wind.speed;
          })
          .catch(error => {
            console.log(error);
          });
      }
      //this.currentTemp = tempVar;
    },

  },
  beforeMount() {
    //this.customWeather("Oslo");
  },

})
