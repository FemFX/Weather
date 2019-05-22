import React from "react";
import Info from "./Components/info"
import Form from "./Components/form"
import Weather from "./Components/wheather"

const API_KEY = "6564d7599e7357b19c78094e68b37752"

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    wind: undefined,
    sunset: undefined,
    error: undefined
  }

  getting = async(event) => {
    event.preventDefault()
    const city = event.target.elements.city.value

    if (city) {
      const API_URL = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const DATA = await API_URL.json()
      console.log(DATA);
      var sunset = DATA.sys.sunset
      var date = new Date()
      date.setTime(sunset)
      var sunset_date = date.getHours() + ':' + date.getMinutes() + ':' +
        date.getSeconds()
      this.setState({
        temp: DATA.main.temp,
        city: DATA.name,
        country: DATA.sys.country,
        wind: DATA.wind.speed,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        wind: undefined,
        sunset: undefined,
        error: "Введите название города",
      })
    }


  }
  render() {
    return ( < div >
      < Info / >
      < Form Wheather__Method = {
        this.getting
      }
      / >  < Weather temp = {
      this.state.temp
    }
    city = {
      this.state.city
    }
    country = {
      this.state.country
    }
    wind = {
      this.state.wind
    }
    sunset = {
      this.state.sunset
    }
    error = {
      this.state.error
    }
    / >  < /div >
  )
}
}
export default App;
