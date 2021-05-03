import React, { Component } from 'react';

class Tooltip extends Component {

  constructor(props) {
    super(props);
    this.state = { active: false, timeout: 0 };
  }

  show = () => {
    const timeout = setTimeout(() => {
      this.setState({ active: true });
    }, this.props.delay || 400);

    this.setState({ timeout: timeout});
  }

  hide = () => {
    clearInterval(this.state.timeout);
    this.setState({ active: false });
  }

  render() {
    return (
      <div
        className="inline-block relative text-center"
        onMouseEnter={this.show}
        onMouseLeave={this.hide}
      >
        {this.props.children}
        
        {this.state.active && (
          <div className={`absolute rounded-md left-1/2 p-1 m-3 w-64 bg-indigo-200 zIndex-10 top-1/2 left-7 transform -translate-y-1/2
              ${this.props.direction === "top" ? "top-10" : 
                this.props.direction === "bottom" ? "bottom-10" :
                this.props.direction === "left" ? "top-1/2 right-10" :
                this.props.direction === "right" ? "ml-5 top-1/2 left-10" : "" }}`}>
            {this.props.content}
          </div>
        )}

      </div>
    );
  }
}

export default Tooltip;
