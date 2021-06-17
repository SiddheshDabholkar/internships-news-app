import styled from "styled-components";
import NewsSection from "./sections/NewsSection";
import SideSection from "./sections/SideSection";

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  background-color: aliceblue;
`;

function App() {
  return (
    <>
      <RootContainer>
        <SideSection />
        <NewsSection />
      </RootContainer>
    </>
  );
}

export default App;
