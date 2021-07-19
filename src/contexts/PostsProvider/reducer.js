import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      return { ...state, posts: action.posts, loading: false };
    }
    case types.POSTS_LOADING: {
      return { ...state, loading: true };
    }
  }

  console.log(`Action type not found ${action.type}`);
  return { ...state };
};
