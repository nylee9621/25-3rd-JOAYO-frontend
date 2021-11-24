import BOOK_LIST from '@/data/BooksData';

export const totalViews = (bookId: number) => {
  const episodes = BOOK_LIST.filter(book => book.id === bookId)[0].episodes;
  const views = episodes.map(episode => episode.views);
  return views.reduce((prev, cur) => prev + cur, 0);
};

export const totalRecommends = (bookId: number) => {
  const episodes = BOOK_LIST.filter(book => book.id === bookId)[0].episodes;
  const recommends = episodes.map(episode => episode.recommends);
  return recommends.reduce((prev, cur) => prev + cur, 0);
};

export const totalComments = (bookId: number) => {
  const episodes = BOOK_LIST.filter(book => book.id === bookId)[0].episodes;
  const comments = episodes.map(episode => episode.comments.length);
  return comments.reduce((prev, cur) => prev + cur, 0);
};
