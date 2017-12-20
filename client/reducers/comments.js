import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actions';

const CommentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      const { code, author, comment } = action.payload;
      const newState = Object.assign({}, state);
      newState[code] = [
        ...newState[code] || [],
        {
          user: author,
          text: comment
        }
      ]
      return newState;
    case REMOVE_COMMENT:
      return state.filter((p, i) => i !== action.payload.index);
    default:
      return state
  }
};

export default CommentReducer;