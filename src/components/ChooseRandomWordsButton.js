
import React, { Component } from 'react';

class ChooseRandomWordsButton extends Component {

  render() {
    const { numWords } = this.props;

    return (
      <button className="flex mx-auto mt-10 mr-2
                         text-white bg-indigo-500
                         border-0 py-2 px-8
                         focus:outline-none hover:bg-indigo-600
                         rounded text-m
                         inline-flex items-center justify-center" onClick={this.props.onClick}>
        Choose { numWords } random word{ numWords > 1 ? "s" : "" }
      </button>
    );
  }
}

export default ChooseRandomWordsButton;
