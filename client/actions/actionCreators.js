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
      id
    }
  }
}

export { incrementLikes, decrementLikes, addComment, removeComment };