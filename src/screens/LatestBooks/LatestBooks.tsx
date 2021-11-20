import React, { useState } from 'react';
import styled from 'styled-components/native';
import ListTab from '@/components/ListTab/MainListTab';
import { FINISH_BOOKS_TABS, LATEST_BOOKS_TABS } from '@/data/ListTabsData';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const LatestBooks: React.FC = () => {
  const [showingTab, setShowingTab] = useState<number>(1);

  return (
    <Container>
      <ScrollView style={{ backgroundColor: 'gray', height: 700 }}>
        <Text>
          {LATEST_BOOKS_TABS.filter(tab => tab.id === showingTab)[0].name}
        </Text>
      </ScrollView>
    </Container>
  );
};

const Container = styled.ScrollView``;

export default LatestBooks;
