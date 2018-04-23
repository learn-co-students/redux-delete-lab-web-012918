import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  getBands = () => {
    return this.props.store.getState().bands.map(band => <Band store={this.props.store} band={band} key={band.text} id={band.id}/>)
  }

  render() {
    return(
      <ul>
        {this.getBands()}
      </ul>
    );
  }
};

export default Bands;
