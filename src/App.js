import React from 'react'
import InputComponent from './components/InputComponent'
class App extends React.Component { 
  // class App extends Component 
  constructor() {
    super()

    this.state = {
      username: 'TypicalFaun89'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log(event)
    this.setState({
      username: event.target.value
    })
  }
  
  render (){
    console.log(this.props)
    return (
    <div>
      I'm the app component 
      {/* { 0 ? 'hey : 'yo'} */}
      <h1> My Username is: {this.state.username}</h1>
      <input type = "text" onChange = { this.handleChange}/>
      <InputComponent username = {this.state.username} randomProperty/>
    </div>
    )

  }
}

export default App;