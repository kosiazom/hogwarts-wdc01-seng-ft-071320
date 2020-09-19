import React, { Component } from 'react';
import HogDetail from './HogDetail'


class HogTile extends Component {
    // state = {  }
    
//   render() { 
// let { hog } = this.props

   
//       let pigImage = require(`../hog-imgs/${hog.name.toLowerCase().replace(/ /g, "_")}.jpg` )
//      return (  
//          <div className="ui four wide column" onClick={ () => this.props.showDetails(hog.name)} >
//             <h4>{hog.name}</h4>
//              <img src={pigImage}  />
//          </div>
//      );
//      }

render() {
    // console.log(this.props)
    let pigImage = this.props.hog.name.split(" ").join("_").toLowerCase() + ".jpg"
    // console.log(pigImage)
return(
<div onClick={ () => this.props.displayDetails(this.props.hog)}>
    <h3>{this.props.hog.name}</h3>
    <img src={require(`../hog-imgs/${pigImage}`)} />
    
    {this.props.hog.clicked ?
    <HogDetail hog={this.props.hog} hideHogs={this.props.hideHogs}/> : null}
   
    <button onClick={() => this.props.hideHogs(this.props.hog)}>Hide Me!</button>
</div>)
}
}
 
export default HogTile;