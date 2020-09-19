import React, { Fragment } from "react";
import HogTile from './HogTile';

class HogContainer extends React.Component {

   
  render() {
    //   console.log(this.props)
    return (
      <div  >
            
            {this.props.hogsArray.map(hog => <HogTile hog={hog} displayDetails={this.props.displayDetails}/>)}
      </div>
    );
  }
}

export default HogContainer;
