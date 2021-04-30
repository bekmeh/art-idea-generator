import React, { Component } from 'react';
import IdeaWord from './IdeaWord';

class Category extends Component {
  
  render() {
    const { category, words } = this.props;

    return (
      <div className="p-8 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 m-2 text-sm text-center sm:text-left uppercase">
          { category }
        </h2>
        <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
          {
            words.map((word) => {
              return <IdeaWord key={`word-${word}`} word={word} onClick={this.props.onClickWord} selected={this.props.selectedWords.includes(word)}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default Category;
