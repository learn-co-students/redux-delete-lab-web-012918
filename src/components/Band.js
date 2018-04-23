import React, { Component } from 'react';

class Band extends Component {

  deleteBand = () => {
    let action = {type: 'DELETE_BAND', id: this.props.id}
    this.props.store.dispatch(action)
  }


  render() {
    console.log(this.props);
    return(
      <div>
        <li>{this.props.band.text}</li>
        <button onClick={this.deleteBand}>Delete</button>
      </div>
    );
  }
};

export default Band;
