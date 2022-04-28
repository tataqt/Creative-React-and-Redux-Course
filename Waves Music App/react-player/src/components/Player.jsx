import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);
    const [songInfo, setSongInfo] = useState({ currentTime: 0, duration: 0 });

    const playSongHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying);
    }

    const timeUpdateHandler = e => {
        const currentTime = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime, duration });
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

    return (
        <div className='player-container'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragHandler} />
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon className='play' size='2x' icon={isPlaying ? faPause : faPlay} onClick={playSongHandler} />
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} onChange={dragHandler} src={currentSong.audio} ref={audioRef} />
        </div>

    );
};

export default Player;