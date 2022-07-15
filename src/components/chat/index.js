import React, { useState } from "react";
import { Widget } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const SmartChat = (props) => {
  const [toggleVal, setToggleVal] = useState(false);
  const mockItems = [
    {
      id: "whatsapp",
      name: "Whatsapp",
      url: "https://api.whatsapp.com/send/?phone=16476198799&text=Hi%20parth",
    },
    {
      id: "twitter",
      name: "Twitter DM",
      url: "https://twitter.com/messages/110971846-128889193",
    },
    {
      id: "contact",
      name: "Contact Form",
      url: "",
    },
  ];
  const [items, setItems] = useState(mockItems);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  };
  const handleToggle = () => {
    setToggleVal(!toggleVal);
  };

  const shake = keyframes`
    0% { transform: translate(1px, 1px) rotate(0deg); }
    10% { transform: translate(-1px, -2px) rotate(-1deg); }
    20% { transform: translate(-3px, 0px) rotate(1deg); }
`;

  const ItemsList = styled.a`
    border-color: rgb(255, 255, 255) rgb(113, 62, 236) rgb(255, 255, 255)
      rgb(255, 255, 255);
    border-style: solid;
    padding: 10px 20px;
    border-radius: 5px 0px 0px 5px;
    border-width: 2px;
    text-align: right;
    font-size: 16px;
    text-decoration: none;
    color: black;
    box-shadow: rgb(0 0 0 / 13%) 0px 5px 8px 0px;
    cursor: pointer;
    margin: 10px;
    align-self: flex-end;
    &:hover {
      background-color: #f0eff1;
      animation: ${shake} 2s 1;
      transform: scale(1.1);
    }
  `;

  return (
    <>
      {/* <Widget handleNewUserMessage={handleNewUserMessage} /> */}

      <div
        style={{
          bottom: "0",
          right: "0",
          position: "fixed",
          margin: "0 20px 20px 0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {toggleVal &&
          items &&
          items.map((item) => (
            <ItemsList key={item.id} target="_blank" href={item.url}>
              {item.name}
            </ItemsList>
          ))}

        <ChatButton onClick={handleToggle}>
          {toggleVal && (
            <span
              style={{
                position: "fixed",
                right: "9px",
                width: "16px",
                height: "16px",
                bottom: "52px",
                border: "2px solid rgb(255, 255, 255)",
                borderRadius: "50%",
                background: "black",
                color: "white",
                animationDuration: ".5s",
                animationName: "rotation-lr",
                animationFillMode: "forwards",
              }}
            >
              X
            </span>
          )}
        </ChatButton>
      </div>
    </>
  );
};

export default SmartChat;

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
