import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import SocialChatItems from "../socialChatItems";
import SocialChatButton from "../socialChatButton";
import SocialContactForm from "../socialContactForm";
import SocialNewsletterForm from "../socialNewsletterForm";

import { mockItems } from "../../utils/data";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Chat = (props) => {
  const wrapperRef = useRef(null);

  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const [socialIconLists, setSocialIconLists] = useState([]);

  useOutsideAlerter(wrapperRef, setShowSocialIcons);

  const handleSocialIconsToggle = () => {
    showContactForm || showNewsletterForm
      ? setShowSocialIcons(false)
      : setShowSocialIcons(!showSocialIcons);
    setShowContactForm(false);
    setShowNewsletterForm(false);
  };

  const handleItemClick = (item) => {
    if (item.id === "contact") {
      setShowSocialIcons(false);
      setShowContactForm(true);
    } else if (item.id === "newsletter") {
      setShowSocialIcons(false);
      setShowNewsletterForm(true);
    } else {
      window.open(item.url, "_blank", "noopener,noreferrer");
    }
  };

  useEffect(() => {
    setSocialIconLists(mockItems);
  }, []);

  return (
    <ChatComponent ref={wrapperRef}>
      {showSocialIcons ? (
        <SocialChatItems
          socialIconLists={socialIconLists}
          handleItemClick={handleItemClick}
        />
      ) : null}

      {showContactForm ? <SocialContactForm /> : null}
      {showNewsletterForm ? <SocialNewsletterForm /> : null}

      <SocialChatButton
        handleSocialIconsToggle={handleSocialIconsToggle}
        showXButton={showSocialIcons || showContactForm || showNewsletterForm}
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
