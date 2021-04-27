import React, { Component } from 'react';
import './App.css';
import ChosenWord from './components/ChosenWord';
import ChangeNumWordsButton from './components/ChangeNumWordsButton';
import ChooseRandomWordsButton from './components/ChooseRandomWordsButton';
import Category from './components/Category';
import {words} from './data/words.js';

class App extends Component {
  render() {
    console.log(words);

    return (
      <div className="App">
        <div className="h-full bg-indigo-100 p-8">
          <h1 className="text-indigo-900 title-font text-2xl">Art Idea Generator</h1>
        </div>
        <section className="text-gray-600 body-font">
          <div className="container px-40 py-24 mx-auto">
            <div className="text-center mb-10">
              <div className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
                <ChosenWord word="Draggable"/>
                <ChosenWord word="Words"/>
                <ChosenWord word="Here"/>
              </div>
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
            <div className="container flex flex-wrap m-4 mx-auto text-center items-center">
              <Category category="Space"/>
              <Category category="Magic"/>
              <Category category="Animals"/>
              <Category category="Places"/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
