import React, { Fragment } from "react";

class Filter extends React.Component {
  render() {
    return (
      <div>
          <h1>Filter</h1>
       <select value="filter" onChange={(e) => this.props.filterHogs(e.target.value)}>
           <option disabled selected >Select Filter Option</option>
           <option value="greased">Filter By Greased</option>
           <option value="name">Sort By Name</option>
           <option value="weight">Sort by Weight</option>
       </select>
      </div>
    );
  }
}

export default Filter;
