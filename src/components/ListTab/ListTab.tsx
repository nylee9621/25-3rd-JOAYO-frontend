import React from 'react';
import styled from 'styled-components/native';

interface Props {
  tabs: tab[];
}

interface tab {
  id: number;
  name: string;
}

const ListTab: React.FC<Props> = ({ tabs }) => {
  return <Container></Container>;
};

const Container = styled.View`
  height: 45px;
  background-color: #20459e;
`;

export default ListTab;
