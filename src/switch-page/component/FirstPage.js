import React from "react";
import styled from "styled-components";

const FirstPage = props => {
  return (
    <>
      <Text>First</Text>
      <Text>Select Your Keyword!</Text>
    </>
  );
};

export default FirstPage;

const Text = styled.div`
  padding: 50px;
  font-size: 40px;
  font-weight: bold;
`;
