import React, { Component } from 'react';

const initialState = {
  name: 'Bobbayyyyy',
  message: 'she loves ya!'
};

// Define a new type called State for initialState
// Make it readonly
type State = Readonly<typeof initialState>;

const messageHOC = (WrappedComponent: any) => {
  class HigherOrderComponent extends Component<{}, State> {
    readonly state: State = initialState;

    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      );
    };
  };
  return HigherOrderComponent;
};

export default messageHOC;
