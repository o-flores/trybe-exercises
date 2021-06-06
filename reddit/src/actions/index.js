import redditAPI from '../services/redditAPI'

export const GET_REDDIT_POSTS = 'GET_REDDIT_POSTS';
export const GET_REDDIT_POSTS_SUCCESS = 'GET_REDDIT_POSTS_SUCCESS';
export const GET_REDDIT_POSTS_ERROR = 'GET_REDDIT_POSTS_ERROR';

export const getRedditPosts = () => ({
  type: GET_REDDIT_POSTS,
});

export const getRedditPostsSuccess = (payload) => ({
  type: GET_REDDIT_POSTS_SUCCESS,
  payload,
});

export const getRedditPostsError = (payload) => ({
  type: GET_REDDIT_POSTS_ERROR,
  payload,
})

export const getRedditPostsThunk = (text) => async (dispatch) => {
  dispatch(getRedditPosts());
  try {
    const data = await redditAPI(text);
    dispatch(getRedditPostsSuccess(data));
  }
  catch(error) {
    dispatch(getRedditPostsError(error))
  }
}
