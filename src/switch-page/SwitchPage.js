import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FirstPage from "./component/FirstPage";
import SecondPage from "./component/SecondPage";
import ThirdPage from "./component/ThirdPage";

const SwitchPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {}, [currentPage]);

  return (
    <Wrapper>
      <ListBox>
        {LIST.map(
          item =>
            item.id === currentPage && (
              <PageWrapper key={item.id}>{item.page}</PageWrapper>
            )
        )}
      </ListBox>
      <BtnBox>
        <Button
          onClick={() => setCurrentPage(prev => (prev < 2 ? 3 : prev - 1))}
        >
          Back
        </Button>
        <Button
          onClick={() => setCurrentPage(prev => (prev > 2 ? 1 : prev + 1))}
        >
          Skip
        </Button>
      </BtnBox>
    </Wrapper>
  );
};

export default SwitchPage;

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 10px;
  width: 600px;
`;

const ListBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  height: 400px;
  background-color: lightgray;
  border-radius: 10px;
`;

const BoxMount = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-5%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const PageWrapper = styled.div`
  animation: ${BoxMount} 250ms;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  width: 100px;
  border-radius: 10px;
  text-align: center;
  background-color: gray;
  cursor: pointer;
`;

const LIST = [
  { id: 1, page: <FirstPage /> },
  { id: 2, page: <SecondPage /> },
  { id: 3, page: <ThirdPage /> },
];
