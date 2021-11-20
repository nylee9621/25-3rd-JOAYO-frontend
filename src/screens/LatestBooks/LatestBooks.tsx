import React from 'react';
import ListTab from '@/components/ListTab/ListTab';
import { LATEST_BOOKS_TABS } from '@/data/ListTabsData';

const LatestBooks: React.FC = () => {
  return <ListTab tabs={LATEST_BOOKS_TABS} />;
};

export default LatestBooks;
