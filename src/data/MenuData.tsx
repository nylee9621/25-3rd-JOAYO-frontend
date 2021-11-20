import {
  EVENT_TABS,
  FINISH_BOOKS_TABS,
  LATEST_BOOKS_TABS,
  STORAGE_TABS,
  TODAY_BEST_TABS,
} from './ListTabsData';

const MENU_LIST = [
  {
    id: 1,
    name: 'Event',
    label: '이벤트',
    inactiveIcon: require('@assets/images/Menu/event.png'),
    activeIcon: require('@assets/images/Menu/event-fill.png'),
    navigate: EVENT_TABS,
  },
  {
    id: 2,
    name: 'FinishBooks',
    label: '완결작품',
    inactiveIcon: require('@assets/images/Menu/finish.png'),
    activeIcon: require('@assets/images/Menu/finish-fill.png'),
    navigate: FINISH_BOOKS_TABS,
  },
  {
    id: 3,
    name: 'LatestBooks',
    label: '최신작품',
    inactiveIcon: require('@assets/images/Menu/new.png'),
    activeIcon: require('@assets/images/Menu/new-fill.png'),
    navigate: LATEST_BOOKS_TABS,
  },
  {
    id: 4,
    name: 'TodayBest',
    label: 'Today Best',
    inactiveIcon: require('@assets/images/Menu/best.png'),
    activeIcon: require('@assets/images/Menu/best-fill.png'),
    navigate: TODAY_BEST_TABS,
  },
  {
    id: 5,
    name: 'Storage',
    label: '보관함',
    inactiveIcon: require('@assets/images/Menu/save.png'),
    activeIcon: require('@assets/images/Menu/save-fill.png'),
    navigate: STORAGE_TABS,
  },
];

export default MENU_LIST;
