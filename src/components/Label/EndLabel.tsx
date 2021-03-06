import React from 'react';
import styled from 'styled-components/native';
import { Label } from '@/utils/interface';

const EndLabel: React.FC<Label> = ({ size }) => {
  return (
    <Wrapper size={size}>
      <Word size={size}>E</Word>
    </Wrapper>
  );
};

const Wrapper = styled.View<Label>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: #333333;
`;

const Word = styled.Text<Label>`
  color: white;
  font-family: 'NotoSansKR500';
  font-size: ${({ size }) => size - 2}px;
  line-height: ${({ size }) => size}px;
  text-align: center;
`;

export default EndLabel;
