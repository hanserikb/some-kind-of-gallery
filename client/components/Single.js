import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Single extends React.Component {
  render() {
    const { post } = this.props;
    return (
      <div className="single-photo">
        { post.caption }
      </div>
    );
  }
};

function mapStateToProps(state, props) {
  return {
    post: state.posts.find(p => p.id === props.match.params.id)
  };
}

export default connect(mapStateToProps)(Single);