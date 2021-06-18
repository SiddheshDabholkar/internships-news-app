import { useReducer, createContext } from "react";
import styled from "styled-components";
import NewsSection from "./sections/NewsSection";
import SideSection from "./sections/SideSection";
import { initialState, reducer } from "./context";
import FeedBackModal from "./components/Modal/FeedbackModal";
import NewsModal from "./components/Modal/NewsModal";
import Navbar from "./sections/Navbar";
import NavbarModal from "./components/Modal/NavbarModal";

export const Context = createContext();

const RootContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: aliceblue;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Context.Provider value={{ state, dispatch }}>
        <Navbar />
        <RootContainer>
          <SideSection />
          <NewsSection />
          <FeedBackModal />
          <NewsModal />
        </RootContainer>
        <NavbarModal />
      </Context.Provider>
    </>
  );
}

export default App;
