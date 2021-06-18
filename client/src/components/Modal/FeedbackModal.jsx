import { useContext } from "react";
import styled from "styled-components";
import { Context } from "../../App";
import { MainContainer } from "../../container/MainContainer";
import { Container } from "../../sections/SideSection";
import Reader from "../../components/SideSectionComponents/Reader";
import Feedback from "../../components/SideSectionComponents/Feedback";
import { FormInput } from "../../Typography/form";
import { LargeCardHeader } from "../../Typography/";
import { Button } from "../SideSectionComponents/Feedback";

export const BG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  min-height: 100%;
  backdrop-filter: blur(2px);
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  background-color: aliceblue;
  border-top-right-radius: 19px;
  border-bottom-right-radius: 19px;
  backdrop-filter: blur(0px);
  box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px #42424233;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;
const SideContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
`;
const FormContainer = styled(MainContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 65%;
`;
const SContainer = styled(Container)`
  width: 90%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
  height: 100px;
  margin: 2px;
  :focus {
    outline: none;
  }
`;
const PhoneInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
const CoutryCodeInput = styled(Input)`
  width: 20%;
`;
const PhoneInput = styled(Input)`
  width: 50%;
`;
const SButton = styled(Button)`
  color: #fff;
  width: 40%;
  margin-top: 5%;
  font-size: 18px;
  font-weight: bold;
`;
const LargeHeader = styled(LargeCardHeader)`
  line-height: 0;
  align-items: center;
  justify-content: flex-start;
`;

export default function FeedBackModal() {
  const { state, dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "modal", payload: false });
  };
  if (state.modal) {
    return (
      <>
        <BG onClick={handleClick}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <SideContainer>
              <Container>
                <Reader />
                <Feedback />
              </Container>
            </SideContainer>
            <FormContainer>
              <SContainer>
                <LargeHeader style={{ alignItems: "flex-start" }}>
                  Thank you so much for taking the time!
                </LargeHeader>
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
                <Input placeholder="example@gmail.com" />
                <FormInput>Phone Number:</FormInput>
                <PhoneInputContainer>
                  <CoutryCodeInput placeholder="+91" />
                  <PhoneInput placeholder="1234567890" />
                </PhoneInputContainer>
                <SButton>Submit Feedback</SButton>
              </SContainer>
            </FormContainer>
          </ModalContainer>
        </BG>
      </>
    );
  } else {
    return null;
  }
}
