import { INCREMENT_LIKES, DECREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from './actions';

function addPost() {
  return {
    type: ADD_POST
  }
}

function removePost(id) {
  return {
    type: REMOVE_POST,
    payload: {
      id
    }
  }
}

function incrementLikes(id) {
  return {
    type: INCREMENT_LIKES,
    payload: {
      id
    }
  }
}

function decrementLikes(id) {
  return {
    type: DECREMENT_LIKES,
    payoad: id
  }
}

function addComment(code, author, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      code,
      author,
      comment
    }
  }
}

function removeComment(code, index) {
  return {
    type: REMOVE_COMMENT,
    payload: {
      code,
      index
    }
  }
}

export { incrementLikes, decrementLikes, addComment, removeComment };