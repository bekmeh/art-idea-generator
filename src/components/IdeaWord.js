import React, { Component } from 'react';

class IdeaWord extends Component {

  render() {
    const { word, selected } = this.props;

    return (
      <span className={`inline-block
                        py-1 px-2 m-1 rounded
                        cursor-pointer
                        select-none
                        text-m font-medium tracking-widest
                        ${selected
                          ? "bg-indigo-200 text-indigo-800 hover:bg-indigo-300 hover:black"
                          : "bg-indigo-50 text-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"}`}
              onClick={() => this.props.onClick(word)}>
        { word }
      </span> 
    );
  }
}

export default IdeaWord;
