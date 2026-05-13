export interface Book {
  slug: string
  title: string
  author: string
  status: 'want' | 'reading' | 'done'
  cover: string
  description: string
  genre: string
  rating: number | null
}

export const books: Book[] = [
  {
    slug: 'el-principe-cruel',
    title: 'El Príncipe Cruel',
    author: 'Holly Black',
    status: 'reading',
    cover: '/img/books/book_1.png',
    description: 'Julieta desea pertenecer al mundo de las hadas, pero para lograrlo tendrá que enfrentarse a un príncipe cruel y despiadado.',
    genre: 'Fantasy',
    rating: 7,
  },
  {
    slug: 'reckless',
    title: 'Reckless',
    author: 'Cornelia Funke',
    status: 'done',
    cover: '/img/books/book_1.png',
    description: 'Jacob Reckless descubre un espejo mágico que lo transporta a un mundo oscuro de cuentos de hadas corrompidos.',
    genre: 'Fantasy',
    rating: 10,
  },
  {
    slug: 'shatter-me',
    title: 'Shatter Me',
    author: 'Tahereh Mafi',
    status: 'want',
    cover: '/img/books/book_1.png',
    description: 'Juliette lleva 264 días encerrada. Su toque es letal. Nadie la ha tocado en todo ese tiempo. Hasta ahora.',
    genre: 'Dystopia',
    rating: null,
  },
]