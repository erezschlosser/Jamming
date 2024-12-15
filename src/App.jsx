import { useState } from "react";
import "./App.css";
import SearchBar from "./search";
import TrackList from "./tracklist";
import MyPlaylist from "./playlist";
import fetchYouTubeVideos from "./youtubeAPI";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [videos, setVideos] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchYouTubeVideos(query);
    setVideos(results);
  };

  const onAdd = (track) => {
    const checkExist = playlist.some((existingTrack) => existingTrack.id === track.id);

    if (!checkExist) {
      setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
    } else {
      alert("Track already in playlist");
    }
  };

  const handleRemove = (idToRemove) => {
    setPlaylist((prevPlaylist) =>
      prevPlaylist.filter((track) => track.id !== idToRemove)
    );
  };

  const savePlaylist = () => {
    const uriArray = playlist.map((track) => track.uri);
    console.log("Saving Playlist:", uriArray);
    setPlaylist([]);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <TrackList tracks={videos} onAdd={onAdd} />
      <MyPlaylist playlist={playlist} onRemove={handleRemove} />
      <button onClick={savePlaylist}>Save Playlist</button>
    </>
  );
}

export default App;