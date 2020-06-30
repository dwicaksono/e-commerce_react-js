import React from "react";
import { HomePageContainer } from "./hompage.styled";
import Directory from "../../components/Directory/Directory.js";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
