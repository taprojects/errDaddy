import numGoodSpans from '../../src/functions/dependScore';

describe('depend function', () => {
  it('7 good and 3 bad', () => {
    const good = 7;
    const bad = 3;

    const result = numGoodSpans(good, bad);

    expect(result).toEqual(70); 
  });

  it('4 good and 2 bad', () => {
    const good = 4;
    const bad = 2;

    const result = numGoodSpans(good, bad);

    expect(result).toEqual(67); 
  });
});

