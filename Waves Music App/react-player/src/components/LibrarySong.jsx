import React from 'react';

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef }) => {
    const songSelectHandler = () => {

        setCurrentSong(song);
        audioRef.current.play();
    }

    return (
        <div className='library-song' onClick={songSelectHandler}>
            <img alt={song.name} src={song.cover} />
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>

    );
};

export default LibrarySong;