import { ADD_POST, REMOVE_POST, INCREMENT_LIKES } from '../actions/actions';

const PostReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          name: action.payload.name
        }
      ];
    case REMOVE_POST:
      return state.filter((p, i) => i !== action.payload.id);
    case INCREMENT_LIKES:
      return state.map(post => ({
        ...post,
        likes: post.id === action.payload.id ? post.likes + 1 : post.likes
      }));
    default:
      return state
  }
};

export default PostReducer;