import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {
  render() {
    let mappedBands = this.props.store.getState().bands.map( band => <Band key={band.id} band={band} store={this.props.store}/>)
    return(
      <ul>
        Bands Component
        {mappedBands}
      </ul>
    );
  }
};

export default Bands;
