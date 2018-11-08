
let weather = new Vue({
  el: '#app',
  data: {
    overcast: '',
    currentTemp: '',
    wind: ''
  },

  methods: {
    // getWeather() {
    //   let url = "http://dataservice.accuweather.com/currentconditions/v1/261324?apikey=UG1ELWb3snblHaeJStDwgRtuA7kiRrpv";
    //   axios
    //   .get(url)
    //   .then(response => {
    //     this.overcast = response.data.WeatherText;
    //     this.currentTemp  = response.data.Temperature.Value;
    //     this.wind = response.data.Wind.Speed.Metric.Value;
    fetch('http:dataservice.accuweather.com/currentconditions/v1/261324?apikey=UG1ELWb3snblHaeJStDwgRtuA7kiRrpv').then(response => {
      return response.json();
    }).then(data => {
      //json data here
      console.log(data);
      }).catch(error => {
        console.log(error);
      });
    },
  },
  beforeMount(){
    this.getWeather();
  },
})




let weather1 = new Vue({
  el: '#app1',
  data: {
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
        this.overcast = response.data.weather[0].description;
        this.currentTemp  = response.data.main.temp;
        this.wind = response.data.wind.speed;
        this.time = response.data.dt;

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
