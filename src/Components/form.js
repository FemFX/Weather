import React from "react"
class Form extends React.Component {
  render() {
    return ( < form onSubmit = {
        this.props.Wheather__Method
      } >
      < input type = "text"
      name = "city"
      placeholder = "Город" / >
      < button > Получить погоду < /button> < /form >
    )
  }
}
export default Form
