import React, { Component } from 'react';

class ClassComponent extends Component {
    render() {
        return(
            <div>
                <h1>Name: {this.props.lastName}, {this.props.firstName} </h1>
                <p>Age: {this.props.age} </p>
                <p>Hair Color: {this.props.hairColor} </p>
                
            </div>
        )
    }
}


export default ClassComponent;