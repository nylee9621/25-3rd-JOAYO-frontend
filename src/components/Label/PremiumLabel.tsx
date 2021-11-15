import React from 'react';
import styled from 'styled-components/native';

const PremiumLabel: React.FC = () => {
  return (
    <Label>
      <P>P</P>
    </Label>
  );
};

const Label = styled.View`
  margin-right: 1px;
  width: 11px;
  height: 11px;
  background-color: #acc231;
`;

const P = styled.Text`
  align-self: center;
  color: white;
  font-family: 'NotoSansKR500';
  font-size: 9px;
  line-height: 11px;
`;

export default PremiumLabel;
