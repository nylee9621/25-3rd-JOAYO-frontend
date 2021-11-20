import Main from '@/screens/Main/Main';

export const EVENT_TABS = [
  { id: 1, name: 'Event', label: '이벤트', navigate: Main },
  { id: 2, name: 'HalfFree', label: '반반무', navigate: Main },
];

export const FINISH_BOOKS_TABS = [
  { id: 1, name: 'All', label: '전체', navigate: Main },
  { id: 2, name: 'Nobless', label: '노블레스', navigate: Main },
  { id: 3, name: 'Premium', label: '프리미엄', navigate: Main },
];

export const LATEST_BOOKS_TABS = [
  { id: 1, name: 'All', label: '전체', navigate: Main },
  { id: 2, name: 'Festival', label: '77FES', navigate: Main },
  { id: 3, name: 'Festa', label: '피닉스페스타', navigate: Main },
  { id: 4, name: 'Born', label: 'BORN', navigate: Main },
  { id: 5, name: 'Nobless', label: '노블레스', navigate: Main },
  { id: 6, name: 'Premium', label: '프리미엄', navigate: Main },
  { id: 7, name: 'Free', label: '무료', navigate: Main },
  { id: 8, name: 'Finish', label: '완결', navigate: Main },
];

export const TODAY_BEST_TABS = [
  { id: 1, name: 'All', label: '전체', navigate: Main },
  { id: 2, name: 'Nobless', label: '노블레스', navigate: Main },
  { id: 3, name: 'Premium', label: '프리미엄', navigate: Main },
  { id: 4, name: 'Free', label: '무료', navigate: Main },
  { id: 5, name: 'Finish', label: '완결', navigate: Main },
];

export const STORAGE_TABS = [
  { id: 1, name: 'FavoriteBooks', label: '선호작', navigate: Main },
  { id: 2, name: 'HistoryBooks', label: '이어보기', navigate: Main },
  { id: 3, name: 'BuyList', label: '구매작품', navigate: Main },
];
