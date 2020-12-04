import React, { Component } from "react";

class SubmittedList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log ('props', this.props)


    return (
      <div>
        <div>
          <p>Name</p>
          <br />
          {this.props.name}
          <br />
          <p>Marks</p>
          <br />
          {this.props.mark}
        </div>
      </div>
    );
  }
}

export default SubmittedList;
