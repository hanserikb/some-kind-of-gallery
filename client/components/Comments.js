import React from 'react';

class Comments extends React.Component {

  constructor(props) {
    super(props);
    this.submitComment = this.submitComment.bind(this);
  }


  submitComment(e) {
    e.preventDefault();
    const author = this.authorRef.value;
    const comment = this.commentRef.value;
    this.props.onSubmit(
      author,
      comment
    )

    this.authorRef.value = '';
    this.commentRef.value = '';
  }

  render() {
    const comments = Object.keys(this.props.comments).map(k => {
      return {
        ...this.props.comments[k],
        key: k
      }
    }).sort((p, c) => p.timestamp > c.timestamp);

    const Comment = (comment, index) => (
      <div key={index} className="comment">
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment" onClick={this.props.removeComment.bind(null, comment.key)} >&times;</button>
        </p>
      </div>
    );

    return (
      <div className="comments">
        { comments.map(Comment) }
        <form onSubmit={this.submitComment} className="comment-form">
          <input ref={i => this.authorRef = i} type="text" placeholder="Author"/>
          <input ref={i => this.commentRef = i} type="text" placeholder="Comment" />
          <input type="submit" hidden/>
        </form>
      </div>
    );
  }
}

Comments.defaultProps = {
  comments: {}
};

export default Comments;