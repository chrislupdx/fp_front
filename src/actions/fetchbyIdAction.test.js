import { 
  fetchHyperLinkById
} from '../actions/fetchbyIdAction';

jest.mock('../services/LinksApi.js', () => ({
  getLinkById() {
    return Promise.resolve({});
  }
}));

describe('by id actions', () => {
  it('fetches a list of hyperlinks and dispatches an action', () => {
    expect(fetchHyperLinkById()).toEqual({
      type: 'FETCH_HYPERLINKBYID',
      pendingType: 'FETCH_HYPERLINKBYID_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'FETCH_HYPERLINKBYID_FULFILLED',
      rejectedType: 'FETCH_HYPERLINKBYID_REJECTED'
    });
  });
})
;
