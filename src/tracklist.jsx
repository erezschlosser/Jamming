import React from "react";
import "./TrackList.css";

const tracks = [
  { id: "12345", name: "Yellow", artist: "Coldplay", album: "Parachutes", uri: 'spotify:track:6K4t31amVTZDgR3sKmwUJJ'},
  { id: "98765", name: "Hey Jude", artist: "The Beatles", album: "B", uri: 'spotify:track:3n3Ppam7vgaVa1iaRUc9Lp'},
  { id: "33333", name: "Stan", artist: "Eminem", album: "M", uri: 'spotify:track:1jJci4qxiYcOHhQR247rEU'},
  { id: "88888", name: "Alejandro", artist: "Lady Gaga", album: "Fame", uri: 'spotify:track:4aWmUDTfIPGksMNLV2rQP2'},
];

export default function TrackList({ onAdd }) {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <div key={track.id} className="track-item">
          <div className="track-name">{track.name}</div>
          <div className="track-artist">{track.artist}</div>
          <div className="track-album">{track.album}</div>
          <button onClick={() => onAdd(track)}>Add to Playlist</button>
        </div>
      ))}
    </div>
  );
}


