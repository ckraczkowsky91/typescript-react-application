import React from 'react';
// Create an interface to pass to the prop
interface UserMessage {
  name: string;
  message: string;
}
// Create a stateless functional component
// Pass the UserMessage interface to props
// Tell TypeScript to expect this component to return something of the any data type
const Message = (props: UserMessage): any => {
  return(
    <p>{props.name}, {props.message}</p>
  );
};

export default Message;
