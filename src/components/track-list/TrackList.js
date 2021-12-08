import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './TrackList.scss';

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
    <div>
      {tracks.map(track => (
        <div key={track.id}>{track.name}</div>
      ))}
    </div>
  );
};

export default TrackList;
