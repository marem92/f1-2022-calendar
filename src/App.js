import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import TrackList from './components/track-list/TrackList';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTracks = async () => {
    const response = await axios.get(
      'https://f1-api-marem92.herokuapp.com/tracks'
    );
    setLoading(true);
    setTracks(response.data);
  };

  useEffect(() => {
    getTracks();
  }, []);

  return (
    <div className="App">
      <h1 className="header">F1 2022 CALENDAR</h1>
      <TrackList tracks={tracks} loading={loading} />
    </div>
  );
};

export default App;
