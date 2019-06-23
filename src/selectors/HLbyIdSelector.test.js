import { HyperLinkByID } from '../selectors/HLbyIdSelector';

describe('by id selector', () => {
  it('gets url', () => {
    const state = {
      hyperlinks: {
        hyperlink: {
          url: 'poop'
        }
      } };
    expect(HyperLinkByID(state)).toEqual({ url: 'poop' }
    
    );
  });
});


