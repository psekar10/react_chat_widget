import React from "react";
import styled from "@emotion/styled";

const SocialChatButton = ({ handleSocialIconsToggle, showSocialIcons }) => {
  return (
    <ChatButton onClick={handleSocialIconsToggle}>
      {showSocialIcons ? <CloseIcon>x</CloseIcon> : null}
    </ChatButton>
  );
};

export default SocialChatButton;

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
  position: absolute;
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
