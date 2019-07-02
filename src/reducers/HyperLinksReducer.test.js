import reducer from './HyperLinksReducer';
import { FETCH_HYPERLINKS } from '../actions/fetchHyperLinksAction';
import { POST_HYPERLINK } from '../actions/postHyperLinksAction';
import { FETCH_HYPERLINK_BY_ID } from '../actions/fetchbyIdAction.js';
import { DELETE_HYPERLINK_BY_ID } from '../actions/deleteByIdAction';
import { PATCH_HYPERLINK } from '../actions/patchByIDAction';

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
      hyperlink: '5d0d27868fc6bd00174500ac',
      error: null
    });
  });

});

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
      payload: { 'url': 'less cheese' }
    });

    expect(newState).toEqual({
      loading: false,
      hyperlinkList: [{ url: 'less cheese' }]
    });

  });

});

describe('handles the deletes by id reducer', () => {
  //lowercase words pls
  it.skip('reducer handles the deletebyid action', () => {
    const initialState = {
      hyperlinkList: [
        { _id: '111', url: 'uno mas' },
        { _id: '222', url: 'ohnoo' },
      ]
    };
    const newState = reducer(initialState, {
      type: DELETE_HYPERLINK_BY_ID,
      payload: '222'
      //we feed the _id into the url, payload would do nothing
    });

    expect(newState).toEqual(
      { hyperlinkList: [
      ],
      loading: false }
    );
  });
});

describe('handles the patch by id reducer', () => {
  it('can handle patchbyid action', () => {
    const payload = {
      name: 'oldname',
      url: 'url.com',
    };

    const initialState = {
      loading: true,
      hyperlink: payload
    };

    const newState = reducer(initialState, {
      type: PATCH_HYPERLINK,
      payload: { ...payload, name: 'name' }
    });

    expect(newState).toEqual({
      loading: false,
      hyperlink: { ...payload, name: 'name' }
    });
  });
});

