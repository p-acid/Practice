import React from "react";
import styled from "styled-components";

const SearchList = ({
  list,
  searchInput,
  setSearchInput,
  isSelected,
  handleCurrentTag,
}) => {
  return (
    <Wrapper>
      {list
        .filter(
          item =>
            item.tagName.includes(searchInput) && isSelected(item.id, false)
        )
        .map(item => (
          <Item
            key={item.id}
            onClick={() => {
              handleCurrentTag(item.id);
              setSearchInput("");
            }}
          >
            {item.tagName}
          </Item>
        ))}
    </Wrapper>
  );
};

export default SearchList;

const Wrapper = styled.ul`
  position: absolute;
  top: 30px;
  padding: 10px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 5px;
  list-style: none;
  text-align: center;
  font-size: 14px;
  background-color: white;
`;

const Item = styled.li`
  margin-bottom: 7px;
  padding: 6px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  transition: 1s;
  background-color: white;

  &:hover {
    background-color: lightgray;
  }
`;
