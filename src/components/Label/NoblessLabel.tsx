import React from 'react';
import styled from 'styled-components/native';

const NoblessLabel: React.FC = () => {
  return (
    <Label>
      <N>N</N>
    </Label>
  );
};

const Label = styled.View`
  margin-right: 1px;
  width: 11px;
  height: 11px;
  background-color: #4186e1;
`;

const N = styled.Text`
  align-self: center;
  color: white;
  font-family: 'NotoSansKR500';
  font-size: 9px;
  line-height: 11px;
`;

export default NoblessLabel;
