import React from "react";
import { useState } from "react";
import "./playlist.css";

export default function MyPlaylist({ playlist, onRemove }) {
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
    <>
      <div className="playlist-container">
        <h2>
          <input
            type="text"
            value={playlistName}
            onChange={handlePlaylistName}
            placeholder="Enter playlist name"
            className="input"
          />
        </h2>
        <ul className="track-list">
          {playlist.map((track) => (
            <li key={track.id} className="track-item">
              {track.name} - {track.artist} ({track.album})
              <button
                onClick={() => onRemove(track.id)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
