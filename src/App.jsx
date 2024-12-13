import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBar from "./search";
import TrackList from "./tracklist";
import MyPlaylist from "./playlist";

function App() {
  const [playlist, setPlaylist] = useState([]);

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
    const uriArray = playlist.map(track => track.uri);
    console.log('Saving Playlist:', uriArray); 
    setPlaylist([]);
  }

  return (
    <>
      <SearchBar />
      <TrackList onAdd={onAdd} />
      <MyPlaylist
        playlist={playlist}
        onRemove={handleRemove}
      />
      <button onClick={savePlaylist}>Save Playlist</button>
    </>
  );
}

export default App;
