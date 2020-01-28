import React from 'react'
// import React, {Component} from 'react' 
import InputComponent from './components/InputComponent'

// let InputComponent = function InputComponent(props) {
//     console.log(props)
//     return (
//     <div>
//         I'm the input component, this is my username: {props.username} 
//         <input type= "text" onChange={props.handleChange} />
//     </div>
//         )
// }

class App extends React.Component {
    // class App extends Component {
      constructor()  {
          super()

          this.state = {
              username: 'l337gamer1993'
          }

          this.handleChange = this.handleChange.bind(this)
      }

      handleChange(event) {
          this.setState({
              username: event.target.value
          })
      }

  
    render() {
        console.log(this.props)
        return (
        <div>
            I'm the app component 
            {/* {0 ? 'hey' : 'yo'} */}
        <h1>My username is: {this.state.username}</h1>
        {/* <input type="text" onChange={this.handleChange}/> */}
            <InputComponent username={this.state.username} handleChange={this.handleChange}/>
            {/* <InputComponent /> */}
        </div>
        )
    }
}

export default App;
