import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);

    const playSongHandler = () => {
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
        setIsPlaying(!isPlaying)
    }

    return (
        <div className='player-container'>
            <div className="time-control">
                <p>Start time</p>
                <input type="range" />
                <p>End time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className='skip-back' size='2x' icon={faAngleLeft} />
                <FontAwesomeIcon className='play' size='2x' icon={faPlay} onClick={playSongHandler} />
                <FontAwesomeIcon className='skip-forward' size='2x' icon={faAngleRight} />
            </div>
            <audio src={currentSong.audio} ref={audioRef} />
        </div>

    );
};

export default Player;