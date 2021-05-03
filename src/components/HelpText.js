import React, { Component } from 'react';
import IdeaWord from './IdeaWord';

class HelpText extends Component {

  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  handleArrowClick = () => {
    const isOpen = this.state.isOpen;
    this.setState({ isOpen: !isOpen });
  }
  
  render() {
    const arrow = this.state.isOpen 
      ? (<svg arias-hidden="true" data-reactid="281" fill="none" height="24" stroke="rgb(79, 70, 229)" strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
         <polyline points="18 15 12 9 6 15"></polyline>
        </svg>)
      : (<svg arias-hidden="true" data-reactid="266" fill="none" height="24" stroke="rgb(79, 70, 229)" strokeLinecap="round" 
              strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>);

    return (
      <div className="text-center mb-5 border border-indigo-50 w-1/2 mx-auto">
          <div className="grid grid-cols-6 p-2">
            <div className="col-span-1 text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="rgb(143, 161, 234)">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="col-span-4 text-center">
              <p className="">Help</p>
            </div>
            <div className="col-span-1s">
              <div className="rounded-full w-7 h-7 m-2 my-auto float-right flex items-center justify-center bg-indigo-50 cursor-pointer"
                  onClick={this.handleArrowClick}>
                { arrow }
              </div>
            </div>
          </div>
          { this.state.isOpen
            ? <div className="text-base text-left leading-relaxed p-2 mb-4 xl:w-2/4 lg:w-3/4 mx-auto">
                <p className="p-1"><b>Choose the number of words</b> you'd like above, and press the button to randomly choose.</p>
                <p className="p-1">You can also: <ul className="list-disc relative inset-x-4 "><li>manually choose words</li><li>rearrange words</li><li>drag words into the bin</li></ul></p>
              </div>
            : null
          }
      </div>
    );

      {/* <div className="p-2 lg:w-1/4 sm:w-1/2 w-full">
        <div className={`border border-indigo-50 rounded-xl p-2 mb-2 flex flex-auto flex-row justify-between rounded-md ${hasWords ? "bg-indigo-50 text-indigo-600 " : ""}`}>
          <h2 className="font-medium title-font select-none tracking-widest m-2 text-sm text-center sm:text-left uppercase">
            { category } 
          </h2>
          <div className="rounded-full w-7 h-7 m-2 my-auto float-right flex items-center justify-center bg-indigo-50 cursor-pointer"
               onClick={this.handleArrowClick}>
            { arrow }
          </div>
        </div>
        { this.state.isOpen
            ? <div className="flex flex-auto flex-wrap sm:items-start sm:text-left text-center items-center -mb-1">
                {
                  words.map((word) => {
                    return <IdeaWord key={`word-${word}`} word={word} onClick={this.props.onClickWord} selected={this.props.selectedWords.includes(word)}/>
                  })
                }
              </div>
            : null
        }
      </div> */}
    // );
  }
}

export default HelpText;
