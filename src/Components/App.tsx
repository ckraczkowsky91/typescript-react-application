import React, { Component } from 'react';
import Message from './Message';

const initialState = {
  name: 'Cher',
  message: 'she loves ya!'
};
// Define a new type for initialState
type State = Readonly<typeof initialState> 

// Create a Class component
// Use the angle brackets to pass a data type to the Component
export default class App extends Component<any>{
  // Use the componentWillMount lifecycle method to issue work
  //  prior to the component mounting
  UNSAFE_componentWillMount() {
    console.log('Almost mounted.');
  };
  // Use the componentDidMount lifecycle method to issue work that should be done
  //  after the component has mounted
  componentDidMount() {
    console.log('Mounted!');
  };

  render() {
    // data type: array
    let firstValue: string[] = ['Alice', 'Bobby', 'Cher']
    // data type: tuple
    let aTuple: [string, number] = ['Bobby', 34];
    // data type: enum
    enum letters {first = 'a', second = 'b'};
    // data type: any
    let firstName: any = 3;
    // data type: void
    const warning = (): void => {
      console.log('Warning');
    };

    return(
      <div>
        <p>The value of {firstValue} is of {typeof firstValue} type!</p>
        <Message name='Bobby' message="This is a simple message!"/>
      </div>
    );
  };
};
