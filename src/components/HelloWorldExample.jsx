import React, { Component } from "react";

//Example of component of class: With the Hide button the element H1 appears or disappears.

class HelloWorld extends Component {
    state = {
        active: true,
    }
    
    handleClick = () => {
        this.setState({
            active: !this.state.active,
        });
    }

    render() {
        return(
            <div className="HelloWorld">
                <button onClick={this.handleClick}>Hide</button>
                {
                    this.state.active &&
                    <h1>Hello World</h1>
                }
            </div>
        );
    }
}

export default HelloWorld;