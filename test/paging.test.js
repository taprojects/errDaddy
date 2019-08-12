import pagePosts from '../src/utils/pagePosts';

const posts = [
  { title: 'one' },
  { title: 'two' },
  { title: 'three' },
  { title: 'four' },
  { title: 'five' },
  { title: 'six' },
  { title: 'seven' },
  { title: 'eight' },
  { title: 'nine' },
  { title: 'ten' },
];

const firstFive = [
  { title: 'one' },
  { title: 'two' },
  { title: 'three' },
  { title: 'four' },
  { title: 'five' }
];

const secondFive = [
  { title: 'six' },
  { title: 'seven' },
  { title: 'eight' },
  { title: 'nine' },
  { title: 'ten' }
];

it('pages first page', () => {
  const pageOne = pagePosts(1, 5, posts);
  expect(pageOne).toEqual(firstFive);
});

it('pages second page', () => {
  const pagetwo = pagePosts(2, 5, posts);
  expect(pagetwo).toEqual(secondFive);
});
