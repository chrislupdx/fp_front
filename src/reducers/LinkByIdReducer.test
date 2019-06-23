import reducer from './LinksByIdReducer';
import {
  FETCH_HYPERLINK_BY_ID,
} from '../actions/fetchbyIdAction.js';

jest.mock('../services/LinksApi.js');

describe('handles links by id reducers', () => {
  it('handles the fetch links by id reducer', () => {
    const initialState = {
      hyperlink: null,
      loading: null,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_HYPERLINK_BY_ID,
      payload: '5d0d27868fc6bd00174500ac'
    });

    expect(newState).toEqual({
      loading: false,
      hyperlink: expect.anything(),
      error: null
    });
  });


});
