import * as React from "react";
import { Component } from 'react';

class Target extends Component {
    state = {
        counter : 0
    }
    render() {
        return (
            <div>
               <span onClick={this.onClickHandler}>I'm target {this.props.name}, kozel'! Clicked {this.state.counter} times</span>
            </div>
        );
    }

    onClickHandler = () => {
        this.setState ({ counter: this.state.counter + 1});
    }
}

export default Target;