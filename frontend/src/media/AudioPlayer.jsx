// src/components/AudioPlayer.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';

const AudioPlayer = ({ audioFile }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);


  // Get the audio file from public directory
  const audioPath = `${process.env.PUBLIC_URL}/audio/${audioFile}`;

  // Handle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update time as audio plays
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Set duration when metadata loads
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Handle progress bar change
  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  // Format time (seconds to MM:SS)
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <PlayerContainer>
      <HiddenAudio
        ref={audioRef}
        src={audioPath}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />
      
      <Controls>
        <PlayButton onClick={togglePlay}>
          {isPlaying ? (
            <FaPause size={16} color="#6e8efb" />
          ) : (
            <FaPlay size={16} color="#6e8efb" />
          )}
        </PlayButton>
        
        <TimeInfo>
          <Time>{formatTime(currentTime)}</Time>
          <ProgressBar
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
          />
          <Time>{formatTime(duration)}</Time>
        </TimeInfo>
        
        <VolumeControl>
          <FaVolumeUp size={18} color="white" />
          <VolumeSlider
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </VolumeControl>
      </Controls>
    </PlayerContainer>
  );
};

// Styled Components (same as before)
const PlayerContainer = styled.div`
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
`;

const HiddenAudio = styled.audio`
  display: none;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const PlayButton = styled.button`
  background: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    background: #f0f0f0;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

const TimeInfo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Time = styled.span`
  color: white;
  font-size: 14px;
  min-width: 40px;
  text-align: center;
  font-weight: 500;
`;

const ProgressBar = styled.input`
  flex: 1;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

const VolumeControl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VolumeSlider = styled.input`
  width: 80px;
  height: 6px;
  -webkit-appearance: none;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  outline: none;
  
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default AudioPlayer;