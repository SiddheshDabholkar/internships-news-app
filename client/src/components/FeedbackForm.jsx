import styled from "styled-components";
import { MainContainer } from "../container/MainContainer";
import { Container } from "../sections/SideSection";
import { Button } from "../components/SideSectionComponents/Feedback";
import { LargeCardHeader } from "../Typography";
import { FormInput } from "../Typography/form";
import { useContext } from "react";
import { Context } from "../App";

const FormContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
  z-index: 1;
  background-color: aliceblue;
  @media (max-width: 920px) {
    align-items: center;
    width: 100%;
    height: auto;
    margin-top: 45px;
  }
  @media (min-width: 600px) {
    margin-top: 0px;
  }
`;
const SContainer = styled(Container)`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 600px) {
    align-items: center;
  }
`;
const Input = styled.input`
  padding: 2px 5px;
  width: 40%;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
  background-color: #fff;
  border-color: transparent;
  border-radius: 5px;
  height: 25px;
  margin: 2px;
  @media (max-width: 600px) {
    width: 80%;
  }
  :focus {
    outline: none;
  }
`;
const TextArea = styled.textarea`
  padding: 2px 5px;
  width: 90%;
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
  background-color: #fff;
  border-color: transparent;
  border-radius: 5px;
  min-height: 80px;
  margin: 2px;
  :focus {
    outline: none;
  }
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const PhoneInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CoutryCodeInput = styled(Input)`
  width: 20%;
`;
const PhoneInput = styled(Input)`
  width: 60%;
  @media (max-width: 600px) {
    width: 55%;
  }
`;
const EmailInput = styled(Input)`
  width: 90% !important;
  @media (max-width: 600px) {
    width: 55%;
  }
`;
const SButton = styled(Button)`
  color: #fff;
  width: 40%;
  margin-top: 5%;
  font-size: 18px;
  font-weight: bold;
  @media (max-width: 600px) {
    width: 80%;
  }
`;
const LargeHeader = styled(LargeCardHeader)`
  line-height: 0;
  align-items: center;
  font-size: 18px;
  justify-content: flex-start;

  @media (max-width: 600px) {
    justify-content: center;
    font-size: 14px;
  }
`;

const Errortext = styled.p`
  display: flex;
  flex-direction: row;
  line-height: 0;
  color: red;
  width: 70%;
  font-size: 10px;
`;

export default function FeedbackForm() {
  const {
    state: { modal },
    dispatch,
  } = useContext(Context);
  return (
    <>
      <FormContainer>
        <SContainer>
          <LargeHeader>Thank you so much for taking the time!</LargeHeader>
          <FormInput style={{ marginBottom: "40px" }}>
            Please provide the below details!
          </FormInput>
          <FormInput>First Name:</FormInput>
          <Input placeholder="John" />
          <FormInput>Last Name:</FormInput>
          <Input placeholder="lol" />
          <FormInput>Address:</FormInput>
          <TextArea
            row="3"
            col="3"
            placeholder="Enter your full postal address"
          />
          <FormInput>Country:</FormInput>
          <Input placeholder="India" />
          <FormInput>Email ID:</FormInput>
          <PhoneInputContainer>
            <EmailInput placeholder="example@gmail.com" />
            <Errortext>Please enter a valid email</Errortext>
          </PhoneInputContainer>
          <FormInput>Phone Number:</FormInput>
          <PhoneInputContainer>
            <CoutryCodeInput placeholder="+91" />
            <PhoneInput placeholder="1234567890" />
            <Errortext>Please enter a valid phone</Errortext>
          </PhoneInputContainer>
          <SButton
            onClick={() => {
              dispatch({ type: "modal", payload: !modal });
            }}
          >
            Submit Feedback
          </SButton>
        </SContainer>
      </FormContainer>
    </>
  );
}
