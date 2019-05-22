import React from "react"
class Weather extends React.Component {
render() {
  return ( < div > {
      this.props.city &&
        < div >
        < p > Местоположение: {
          this.props.city
        } {
          this.props.country
        } < /p>  < p > Температура: {
      this.props.temp
    } < /p>  < p > Скорость ветра: {
    this.props.wind
  } < /p> < p > Заход Солнца: {
  this.props.sunset
} < /p>   < /div >
} < p > {
this.props.error
} < /p> < /div > )
}
}
export default Weather
