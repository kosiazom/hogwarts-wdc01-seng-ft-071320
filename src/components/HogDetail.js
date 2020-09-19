import React, { Component } from 'react';

class HogDetail extends Component {
  
    render() { 
//   let { hog } = this.props.hog
        return ( <div >
           <h5>Specialty: {this.props.hog.specialty}</h5>
            <h5>Greased: {this.props.hog.greased  ? "Yes" : "No" }</h5>
            <h5>Weight: {this.props.hog.weight}</h5>
            <h5>Medals: {this.props.hog['highest medal achieved']}</h5>

        </div> );
    }
}
 
export default HogDetail;