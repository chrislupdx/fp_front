import reducer from './HyperLinksReducer';
import { FETCH_HYPERLINKS } from '../actions/fetchHyperLinksAction';
import { POST_HYPERLINK } from '../actions/postHyperLinksAction';

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
