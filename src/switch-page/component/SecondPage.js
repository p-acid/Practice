import React from "react";
import styled from "styled-components";

const SecondPage = props => {
  return (
    <>
      <Text>Second</Text>
      <Text>Select Your Region!</Text>
    </>
  );
};

export default SecondPage;

const Text = styled.div`
  padding: 50px;
  font-size: 40px;
  font-weight: bold;
`;
