import {GET_POSTS_LIST, CLEAR_POSTS_LIST} from './types';

export const getPostsList = (group: []) => ({
  type: GET_POSTS_LIST,
  payload: {postGroup: group},
});

export const clearPostsList = () => ({
  type: CLEAR_POSTS_LIST,
  payload: {postGroup: []},
});
