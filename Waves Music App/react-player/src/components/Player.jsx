import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import { playAudio } from '../utils'


const Player = (props) => {
    const { currentSong, setCurrentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setSongs } = props;

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
                playAudio(isPlaying, audioRef);
                return;
            }
            setCurrentSong(songs[(currentIndex - 1) % songs.length]);
        }
        playAudio(isPlaying, audioRef);

    }

    useEffect(() => {
        const newSongs = songs.map((song) => {
            if (song.id === currentSong.id) {
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
        // eslint-disable-next-line
    }, [currentSong, songs]);


    return (
        <div className='player-container'>
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration || 0} value={songInfo.currentTime} type="range" onChange={dragHandler} />
                <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
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