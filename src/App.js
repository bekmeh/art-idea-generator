import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ChosenWords from './components/ChosenWords';
import ChangeNumWordsButton from './components/ChangeNumWordsButton';
import ChooseRandomWordsButton from './components/ChooseRandomWordsButton';
import Category from './components/Category';
import {wordsData} from './data/wordsData.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedWords: [], draggedWord: null };
  }

  onClickWord = (word) => {
    if (this.state.selectedWords.includes(word)) {
      // remove word
      const newSelectedWords = this.state.selectedWords.filter((selectedWord) => selectedWord !== word);
      this.setState({ selectedWords: newSelectedWords });
    } else {
      // add word
      var newSelectedWords = Array.from(this.state.selectedWords);
      newSelectedWords.push(word);
      this.setState({ selectedWords: newSelectedWords });
    }
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      // no change
      return;
    }

    const newSelectedWords = Array.from(this.state.selectedWords);
    // remove 1 at source index
    newSelectedWords.splice(source.index, 1)
    // add dragged word at destination index
    newSelectedWords.splice(destination.index, 0, draggableId)

    this.setState({ selectedWords: newSelectedWords });
  }

  render() {
    return (
      <div className="App">
        <div className="h-full bg-indigo-100 p-8">
          <h1 className="text-indigo-900 title-font text-2xl">Art Idea Generator</h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-40 py-24 mx-auto">
            <div className="text-center mb-10">
              <DragDropContext onDragEnd={this.onDragEnd} >
                <ChosenWords selectedWords={this.state.selectedWords} />
              </DragDropContext>
              <ChangeNumWordsButton diff="-1"/>
              <ChooseRandomWordsButton numWords="3"/>
              <ChangeNumWordsButton diff="1"/>
            </div>
            <div className="text-center">
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                Choose the number of words you'd like above, and press the button to randomly choose.
                You can also manually choose any number of words and rearrange them.
              </p>
            </div>
            <div className="container flex flex-wrap m-4 mx-auto text-center items-center justify-center">
              { 
                Object.keys(wordsData).map((category) => {
                  return <Category key={`category-${category}`} category={category} words={wordsData[category]} onClickWord={this.onClickWord} selectedWords={this.state.selectedWords}/>
                }) 
              }
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
