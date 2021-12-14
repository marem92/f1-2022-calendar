import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './TrackList.scss';
import Card from '../card/Card';

const TrackList = () => {
  const [tracks, setTracks] = useState([]);

  const getTracks = async () => {
    const response = await axios.get(
      'https://f1-api-marem92.herokuapp.com/tracks'
    );
    setTracks(response.data);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="track-list">
      {tracks.map(track => (
        <Card key={track.id} track={track} />
      ))}
    </div>
  );
};

export default TrackList;

// <img key={track.id} alt="track" src={track.coverUrl} />
