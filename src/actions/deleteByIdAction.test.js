import { deleteHyperLinkById } from '../actions/deleteByIdAction';

jest.mock('../services/LinksApi.js', () => ({
  deleteLinkById() {
    return Promise.resolve();
  }
}));

describe('delete actoins', () => {
  it('dispatches a delete by id action', () => {
    expect(deleteHyperLinkById()).toEqual({
      type: 'DELETE_HYPERLINK_BY_ID',
      pendingType: 'DELETE_HYPERLINK_BY_ID_PENDING',
      payload: expect.any(Promise),
      fulfilledType: 'DELETE_HYPERLINK_BY_ID_FULFILLED',
      rejectedType: 'DELETE_HYPERLINK_BY_ID_REJECTED'
    });
  });
});
