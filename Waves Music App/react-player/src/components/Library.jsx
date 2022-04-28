import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong, audioRef }) => {
    return (
        <div className='library'>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => <LibrarySong
                    key={song.id}
                    id={song.id}
                    setCurrentSong={setCurrentSong}
                    song={song}
                    songs={songs}
                    audioRef={audioRef}
                />)}
            </div>
        </div>
    );
};

export default Library;