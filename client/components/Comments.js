import React from 'react';

class Comments extends React.Component {

  render() {
    const { comments } = this.props;

    const Comment = (comment, index) => (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    );

    return (
      <div className="comments">
        { comments.map(Comment) }
      </div>
    );
  }
}

export default Comments;