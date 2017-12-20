import { ADD_POST, REMOVE_POST } from '../actions/actions';

const PostsReducer = (state = [], action) => {
  switch (action) {
    case ADD_POST:
      return [
        ...state,
        {
          name: action.payload.name
        }
      ];
    case REMOVE_POST:
      return state.filter((p, i) => i !== action.payload.index);
    default:
      return state
  }
};

export default PostsReducer;