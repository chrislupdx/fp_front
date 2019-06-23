import reducer from './HyperLinksReducer';
import { FETCH_HYPERLINKS } from '../actions/fetchHyperLinksAction';
import { POST_HYPERLINK } from '../actions/postHyperLinksAction';
import { FETCH_HYPERLINK_BY_ID } from '../actions/fetchbyIdAction.js';

jest.mock('../services/LinksApi.js');

describe('hyperlinks reducer tests', () => {
  it('handles the fetch links reducer', () => {
    const initialState = {
      loading: false,
      hyperlinkList: [],
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_HYPERLINKS,
      payload: ['one', 'two', 'a long-kept promise']
    });

    expect(newState).toEqual({
      loading: false,
      hyperlinkList: ['one', 'two', 'a long-kept promise'],
      error: null
    });
  });
  it('handles the post links reducer', () => {
    const initialState = {
      loading: true,
      hyperlinkList: [],
    };

    const newState = reducer(initialState, {
      type: POST_HYPERLINK,
      payload: { 'url' : 'less cheese' }
    });

    expect(newState).toEqual({
      loading: false,
      hyperlinkList: [{ url: 'less cheese' }]
    });

  });

});

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
