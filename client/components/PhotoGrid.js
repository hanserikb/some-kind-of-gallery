import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
class PhotoGrid extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="photo-grid">
        { posts.map(p => p.caption) }
        <div><Link to="/view/3">Go to single</Link></div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(PhotoGrid);