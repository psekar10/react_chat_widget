import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import SocialChatItems from "../socialChatItems";
import SocialChatButton from "../socialChatButton";

import { mockItems } from "../../utils/data";

const Chat = (props) => {
  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [socialIconLists, setSocialIconLists] = useState([]);

  const handleSocialIconsToggle = () => setShowSocialIcons(!showSocialIcons);

  const handleItemClick = (item) => {
    if (item.id === "contact") {
      handleSocialIconsToggle();
    } else {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    setSocialIconLists(mockItems);
  }, []);

  return (
    <ChatComponent>
      {showSocialIcons ? (
        <SocialChatItems
          socialIconLists={socialIconLists}
          handleItemClick={handleItemClick}
        />
      ) : null}
      <SocialChatButton
        handleSocialIconsToggle={handleSocialIconsToggle}
        showSocialIcons={showSocialIcons}
      />
    </ChatComponent>
  );
};

export default Chat;

const ChatComponent = styled.div`
  bottom: 0;
  right: 0;
  position: fixed;
  margin: 0 20px 20px 0;
  display: flex;
  flex-direction: column;
`;
