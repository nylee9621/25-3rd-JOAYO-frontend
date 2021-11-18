import React from 'react';
import styled from 'styled-components/native';

const NewLabel: React.FC = () => {
  return (
    <Label>
      <New>NEW</New>
    </Label>
  );
};

const Label = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  background-color: #4186e1;
  width: 30px;
  height: 14px;
  border-radius: 16px;
`;

const New = styled.Text`
  color: white;
  font-family: 'NotoSansKR500';
  font-size: 9px;
  line-height: 11px;
`;

export default NewLabel;
