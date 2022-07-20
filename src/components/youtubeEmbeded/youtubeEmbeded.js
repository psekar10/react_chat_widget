import React from "react";
import styled from "@emotion/styled";

const YoutubeEmbeded = ({ embeddedLink }) => {
  return (
    <div style={{ width: "512px" }}>
      <iframe
        width="512px"
        height="280px"
        src={`https://www.youtube.com/embed/${embeddedLink}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default React.memo(YoutubeEmbeded);

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 13%) 0px 5px 8px 0px;
  transition: transform 0.15s ease-in-out 0s;
  margin: 0 0 15px;
  width: 300px;
  p {
    text-align: center;
    margin: 0 0 8px;
  }
`;

const InputForm = styled.input`
  font-size: 0.875rem;
  padding: 8px 16px;
  min-height: 24px;
  margin-bottom: 8px;
  border: 1px solid #bebebe;
  font-family: sans-serif;
  border-radius: 4px;
`;

const SubmitForm = styled.input`
  padding: 8px 16px;
  color: rgb(255, 255, 255);
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 13%) 0px 5px 8px 0px;
  background: rgb(48, 213, 200);
  border: 0px;
  cursor: pointer;
`;
