import React from "react";
import styled from "styled-components";

const TagList = ({ list, isSelected, bool, handleCurrentTag }) => {
  return (
    <TagBox>
      {list.map(item => {
        const { id, tagName } = item;
        return (
          isSelected(id, bool) && (
            <Tag key={id} onClick={() => handleCurrentTag(id)}>
              {tagName}
            </Tag>
          )
        );
      })}
    </TagBox>
  );
};

export default TagList;

const TagBox = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  margin-bottom: 10px;
  padding: 10px;
  width: 400px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const Tag = styled.div`
  padding: 6px;
  border: 1px solid lightgray;
  border-radius: 5px;
  text-align: center;
  background-color: ${({ activate }) => activate && "orange"};
  cursor: pointer;
  transition: 1s;

  &:hover {
    background-color: lightgray;
  }
`;
