import tagify from '../src/functions/tagify';

it('string of tags into an array of tags', () => {
  const input = '#js #input #formDaddy';
  const expected = ['js', 'input', 'formdaddy'];

  expect(tagify(input)).toEqual(expected);
});
