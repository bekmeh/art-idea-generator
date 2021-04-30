import React, { Component } from 'react';
import ChosenWord from './ChosenWord';

class ChosenWords extends Component {
  
  render() {
    const { selectedWords } = this.props;

    return (
      <div className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 h-10">
        {
          selectedWords.length === 0 ? <p className="text-base leading-relaxed text-gray-400 pt-4">Please choose some words</p> : null
        }
        { 
          selectedWords.map((selectedWord) => {
            return <ChosenWord key={`chosen=${selectedWord}`} word={selectedWord}/>
          })
        }
      </div>
    );
  }
}

export default ChosenWords;
