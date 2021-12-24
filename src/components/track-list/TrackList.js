import React from 'react';
import './TrackList.scss';
import Card from '../card/Card';

const TrackList = ({ tracks, loading }) => {
  if (!loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="track-list">
      {tracks.map(track => (
        <Card key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;
