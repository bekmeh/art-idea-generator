import React, { Component } from 'react';
import IdeaWord from './IdeaWord';

class Category extends Component {
  
  render() {
    const { category } = this.props;

    return (
      <div className="p-8 lg:w-1/4 sm:w-1/2 w-full">
        <h2 className="font-medium title-font tracking-widest text-gray-900 m-2 text-sm text-center sm:text-left">
          { category }
        </h2>
        <div className="flex flex-col sm:items-start sm:text-left text-center items-center -mb-1">
          <IdeaWord word="Blah"/>
          <IdeaWord word="Bloop"/>
          <IdeaWord word="Blah"/>
          <IdeaWord word="Bloop"/>
          <IdeaWord word="Blah"/>
        </div>
      </div>
    );
  }
}

export default Category;
