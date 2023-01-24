import React, { Component } from "react";
import Car from "./Cars";


class Mycars extends Component {
    render () {
          return <div>
              <h1>{this.props.title}</h1>
            <Car color = "red ">Ford</Car>
            <Car color = 'green'>Mercedes</Car>
            <Car color = 'bleu'>Peugeot</Car>    
          </div>
    

    }         
}

export default Mycars;