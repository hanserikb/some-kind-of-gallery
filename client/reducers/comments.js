import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actions';

const CommentReducer = (state = [], action) => {
  switch (action) {
    case ADD_COMMENT:
      return [
        ...state,
        {
          name: action.payload.name
        }
      ];
    case REMOVE_COMMENT:
      return state.filter((p, i) => i !== action.payload.index);
    default:
      return state
  }
};

export default CommentReducer;