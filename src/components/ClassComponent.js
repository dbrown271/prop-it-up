import React, { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    render() {
        
        let birthdayClick = () => {
            console.log("You Clicked")
            // alert("You're Getting Some Where!")
            // console.log("Changing The Age", age)
            this.setState({age: this.state.age +1})
            // console.log("New Age", age)
        }
        return(
            <div>
                <h1>Name: {this.props.lastName}, {this.props.firstName} </h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {this.props.hairColor} </p>
                <button onClick = {birthdayClick}>Birthday Button For {this.props.firstName} {this.props.lastName} </button>
                <hr />
            </div>
        )
    }
}


export default ClassComponent;