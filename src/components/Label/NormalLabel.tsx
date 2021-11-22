import React from 'react';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const NormalLabel: React.FC = () => {
  return (
    <Label>
      <FontAwesomeIcon icon={faUser} size={9} color="#B7B7B7" />
    </Label>
  );
};

const Label = styled.View`
  justify-content: center;
  width: 11px;
  height: 11px;
`;

export default NormalLabel;
