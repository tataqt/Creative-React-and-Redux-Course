import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setCurrentSong } = props;

    const playSongHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const dragHandler = e => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    }

    const getTime = time => {
        const minutes = Math.floor(time / 60);
        const seconds = String(Math.floor(time % 60)).padStart(2, "0");
        return `${minutes}:${seconds}`;
    }

    const skipTrackHandler = direction => {
        let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        if (direction === 'skip-forward') {
            setCurrentSong(songs[(currentIndex + 1) % songs.length]);
        } else if (direction === 'skip-back') {
            if (currentIndex === 0) {
                setCurrentSong(songs[songs.length - 1]);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
    }

    return (
        <div className='player-container'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" onChange={dragHandler} />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} onClick={() => skipTrackHandler('skip-back')} />
                <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause : faPlay} onClick={playSongHandler} />
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} onClick={() => skipTrackHandler('skip-forward')} />
            </div>
        </div>

    );
};

export default Player;