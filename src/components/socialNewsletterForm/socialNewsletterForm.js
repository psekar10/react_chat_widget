import React from "react";
import styled from "@emotion/styled";

const SocialNewsletterForm = () => {
  return (
    <FormContainer>
      <p>Sign up for the newsletter to keep track of the latest developments</p>
      <p>I keep things light and will not spam.</p>
      <InputForm type="text" placeholder="John Doe" name="name" />
      <InputForm type="text" placeholder="john.doe@example.com" name="email" />
      <SubmitForm type="submit" value="Submit" />
    </FormContainer>
  );
};

export default React.memo(SocialNewsletterForm);

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
