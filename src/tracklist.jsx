import React from "react";
import PropTypes from "prop-types";
import "./TrackList.css";

export default function TrackList({ tracks, onAdd }) {
  return (
    <div>
      {tracks.length > 0 ? (
        tracks.map((track) => (
          <div key={track.id} className="track-item">
            <h3>{track.title}</h3>
            <p>Channel: {track.channel}</p>
            <button onClick={() => onAdd(track)}>Add to Playlist</button>
          </div>
        ))
      ) : (
        <p>No tracks found. Try searching for videos!</p>
      )}
    </div>
  );
}

TrackList.propTypes = {
  tracks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      channel: PropTypes.string.isRequired,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
};


