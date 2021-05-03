import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ChosenWords from './components/ChosenWords';
import RemoveWordArea from './components/RemoveWordArea';
import Tooltip from './components/Tooltip';
import ChangeNumWordsButton from './components/ChangeNumWordsButton';
import ChooseRandomWordsButton from './components/ChooseRandomWordsButton';
import Category from './components/Category';
import { wordsData } from './data/wordsData.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedWords: [], isDragging: false, numWords: 3, categoriesCollapsed: false, categoriesExpanded: false };
  }

  changeNumWords = (diff) => {
    var totalNumWords = 0;
    Object.keys(wordsData).forEach(category => totalNumWords = totalNumWords + wordsData[category].length);

    if ((this.state.numWords === 1 && diff < 0)
        || (this.state.numWords === totalNumWords && diff > 0)
        || (this.state.numWords === 10 && diff > 0)) {
      return;
    }

    const newNumWords = this.state.numWords + diff;
    this.setState({ numWords: newNumWords });
  }

  getRandomWord = () => {
    const categories = Object.keys(wordsData);
    const randomCategory = wordsData[categories[Math.floor(Math.random() * categories.length)]]
    return randomCategory[Math.floor(Math.random() * randomCategory.length)];
  }

  chooseRandomWords = () => {
    var chosenWords = [];

    while (chosenWords.length < this.state.numWords) {
      const randomWord = this.getRandomWord();
      if (!chosenWords.includes(randomWord)) {
        chosenWords.push(randomWord);
      }
    }

    this.setState({ selectedWords: chosenWords });
  }

  clearWords = () => {
    this.setState({ selectedWords: [] });
  }

  collapseCategories = () => {
    this.setState({ categoriesCollapsed: true }, () => { this.setState({ categoriesCollapsed: false })});
  }

  expandCategories = () => {
    this.setState({ categoriesExpanded: true }, () => { this.setState({ categoriesExpanded: false })});
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

  onDragStart = () => {
    this.setState({ isDragging: true });
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === 'delete-area') {
      // delete word
      const newSelectedWords = Array.from(this.state.selectedWords);
      newSelectedWords.splice(source.index, 1);
      this.setState({ selectedWords: newSelectedWords, isDragging: false });
      return;
    }

    if (destination.droppablId === source.droppablId && destination.index === source.index) {
      // no change
      this.setState({ isDragging: false });
      return;
    }

    const newSelectedWords = Array.from(this.state.selectedWords);
    // remove 1 at source index
    newSelectedWords.splice(source.index, 1);
    // add dragged word at destination index
    newSelectedWords.splice(destination.index, 0, draggableId);

    this.setState({ selectedWords: newSelectedWords, isDragging: false });
  }

  render() {
    return (
      <div className="App">
        <div className="h-full bg-indigo-100 p-8">
          <h1 className="text-indigo-900 title-font text-2xl">Art Idea Generator</h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-10 py-24 mx-auto">
            <div className="text-center mb-5">
              <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd} >
                <ChosenWords selectedWords={this.state.selectedWords} />
                <RemoveWordArea isDragging={this.state.isDragging}/>
              </DragDropContext>
              <div className="flex flex-row flex-auto space-around align-center justify-center">
                <div className="w-7">
                </div>
                <div>
                  <div className="flex flex-auto flex-row space-around">
                    <ChangeNumWordsButton diff={-1} changeNumWords={this.changeNumWords}/>
                    <ChooseRandomWordsButton numWords={this.state.numWords} onClick={this.chooseRandomWords}/>
                    <ChangeNumWordsButton diff={1} changeNumWords={this.changeNumWords}/>
                  </div>
                </div>
                <div>
                  <Tooltip direction="right" content="Choose the number of words you'd like, and press the button to randomly choose. You can also manually choose words, rearrange and delete them">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline h-7 w-7" viewBox="0 0 20 20" fill="rgb(143, 161, 234)">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </Tooltip>
                </div>
              </div>
              <div className="text-base leading-relaxed text-gray-400 pt-4" onClick={this.clearWords}>
                <button className="select-none focus:outline-none">Clear selected</button>
              </div>
            </div>
            <div className="text-base leading-relaxed text-gray-400">
              <button className="select-none focus:outline-none px-2" onClick={this.collapseCategories}>Collapse all</button>
              <button className="select-none focus:outline-none px-2" onClick={this.expandCategories}>Expand all</button>
            </div>
            <div className="container flex flex-wrap m-4 mx-auto text-center items-left justify-left">
              { 
                Object.keys(wordsData).map((category) => {
                  return <Category key={`category-${category}`} category={category} words={wordsData[category]}
                                   onClickWord={this.onClickWord} selectedWords={this.state.selectedWords}
                                   collapse={this.state.categoriesCollapsed} expand={this.state.categoriesExpanded} />
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
