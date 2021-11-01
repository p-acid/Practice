import React, { useState } from "react";
import styled from "styled-components";

const ProgressBar = () => {
  const [percent, setPercent] = useState(70);

  return (
    <Wrapper>
      <Title>Progress Bar</Title>
      <BarWrapper>
        <Bar percent={percent}>{percent}%</Bar>
      </BarWrapper>
      <div>
        <Button
          onClick={() => {
            setPercent(percent + 5);
          }}
        >
          up
        </Button>
        <Button
          onClick={() => {
            setPercent(percent - 5);
          }}
        >
          down
        </Button>
      </div>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
`;

const Title = styled.h1`
  font-size: 16px;
`;

const BarWrapper = styled.div`
  width: 200px;
  border-radius: 10px;
  background-color: lightgray;
`;

const Bar = styled.div`
  width: ${({ percent }) => percent + "%"};
  border-radius: inherit;
  text-align: center;
  background-color: orange;
  transition: 1s;
`;

const Button = styled.button`
  margin: 10px;
`;
