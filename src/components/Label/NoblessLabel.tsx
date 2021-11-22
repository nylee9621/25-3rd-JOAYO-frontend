import React from 'react';
import styled from 'styled-components/native';

const NoblessLabel: React.FC<Label> = ({ size }) => {
  return (
    <Label size={size}>
      <Word size={size}>N</Word>
    </Label>
  );
};

const Label = styled.View<Label>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: #4186e1;
`;

const Word = styled.Text<Label>`
  color: white;
  font-family: 'NotoSansKR500';
  font-size: ${({ size }) => size - 2}px;
  line-height: ${({ size }) => size}px;
  text-align: center;
`;

export default NoblessLabel;
