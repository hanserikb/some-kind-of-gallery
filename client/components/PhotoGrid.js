import React from 'react';
import { Link } from 'react-router-dom';
class PhotoGrid extends React.Component {
  render() {
    return (
      <div className="photo-grid">
        Photogrid here!
        <div><Link to="/single">Go to single</Link></div>
      </div>
    );
  }
};

export default PhotoGrid;