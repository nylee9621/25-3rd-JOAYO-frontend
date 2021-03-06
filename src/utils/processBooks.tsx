import { Book } from './interface';

export const processBooks = (books: Book[], menu: string, tab: string) => {
  let temp = books;
  temp = makeListByMenu(temp, menu);
  temp = filterBooksByTab(temp, tab);
  return temp;
};

/*======필터&정렬 순서=======*/
//1차 선호장르 --> ListTab Nav에서 수행
//2차 메뉴
//3차 탭
//4차 서브탭
/*======필터&정렬 순서=======*/

//1차 선호장르 필터
export const filterBooksByFavoriteGenres = (
  books: Book[],
  favoriteGenres: string[]
) => {
  if (favoriteGenres[0] === '전체') {
    return books;
  } else {
    return books.filter(book => favoriteGenres.includes(book.genre));
  }
};

//2차 메뉴 필터
const makeListByMenu = (books: Book[], menu: string) => {
  switch (menu) {
    case 'FinishBooks':
      return books.filter(book => book.isEnded);
    case 'LatestBooks':
      return books.sort((a, b) => {
        const dateA = new Date(a.episodes[a.episodes.length - 1].update);
        const dateB = new Date(b.episodes[b.episodes.length - 1].update);
        return dateA > dateB ? 1 : -1;
      });
    case 'TodayBest':
      return books.sort((a, b) => {
        const averA =
          a.today.views + a.today.recommends * 3 + a.today.favorites * 5;
        const averB =
          b.today.views + b.today.recommends * 3 + b.today.favorites * 5;
        return averB - averA;
      });
    default:
      return books;
  }
};

//3차 탭 필터
const filterBooksByTab = (books: Book[], tab: string) => {
  switch (tab) {
    case 'Festival':
      return books.filter(book => book.competition === '77페스티벌');
    case 'Festa':
      return books.filter(book => book.competition === '피닉스페스타');
    case 'Nobless':
      return books.filter(book => book.store === '노블레스');
    case 'Premium':
      return books.filter(book => book.store === '프리미엄');
    case 'Free':
      return books.filter(book => !book.store);
    case 'Finish':
      return books.filter(book => book.isEnded);
    default:
      return books;
  }
};
