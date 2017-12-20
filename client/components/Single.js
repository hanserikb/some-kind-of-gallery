import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions/actionCreators';

class Single extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('rendering');
    const { post, incrementLike } = this.props;
    return (
      <div className="single-photo">
        { post.caption } { post.id } <button onClick={() => incrementLike(post.id)}>{post.likes}</button>
      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    post: state.posts.find(p => p.id === props.match.params.id)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementLike: function(id) {
      dispatch(incrementLikes(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);