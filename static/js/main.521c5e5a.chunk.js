(this["webpackJsonpart-idea-generator"]=this["webpackJsonpart-idea-generator"]||[]).push([[0],{16:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),o=n(7),s=n.n(o),i=(n(16),n(2)),a=n(3),d=n(5),l=n(4),u=n(8),b=n(6),j=n(1),x=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.index;return Object(j.jsx)(u.b,{draggableId:t,index:n,children:function(e,n){return Object(j.jsx)("div",Object(b.a)(Object(b.a)(Object(b.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(j.jsx)("span",{id:t,className:"inline-block\n                              cursor-move\n                              select-none\n                              py-1 px-2 mx-2 rounded\n                              text-2xl font-medium tracking-widest transition-none\n                              ".concat(n.isDragging?"bg-indigo-300 text-indigo-800":"bg-indigo-50 text-indigo-500"),children:t})}))}})}}]),n}(r.Component),p=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.selectedWords;return Object(j.jsx)(u.c,{droppableId:"chosen-words-droppable",direction:"horizontal",children:function(t){return Object(j.jsxs)("div",Object(b.a)(Object(b.a)({ref:t.innerRef},t.droppableProps),{},{className:"flex flex-row justify-center sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 h-10",children:[0===e.length?Object(j.jsx)("p",{className:"text-base leading-relaxed text-gray-400 pt-4",children:"Please choose some words"}):null,e.map((function(e,t){return Object(j.jsx)(x,{index:t,word:e},"chosen=".concat(e))})),t.placeholder]}))}})}}]),n}(r.Component),f=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.diff,t="";return"1"===e?t="+":"-1"===e&&(t="-"),Object(j.jsx)("button",{className:"flex mx-auto mt-16 mr-2  text-white bg-indigo-200 border-0 py-2 px-4 focus:outline-none hover:bg-indigo-400 rounded text-xs inline-flex items-center justify-center",children:t})}}]),n}(r.Component),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this.props.numWords;return Object(j.jsxs)("button",{className:"flex mx-auto mt-16 mr-2 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-m inline-flex items-center justify-center",children:["Choose ",e," Random Words"]})}}]),n}(r.Component),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.word,r=t.selected;return Object(j.jsx)("span",{className:"inline-block \n                       py-1 px-2 m-2 rounded\n                       cursor-pointer\n                       select-none\n                       ".concat(r?"bg-indigo-200 text-indigo-800 hover:bg-indigo-300 hover:black":"bg-indigo-50 text-indigo-500 hover:bg-indigo-200 hover:text-indigo-800"," \n                       text-m font-medium tracking-widest}"),onClick:function(){return e.props.onClick(n)},children:n})}}]),n}(r.Component),g=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.category,r=t.words;return Object(j.jsxs)("div",{className:"p-8 lg:w-1/4 sm:w-1/2 w-full",children:[Object(j.jsx)("h2",{className:"font-medium title-font tracking-widest text-gray-900 m-2 text-sm text-center sm:text-left uppercase",children:n}),Object(j.jsx)("div",{className:"flex flex-col sm:items-start sm:text-left text-center items-center -mb-1",children:r.map((function(t){return Object(j.jsx)(h,{word:t,onClick:e.props.onClickWord,selected:e.props.selectedWords.includes(t)},"word-".concat(t))}))})]})}}]),n}(r.Component),O={space:["jupiter","moon"],animals:["red panda","tiger"]},v=(n(22),function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).onClickWord=function(e){if(r.state.selectedWords.includes(e)){var t=r.state.selectedWords.filter((function(t){return t!==e}));r.setState({selectedWords:t})}else{var n=Array.from(r.state.selectedWords);n.push(e),r.setState({selectedWords:n})}},r.onDragEnd=function(e){var t=e.destination,n=e.source,c=e.draggableId;if(t&&t.index!==n.index){var o=Array.from(r.state.selectedWords);o.splice(n.index,1),o.splice(t.index,0,c),r.setState({selectedWords:o})}},r.state={selectedWords:[],draggedWord:null},r}return Object(a.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"h-full bg-indigo-100 p-8",children:Object(j.jsx)("h1",{className:"text-indigo-900 title-font text-2xl",children:"Art Idea Generator"})}),Object(j.jsx)("section",{className:"text-gray-600 body-font",children:Object(j.jsxs)("div",{className:"container px-40 py-24 mx-auto",children:[Object(j.jsxs)("div",{className:"text-center mb-10",children:[Object(j.jsx)(u.a,{onDragEnd:this.onDragEnd,children:Object(j.jsx)(p,{selectedWords:this.state.selectedWords})}),Object(j.jsx)(f,{diff:"-1"}),Object(j.jsx)(m,{numWords:"3"}),Object(j.jsx)(f,{diff:"1"})]}),Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("p",{className:"text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto",children:"Choose the number of words you'd like above, and press the button to randomly choose. You can also manually choose any number of words and rearrange them."})}),Object(j.jsx)("div",{className:"container flex flex-wrap m-4 mx-auto text-center items-center justify-center",children:Object.keys(O).map((function(t){return Object(j.jsx)(g,{category:t,words:O[t],onClickWord:e.onClickWord,selectedWords:e.state.selectedWords},"category-".concat(t))}))})]})})]})}}]),n}(r.Component)),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),o(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),y()}},[[23,1,2]]]);
//# sourceMappingURL=main.521c5e5a.chunk.js.map