import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

import { SvgMapping } from "../../utils/constants";

const SocialChatItems = ({ socialIconLists, handleItemClick }) => {
  if (socialIconLists.length === 0) {
    return <p>NO ITEMS !</p>;
  }
  return socialIconLists
    ? socialIconLists.map((item) => {
        const IconsComponent = SvgMapping[item.id];
        return (
          <ItemsList
            key={item.id}
            target="_blank"
            onClick={() => handleItemClick(item)}
          >
            <IconsComponent width="24px" height="24px" />
            <p>{item.name}</p>
          </ItemsList>
        );
      })
    : null;
};

export default React.memo(SocialChatItems);

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
  background: white;
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
    animation: ${shake} 1s 1;
    transform: scale(1.1);
  }
  p {
    margin: 0 0 0 8px;
    font-family: Public Sans, -apple-system, Helvetica, sans-serif;
  }
`;
