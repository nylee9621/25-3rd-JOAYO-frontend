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
    listTabs: EVENT_TABS,
  },
  {
    id: 2,
    name: 'FinishBooks',
    label: '완결작품',
    inactiveIcon: require('@assets/images/Menu/finish.png'),
    activeIcon: require('@assets/images/Menu/finish-fill.png'),
    listTabs: FINISH_BOOKS_TABS,
  },
  {
    id: 3,
    name: 'LatestBooks',
    label: '최신작품',
    inactiveIcon: require('@assets/images/Menu/new.png'),
    activeIcon: require('@assets/images/Menu/new-fill.png'),
    listTabs: LATEST_BOOKS_TABS,
  },
  {
    id: 4,
    name: 'TodayBest',
    label: 'Today Best',
    inactiveIcon: require('@assets/images/Menu/best.png'),
    activeIcon: require('@assets/images/Menu/best-fill.png'),
    listTabs: TODAY_BEST_TABS,
  },
  {
    id: 5,
    name: 'Storage',
    label: '보관함',
    inactiveIcon: require('@assets/images/Menu/save.png'),
    activeIcon: require('@assets/images/Menu/save-fill.png'),
    listTabs: STORAGE_TABS,
  },
];

export default MENU_LIST;
