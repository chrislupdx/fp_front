import {
  editLinkById
} from '../actions/patchByIDAction';

jest.mock('../services/LinksApi.js', () => ({
  patchLinkById() {
    return Promise.resolve({});
  }
}));

describe('patchbyid tests', () => {
  it('can dispatch an action', () => {
    expect(editLinkById()).toEqual({
      type: 'PATCH_HYPERLINK',
      pendingType: 'PATCH_HYPERLINK_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'PATCH_HYPERLINK_FULFILLED',
      rejectedType: 'PATCH_HYPERLINK_REJECTED'
    });
  });
});
