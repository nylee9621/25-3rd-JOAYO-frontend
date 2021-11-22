import React from 'react';
import styled from 'styled-components/native';

const PremiumLabel: React.FC<Label> = ({ size }) => {
  return (
    <Label size={size}>
      <Word size={size}>P</Word>
    </Label>
  );
};

const Label = styled.View<Label>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: #acc231;
`;

const Word = styled.Text<Label>`
  color: white;
  font-family: 'NotoSansKR500';
  font-size: ${({ size }) => size - 2}px;
  line-height: ${({ size }) => size}px;
  text-align: center;
`;

export default PremiumLabel;
