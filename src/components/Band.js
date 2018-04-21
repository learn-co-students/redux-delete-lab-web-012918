import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }
  render() {
    debugger
    return(
      <div >
        <li>{this.props.band.text}</li>
        <button onClick={this.handleOnClick}>Delete Me</button>
      </div>
    );
  }
};

export default Band;
