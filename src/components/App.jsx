import * as React from "react";
import { Component } from 'react';
import Target from "./Target";

const aims = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
]

class App extends Component {
    render() {
        const a = aims.map(function (item, index){
            return (<Target></Target>)
        });

        return (
            <div>
               {a}
            </div>
        );
    }
}

export default App;