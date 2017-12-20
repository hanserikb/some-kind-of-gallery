import { INCREMENT_LIKES, DECREMENT_LIKES, ADD_COMMENT, REMOVE_COMMENT, ADD_POST, REMOVE_POST } from './actions';

function addPost() {
  return {
    type: ADD_POST
  }
}

function removePost(index) {
  return {
    type: REMOVE_POST,
    payload: {
      index
    }
  }
}

function incrementLikes(index) {
  return {
    type: INCREMENT_LIKES,
    payload: {
      index
    }
  }
}

function decrementLikes(index) {
  return {
    type: DECREMENT_LIKES,
    payoad: index
  }
}

function addComment(postId, author, comment) {
  return {
    type: ADD_COMMENT,
    payload: {
      author,
      comment
    }
  }
}

function removeComment() {
  return {
    type: REMOVE_COMMENT,
    payload: {
      index
    }
  }
}

export { incrementLikes, decrementLikes, addComment, removeComment };