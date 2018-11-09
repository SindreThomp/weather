//Melding
let weather1 = new Vue({
  el: '#app1',
  data: {
    dt: '',
    city: '',
    currentTemp: '',
    overcast: ''
  },

  methods: {
    getWeather1(){
      let url = "http://api.openweathermap.org/data/2.5/forecast?q=Stavanger&units=metric&APPID=7f38768c3f7c7ba4e80818a481995113";
      axios
      .get(url)
      .then(response => {

        this.city = response.data.city.name;

        this.dt = response.data.list.map(list =>{
            return list.dt_txt;
            
        });

        this.currentTemp = response.data.list.map(list => {
            {
          return list.main.temp;
        }
        });

        this.wind = response.data.list.map(list => {
          return list.wind.speed;
        });

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
