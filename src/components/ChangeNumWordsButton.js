
import React, { Component } from 'react';

class ChangeNumWordsButton extends Component {

  render() {
    const { diff } = this.props;

    var label = "";

    if (diff === 1) {
      label = "+";
    } else if (diff === -1) {
      label = "-";
    }

    return (
      <button className="flex mx-auto mt-16 mr-2 
                     text-white bg-indigo-200
                     border-0 py-2 px-4
                     focus:outline-none hover:bg-indigo-400
                     rounded text-xs
                     inline-flex items-center justify-center" onClick={() => this.props.changeNumWords(diff)}>
         { label }
      </button>
    );
  }
}

export default ChangeNumWordsButton;
