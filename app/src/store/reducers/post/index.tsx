import {
  API_GET_POSTS_LIST,
  SET_POST_LOADING,
  CLEAR_POSTS_LIST,
} from '../../actions/types';

const initialState = {
  posts: [],
  isLoading: false,
};

interface IAction {
  type: string;
  payload: any;
}

interface IState {
  posts: any;
  isLoading: boolean;
}

function postReducer(state = initialState, action: IAction): IState {
  switch (action.type) {
    case API_GET_POSTS_LIST:
      return Object.assign({}, state, {
        posts: action.payload,
      });
    case CLEAR_POSTS_LIST:
      return Object.assign({}, state, {
        posts: [],
      });
    case SET_POST_LOADING:
      return Object.assign({}, state, {
        isLoading: action.payload,
      });
    default:
      return state;
  }
}

export default postReducer;
