
import React, { Component } from 'react';

class ChosenWord extends Component {

  render() {
    const { word } = this.props;

    return (
      <span className="inline-block
                       cursor-move
                       select-none
                       py-1 px-2 m-2 rounded
                       bg-indigo-50 text-indigo-500 hover:bg-indigo-300 hover:text-indigo-800
                       text-2xl font-medium tracking-widest">
        { word }
      </span> 
    );
  }
}

export default ChosenWord;
