import React, { useState } from "react";
import styled from "styled-components";
import TagList from "./component/TagList";
import SearchList from "./component/SearchList";

const ProgressBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [currentTag, setCurrentTag] = useState([]);

  const len = currentTag.length;

  const handleCurrentTag = id => {
    if (currentTag.includes(id)) {
      setCurrentTag(prev => {
        const arr = [...prev];
        arr.splice(prev.indexOf(id), 1);
        return arr;
      });
    } else if (len < 5) {
      setCurrentTag(prev => [...prev, id]);
    }
  };

  const handleSearchInput = ({ target }) => {
    const { value } = target;
    setSearchInput(value);
  };

  const isSelected = (id, bool = true) => {
    return bool ? currentTag.includes(id) : !currentTag.includes(id);
  };

  const percent = len * 20;

  return (
    <Wrapper>
      <Title>Keyword Selector</Title>
      <SearchBox>
        <SearchBar
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="검색어를 입력하세요"
        />
        {searchInput && (
          <SearchList
            list={EXAMPLE}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            isSelected={isSelected}
            handleCurrentTag={handleCurrentTag}
          />
        )}
      </SearchBox>
      <SubTitle>Selected Keyword</SubTitle>
      {len > 0 ? (
        <TagList
          list={EXAMPLE}
          isSelected={isSelected}
          bool={true}
          handleCurrentTag={handleCurrentTag}
        />
      ) : (
        <None>None</None>
      )}
      <SubTitle>Keyword List</SubTitle>
      <TagList
        list={EXAMPLE}
        isSelected={isSelected}
        bool={false}
        handleCurrentTag={handleCurrentTag}
      />
      <BarWrapper>
        <Bar percent={percent}>{percent}%</Bar>
      </BarWrapper>
    </Wrapper>
  );
};

export default ProgressBar;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid gray;
  margin: 0 auto;
  padding: 10px;
  width: 600px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  font-size: 12px;
`;

const SearchBox = styled.div`
  position: relative;
`;

const SearchBar = styled.input`
  padding: 10px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
`;

const None = styled.div`
  padding: 10px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: center;
  font-size: 14px;
  color: gray;
`;

const BarWrapper = styled.div`
  width: 200px;
  border-radius: 10px;
  background-color: lightgray;
  cursor: pointer;
`;

const Bar = styled.div`
  width: ${({ percent }) => percent + "%"};
  border-radius: inherit;
  text-align: center;
  background-color: ${({ percent }) => (percent >= 60 ? "orange" : "gray")};
  transition: 1s;
`;

const EXAMPLE = [
  {
    id: 1,
    tagName: "키워드1",
  },
  {
    id: 2,
    tagName: "키워드2",
  },
  {
    id: 3,
    tagName: "키워드3",
  },
  {
    id: 4,
    tagName: "키워드4",
  },
  {
    id: 5,
    tagName: "키워드5",
  },
  {
    id: 6,
    tagName: "키워드6",
  },
  {
    id: 7,
    tagName: "키워드7",
  },
  {
    id: 8,
    tagName: "키워드8",
  },
  {
    id: 9,
    tagName: "키워드9",
  },
  {
    id: 10,
    tagName: "키워드10",
  },
];
