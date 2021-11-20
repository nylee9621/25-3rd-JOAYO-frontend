import Main from '@/screens/Main/Main';
import LatestBooks from '@/screens/LatestBooks/LatestBooks';

const MENU_LIST = [
  {
    id: 1,
    inactiveIcon: require('@assets/images/Menu/event.png'),
    activeIcon: require('@assets/images/Menu/event-fill.png'),
    name: '이벤트',
    navigate: Main,
  },
  {
    id: 2,
    inactiveIcon: require('@assets/images/Menu/finish.png'),
    activeIcon: require('@assets/images/Menu/finish-fill.png'),
    name: '완결',
    navigate: Main,
  },
  {
    id: 3,
    inactiveIcon: require('@assets/images/Menu/new.png'),
    activeIcon: require('@assets/images/Menu/new-fill.png'),
    name: '최신작품',
    navigate: LatestBooks,
  },
  {
    id: 4,
    inactiveIcon: require('@assets/images/Menu/best.png'),
    activeIcon: require('@assets/images/Menu/best-fill.png'),
    name: 'Today Best',
    navigate: Main,
  },
  {
    id: 5,
    inactiveIcon: require('@assets/images/Menu/save.png'),
    activeIcon: require('@assets/images/Menu/save-fill.png'),
    name: '보관함',
    navigate: Main,
  },
];

export default MENU_LIST;
