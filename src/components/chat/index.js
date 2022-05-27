import React from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const SmartChat = (props) =>{
  console.log('props', props);
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
    />
  )

}

export default SmartChat;