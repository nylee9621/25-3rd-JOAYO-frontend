import { MenuParamList, RootParamList } from '@/utils/type';

const MIDDLE_MENU_LIST = [
  {
    id: 1,
    name: 'Festival',
    label: '77페스티벌',
    icon: require('@assets/images/icon/festival.png'),
    navigate: 'LatestBooks' as keyof MenuParamList,
  },
  {
    id: 2,
    name: 'Festa',
    label: '피닉스페스타',
    icon: require('@assets/images/icon/phoenix.png'),
    navigate: 'LatestBooks' as keyof MenuParamList,
  },
  {
    id: 3,
    name: 'Born',
    label: '조아라 BORN',
    icon: require('@assets/images/icon/shuttle.png'),
    navigate: 'LatestBooks' as keyof MenuParamList,
  },
  {
    id: 4,
    name: 'Gifts',
    label: '프리미엄 선물함',
    icon: require('@assets/images/icon/gift.png'),
    navigate: 'FavoriteGenres' as keyof RootParamList,
  },
  {
    id: 5,
    name: 'FavoriteGenres',
    label: '선호장르',
    icon: require('@assets/images/icon/star.png'),
    navigate: 'FavoriteGenres' as keyof RootParamList,
  },
  {
    id: 6,
    name: 'Algorithm',
    label: '맞춤추천',
    icon: require('@assets/images/icon/book.png'),
    navigate: 'FavoriteGenres' as keyof RootParamList,
  },
];

export default MIDDLE_MENU_LIST;
