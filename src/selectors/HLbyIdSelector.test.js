import { HyperLinkByIDS } from '../selectors/HLbyIdSelector';

describe('by id selector', () => {
  //renders a url
  it('gets url', () => {
    const state = {
      hyperlinkbyid: {
        hyperlink: {
          url: 'poop'
        }
      } };
    expect(HyperLinkByIDS(state)).toEqual({ url: 'poop' }
    
    );
  });
});


