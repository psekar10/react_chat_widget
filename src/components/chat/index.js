import React, { useState } from "react";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { SvgMapping } from "../../utils/constants";
import { mockItems } from "../../utils/data";

const SmartChat = (props) => {
  const [toggleVal, setToggleVal] = useState(false);

  const [items, setItems] = useState(mockItems);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };

  const handleToggle = () => setToggleVal(!toggleVal);

  return (
    <>
      {/* <Widget handleNewUserMessage={handleNewUserMessage} /> */}

      <ChatComponent>
        {toggleVal &&
          items &&
          items.map((item) => {
            const IconsComponent = SvgMapping[item.id];
            return (
              <ItemsList key={item.id} target="_blank" href={item.url}>
                <IconsComponent width="24px" height="24px" />
                <p>{item.name}</p>
              </ItemsList>
            );
          })}

        <ChatButton onClick={handleToggle}>
          {toggleVal && <CloseIcon>x</CloseIcon>}
        </ChatButton>
      </ChatComponent>
    </>
  );
};

export default SmartChat;

const ChatComponent = styled.div`
  bottom: 0;
  right: 0;
  position: fixed;
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
`;

const ChatButton = styled.button`
  background: #35cce6;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 10px 1px #b5b5b5;
  height: 60px;
  margin-top: 10px;
  cursor: pointer;
  width: 60px;
  align-self: flex-end;
  animation-duration: 0.5s;
  animation-name: slide-in;
  animation-fill-mode: forwards;
  transition: transform 0.2s;
  background-image: url("https://boei-production.s3.eu-west-1.amazonaws.com/images/1613079033-89762726-0052-478f-86f3-a408d6174233.gif");
  &:hover {
    transform: scale(1.1);
  }
`;

const CloseIcon = styled.span`
  position: fixed;
  right: 9px;
  width: 16px;
  height: 16px;
  bottom: 52px;
  border: 2px solid rgb(255, 255, 255);
  border-radius: 50%;
  background: black;
  color: white;
  animation-duration: 0.5s;
  animation-name: rotation-lr;
  animation-fill-mode: forwards;
`;

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
`;

const ItemsList = styled.a`
  border-color: rgb(255, 255, 255) rgb(48, 213, 200) rgb(255, 255, 255)
    rgb(255, 255, 255);
  border-style: solid;
  padding: 10px 20px;
  border-radius: 5px 0px 0px 5px;
  border-width: 2px;
  display: flex;
  align-items: center;
  text-align: right;
  font-size: 16px;
  text-decoration: none;
  color: black;
  box-shadow: rgb(0 0 0 / 13%) 0px 5px 8px 0px;
  cursor: pointer;
  margin: 8px;
  align-self: flex-end;
  &:hover {
    background-color: #f0eff1;
    animation: ${shake} 2s 1;
    transform: scale(1.1);
  }
  p {
    margin: 0 0 0 8px;
  }
`;
