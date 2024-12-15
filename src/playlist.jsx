import React, { useState } from "react";
import PropTypes from "prop-types";
import "./playlist.css";

export default function MyPlaylist({ playlist, onRemove }) {
  const [playlistName, setPlaylistName] = useState("My Playlist");

  const handlePlaylistName = (e) => {
    setPlaylistName(e.target.value);
  };

  return (
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
        {playlist.length > 0 ? (
          playlist.map((track) => (
            <li key={track.id} className="track-item">
              {track.title} - {track.channel}
              <button
                onClick={() => onRemove(track.id)}
                className="remove-button"
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p>Your playlist is empty. Add some videos!</p>
        )}
      </ul>
    </div>
  );
}

MyPlaylist.propTypes = {
  playlist: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};