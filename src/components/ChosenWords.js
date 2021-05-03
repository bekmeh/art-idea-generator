import React, { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import ChosenWord from './ChosenWord';

class ChosenWords extends Component {
  
  render() {
    const { selectedWords } = this.props;

    return (
      <Droppable droppableId="chosen-words-droppable" direction="horizontal">
        { (provided) => (
          <div ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex flex-auto flex-row justify-center sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 h-10"
          >
            {
              selectedWords.length === 0
                ? <div>
                    <p className="text-base title-font leading-relaxed text-gray-400 pt-4">Please choose some words</p>
                    <svg className="absolute left-1/2 bottom-1/2 m-3" style={{"zIndex": -1}} width="108.99999999999999" height="213.99999999999997" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="m370.5,139.5c0,1 1.7695,0.39099 4,4c1.66251,2.68999 2.33197,6.22935 4,10c1.45865,3.29733 2.41479,7.90759 4,16c1.35928,6.93919 0.92987,14.00908 2,22c0.93857,7.0085 1,15 1,23c0,9 0.48434,17.06711 -1,26c-1.51126,9.09483 -3.36584,18.89746 -6,29c-2.32614,8.92126 -5.28473,20.92484 -7,28c-1.20139,4.95547 -2.54861,10.76993 -4,15c-1.65482,4.82303 -1.84723,8.04132 -3,12c-0.88412,3.03616 -2,5 -3,6l0,0l0,1l0,0" id="svg_12" stroke="rgb(156, 163, 175)" fill="none"/>
                        <line strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_17" y2="331.5" x2="360.5" y1="312.5" x1="355.5" stroke="rgb(156, 163, 175)" fill="none"/>
                        <path stroke="rgb(156, 163, 175)" d="m35.2777,73.59052c0,0 0.65217,-0.11527 1.92764,0c2.62943,0.23763 4.49782,0.9434 6.42546,1.8868c1.92764,0.9434 3.99128,1.75195 5.78291,2.8302c1.40547,0.84585 3.34874,2.22365 5.14036,3.3019c3.51367,2.11462 5.47403,4.03689 7.068,5.66039c1.68019,1.71132 2.57018,3.3019 3.85527,4.71699c1.28509,1.4151 2.00209,2.34144 2.57018,3.77359c0.74071,1.86731 1.38817,3.28457 1.92764,5.18869c0.79588,2.80912 0.64255,4.24529 0.64255,6.13209c0,1.8868 0,3.3019 0,5.66039c0,1.8868 -1.00848,3.83633 -1.92764,5.66039c-0.99697,1.97847 -2.69489,3.72103 -4.49782,6.13209c-1.38278,1.8492 -2.5961,3.60724 -4.49782,5.18869c-1.53322,1.275 -3.21273,2.3585 -4.49782,3.3019c-1.28509,0.9434 -2.47555,1.96845 -3.21273,2.3585c-1.16557,0.61672 -2.57018,1.4151 -3.21273,1.8868c-0.64255,0.4717 -1.57989,0.32709 -1.92764,0.9434c-0.24589,0.43579 0,0.4717 -0.64255,0.4717l0,0l0,0" id="svg_23" fillOpacity="0" fill="none"/>
                        <line transform="rotate(-30.0686 47.7997 133.084)" stroke="rgb(156, 163, 175)" strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_24" y2="137.22358" x2="43.77022" y1="128.94355" x1="51.82925" fillOpacity="0" fill="none"/>
                        <line transform="rotate(26.4459 52.6481 139.129)" stroke="rgb(156, 163, 175)" strokeLinecap="undefined" strokeLinejoin="undefined" id="svg_25" y2="141.80646" x2="46.5129" y1="136.45245" x1="58.78332" fillOpacity="0" fill="none"/>
                      </g>
                    </svg>
                  </div>
              : null
          }
          {
            selectedWords.map((selectedWord, index) => {
              return <ChosenWord key={`chosen=${selectedWord}`} index={index} word={selectedWord}/>
            })
          }
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )}
}

export default ChosenWords;
