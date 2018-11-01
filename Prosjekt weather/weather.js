//Melding
let weather1 = new Vue({
  el: '#app1',
  data: {
    city: '',
    overcast: '',
    currentTemp: '',
    wind: '',
    time: ''
  },

  methods: {
    getWeather1(){
      let url = "http://api.openweathermap.org/data/2.5/weather?q=Stavanger&units=metric&APPID=7f38768c3f7c7ba4e80818a481995113";
      axios
      .get(url)
      .then(response => {
        this.city = response.data.name;
        this.overcast = response.data.weather[0].description;
        this.currentTemp  = response.data.main.temp;
        this.wind = response.data.wind.speed;

      })
      .catch(error => {
        console.log(error);
      });
    },
  },
  beforeMount(){
    this.getWeather1();
  },
})
