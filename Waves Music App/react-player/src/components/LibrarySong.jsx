import React from 'react';
import { playAudio } from '../utils';

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {
    const songSelectHandler = async () => {
        await setCurrentSong(song);
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true
                }
            } else {
                return {
                    ...song,
                    active: false
                }
            }
        })

        setSongs(newSongs);

        playAudio(isPlaying, audioRef);
    }

    return (
        <div className={`library-song ${song.active ? 'selected' : ''}`} onClick={songSelectHandler}>
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>

    );
};

export default LibrarySong;