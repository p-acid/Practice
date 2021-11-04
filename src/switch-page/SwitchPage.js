import React, { useState } from "react";
import styled from "styled-components";

const SwitchPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const page = LIST[currentPage];
  const { name } = page;
  return (
    <Wrapper>
      <BtnBox>
        {Object.values(LIST).map(item => {
          const { id, name } = item;
          return (
            <SwitchBtn key={id} onClick={() => setCurrentPage(id)}>
              {name}
            </SwitchBtn>
          );
        })}
      </BtnBox>
      <ListBox>
        <Text>{name}</Text>
        <SkipBtn
          onClick={() =>
            setCurrentPage(prev => {
              if (prev >= 2) {
                alert("Done!");
                return 0;
              }
              return Number(prev) + 1;
            })
          }
        >
          Skip
        </SkipBtn>
      </ListBox>
    </Wrapper>
  );
};

export default SwitchPage;

const Wrapper = styled.section`
  margin: 0 auto;
  padding: 10px;
  width: 600px;
`;

const BtnBox = styled.ul`
  display: flex;
  gap: 5px;
  padding: 0;
  list-style: none;
`;

const SwitchBtn = styled.li`
  flex: 1;
  padding: 10px 0;
  text-align: center;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer;

  &:hover {
    background-color: gray;
  }
`;

const ListBox = styled.div`
  position: relative;
  margin: 10px 0;
  padding: 10px;
  height: 400px;
  background-color: lightgray;
  border-radius: 10px;
`;

const Text = styled.div`
  height: 100px;
  border-radius: 10px;
  text-align: center;
  background-color: white;
`;

const SkipBtn = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: gray;
  cursor: pointer;
`;

const LIST = {
  0: {
    id: "0",
    name: "keyword select",
  },
  1: {
    id: "1",
    name: "country, time zone",
  },
  2: {
    id: "2",
    name: "data integration",
  },
};
