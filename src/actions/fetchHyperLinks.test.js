import {
  fetchHyperLinks,
  FETCH_HYPERLINKS,
  FETCH_HYPERLINKS_PENDING,
} from '../actions/fetchHyperLinksAction';

jest.mock('../services/LinksApi.js', () => ({
  getHyperLinks() {
    return Promise.resolve([]);
  }
}));

describe('hyperlink actions', () => {
  it('fetches a list of hyperlinks and dispatches an action', () => {
    expect(fetchHyperLinks()).toEqual({
      type: FETCH_HYPERLINKS,
      pendingType: FETCH_HYPERLINKS_PENDING,
      payload: expect.any(Promise),
      fulfilledType: 'FETCH_HYPERLINKS_FULFILLED',
      rejectedType: 'FETCH_HYPERLINKS_REJECTED'
    });
  });
});
