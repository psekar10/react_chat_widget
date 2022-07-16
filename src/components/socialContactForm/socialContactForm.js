import React from "react";
import styled from "@emotion/styled";

const SocialContactForm = () => {
  return (
    <FormContainer>
      <p style={{ textAlign: "center", margin: "0 0 8px" }}>How can I help?</p>
      <InputForm type="text" placeholder="john.doe@example.com" name="email" />
      <TextareaForm
        id="message"
        placeholder="Please input your message here."
        name="message"
        rows="4"
      />
      <SubmitForm type="submit" value="Submit" />
    </FormContainer>
  );
};

export default React.memo(SocialContactForm);

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 13%) 0px 5px 8px 0px;
  transition: transform 0.15s ease-in-out 0s;
  margin: 0 0 15px;
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

const TextareaForm = styled.textarea`
  font-size: 0.875rem;
  padding: 8px 16px;
  margin-bottom: 8px;
  font-family: sans-serif;
  border: 1px solid #bebebe;
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
