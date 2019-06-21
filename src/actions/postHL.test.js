import { postHyperLink, POST_HYPERLINK, POST_HYPERLINK_PENDING } from './postHyperLinksAction';


jest.mock('../services/LinksApi.js', () => ({
  createHyperLink() {
    return Promise.resolve([]);
  }
}));

describe('hyperlink actions', () => {
  it('posts a hyperlink', () => {
    const linkAction = postHyperLink({
      url: 'anotherurl'
    });

    expect(linkAction).toEqual({
      type: POST_HYPERLINK,
      pendingType: POST_HYPERLINK_PENDING,
      fulfilledType: 'POST_HYPERLINK_FULFILLED',
      rejectedType: 'POST_HYPERLINK_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
