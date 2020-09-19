import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogsArray from "../porkers_data";
import HogContainer from "./HogContainer";
import Filter from "./Filter"

class App extends Component {
    
    constructor(){
        super()
        this.state = {
            // hogsArray give each hog a click key
            hogsArray: hogsArray.map(hog => { return {...hog, clicked: false} })
        }
    }
   

    displayDetails =(clickedHog) => {
       let newHogsArray = this.state.hogsArray.map(hog => {
        if(hog === clickedHog) {
            hog.clicked = !hog.clicked //toggle it
        }
        return hog
    })
        this.setState({
            hogsArray: newHogsArray
       })
       //debugger
    }

    filterHogs =(type) => {
      
        switch(type) {
            case "greased":
                this.setState({
                    hogsArray: this.state.hogsArray.filter(hog => hog.greased) 
                })
                break;
            case "name":
                this.setState({
                    hogsArray: this.state.hogsArray.sort((a,b) => a.name.localeCompare(b.name))
                })
                break;
            case "weight":
                this.setState({
                    hogsArray: this.state.hogsArray.sort((a, b) => a.weight - b.weight)
                })
                break;
                
        }
    
    }


  render() {
    return (
      <div className="App">
        <Nav />
        <Filter filterHogs={this.filterHogs}/>
        <br />
        <br />
        <HogContainer hogsArray={this.state.hogsArray} displayDetails={this.displayDetails} />
        
      </div>
    );
  }
}

export default App;

//my states will be here since my filter and HogContainer are here