//Melding
let weatherApp = new Vue({
  el: "#app",
  data: {
    currentTemp: '',
    test: '',
    city: ''
  },

  methods: {
    methodTest() {
      this.test = "test3";
    },
    customWeather(city) {
      this.test = "test2";
      this.city = city;
      let url = "http://api.openweathermap.org/data/2.5/weather?q= " + city + "&APPID=2509c1ec40c32caf78e39a525a287619";
      axios
        .get(url)
        .then(response => {
          this.currentTemp = Math.round(response.data.main.temp - 273.15);
        })
        .catch(error => {
          console.log(error);
        });
    },

    getWeather() {
      this.test = "test";
      let city = "Oslo";
      this.city = city;
      let url = "http://api.openweathermap.org/data/2.5/weather?q= " + city + "&APPID=2509c1ec40c32caf78e39a525a287619";
      axios
        .get(url)
        .then(response => {
          this.currentTemp = Math.round(response.data.main.temp - 273.15);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    //this.customWeather("Oslo");
  },

})
