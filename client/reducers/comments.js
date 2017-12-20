import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/actions';

const CommentReducer = (state = {}, action = {}) => {
  let newState = Object.assign({}, state);
  switch (action.type) {
    case ADD_COMMENT:
      newState[action.payload.code] = [
        ...newState[action.payload.code] || [],
        {
          user: action.payload.author,
          text: action.payload.comment
        }
      ]
      return newState;
    case REMOVE_COMMENT:
      return {
        ...state,
        [action.payload.code]: state[action.payload.code].filter((c, i) => i !== action.payload.index)
      }
    default:
      return state
  }
};

export default CommentReducer;