import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../actions/actionCreators';

class Photo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { photo, comments } = this.props;
    console.log(comments)
    const countComments = () => {
      return comments ? Object.keys(comments).length : 0;
    };

    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${photo.key}`}>
            <img src={photo.display_src} alt={photo.caption} className="grid-photo"/>
          </Link>
          <span
            className="likes-heart"
          >{photo.likes}</span>

          <figcaption>
            <p>{photo.caption}</p>
            <div className="control-buttons">
              <button onClick={() => this.props.incrementLike(photo.key)} className="likes">&hearts; {photo.likes}</button>
              <Link className="button" to={`/view/${photo.code}`}>
                <span className="comment-count">
                  <span className="speech-bubble"></span>
                  {countComments()}
                </span>
              </Link>
            </div>
          </figcaption>
        </div>
      </figure>
    )
  }
}

Photo.propTypes = {
  comments: PropTypes.object,
  photo: PropTypes.object
}

export default connect()(Photo);