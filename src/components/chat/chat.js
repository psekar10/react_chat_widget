import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";

import SocialChatItems from "../socialChatItems";
import SocialChatButton from "../socialChatButton";
import SocialContactForm from "../socialContactForm";
import YoutubeEmbeded from "../youtubeEmbeded";
import SocialNewsletterForm from "../socialNewsletterForm";

import { mockItems } from "../../utils/data";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Chat = (props) => {
  const wrapperRef = useRef(null);

  const [showSocialIcons, setShowSocialIcons] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showYoutubeEmbedded, setShowYoutubeEmbedded] = useState({
    show: false,
    url: "",
  });
  const [showNewsletterForm, setShowNewsletterForm] = useState(false);
  const [socialIconLists, setSocialIconLists] = useState([]);

  useOutsideAlerter(wrapperRef, setShowSocialIcons);

  const handleSocialIconsToggle = () => {
    showContactForm || showNewsletterForm || showYoutubeEmbedded.show
      ? setShowSocialIcons(false)
      : setShowSocialIcons(!showSocialIcons);
    setShowContactForm(false);
    setShowNewsletterForm(false);
    setShowYoutubeEmbedded({ show: false, url: "" });
  };

  const handleItemClick = (item) => {
    if (item.id === "contact") {
      setShowSocialIcons(false);
      setShowContactForm(true);
    } else if (item.id === "newsletter") {
      setShowSocialIcons(false);
      setShowNewsletterForm(true);
    } else if (item.id === "youtubeVideo") {
      setShowSocialIcons(false);
      setShowYoutubeEmbedded({ show: true, url: item.url });
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
      {showYoutubeEmbedded.show ? (
        <YoutubeEmbeded embeddedLink={showYoutubeEmbedded.url} />
      ) : null}

      <SocialChatButton
        handleSocialIconsToggle={handleSocialIconsToggle}
        showXButton={
          showSocialIcons ||
          showContactForm ||
          showNewsletterForm ||
          showYoutubeEmbedded.show
        }
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
