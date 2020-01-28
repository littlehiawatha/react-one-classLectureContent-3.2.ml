import React from 'react'

// function InputComponent(props) {
//     console.log(props)
//     return (
//     <div>
//         I'm the input component, this is my username: {props.username} 
//         <input type= "text" onChange={props.handleChange} />
//     </div>
//         )
// }

class InputComponent extends React.Component {
    // props will be set to the component if it is a class so we can access that object using the this keyword
    // this.props

    render(){
        return (
           <div>
            <h1>My username is: {this.props.username}</h1>
            {/* use the handleChange method coming from props on an onChange event */}
            <input type="text" onChange={this.props.handleChange}/>
        </div> 
        )
    }
}



export default InputComponent