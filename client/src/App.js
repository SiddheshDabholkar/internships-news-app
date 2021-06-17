import { useReducer, useContext, createContext } from "react";
import styled from "styled-components";
import NewsSection from "./sections/NewsSection";
import SideSection from "./sections/SideSection";
import { initialState, reducer } from "./context";

export const toggleContext = createContext();

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
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <toggleContext.Provider value={{ state, dispatch }}>
        <RootContainer>
          <SideSection />
          <NewsSection />
        </RootContainer>
      </toggleContext.Provider>
    </>
  );
}

export default App;
