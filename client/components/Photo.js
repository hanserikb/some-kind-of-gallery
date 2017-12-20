import React from 'react';
import { Link } from 'react-router-dom';
class Photo extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { photo } = this.props;
    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          <Link to={`view/${photo.id}`}>
            <img src={photo.display_src} alt={photo.caption}/>
          </Link>
        </div>
      </figure>
    )
  }
}

export default Photo;