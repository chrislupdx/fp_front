import { getHyperLinksList } from './HyperLinksSelector';

describe('post selectors', () => {
  it('gets all posts', () => {
    const state = {
      hyperlinks: {
        hyperlinkList: [
          { url: 'one' },
          { url: 'two' }
        ]
      } };
    expect(getHyperLinksList(state)).toEqual([
      { url: 'one' },
      { url: 'two' },
    ]);
  });
});
