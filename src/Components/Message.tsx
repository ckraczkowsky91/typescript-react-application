import React from 'react';
import messageHOC from './HigherOrderComponent';
// Create a stateless functional component
// Pass it props and tell TypeScript that props can be any data type
// Tell TypeScript to expect this component to return something of any data type
const example = (props: any): any => {
  return(
    <p>
      {props.name}. {props.message}
    </p>
  );
};

// Create a variable to hold a reference to the stateless functional component defiend above
//  and pass it to the higer-order component defined in messageHOC
const Message = messageHOC(example);

export default Message;
