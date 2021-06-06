import { GET_REDDIT_POSTS, GET_REDDIT_POSTS_ERROR, GET_REDDIT_POSTS_SUCCESS } from '../actions/index';

const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: null,
}

const postsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_REDDIT_POSTS:
      return {
        ...state,
        loading: true,
      }
    case GET_REDDIT_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.data.children,
        loading: false,
      }
    case GET_REDDIT_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      }
    default:
      return state;
  }
}

export default postsReducer;
