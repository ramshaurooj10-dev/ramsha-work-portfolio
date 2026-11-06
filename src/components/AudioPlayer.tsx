import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, ExternalLink } from 'lucide-react';
import { VoiceDemo } from '../types';

interface AudioPlayerProps {
  demo: VoiceDemo;
  activeTrackId: string | null;
  onPlayTrack: (id: string) => void;
  onOpenModal?: (demo: VoiceDemo) => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
  demo,
  activeTrackId,
  onPlayTrack,
  onOpenModal,
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Sync with global playing state: if another track is activated, pause this one
  useEffect(() => {
    if (activeTrackId !== demo.id && isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [activeTrackId, demo.id, isPlaying]);

  // Handle Play / Pause toggle
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      onPlayTrack(demo.id);
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setHasError(false);
          })
          .catch((err) => {
            console.warn('Audio play error, falling back:', err);
            setHasError(true);
            // Open modal preview if direct audio stream is CORS-blocked
            if (onOpenModal) {
              onOpenModal(demo);
            }
          });
      }
    }
  };

  // Time formatting
  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs < 0) return '0:00';
    const mins = Math.floor(secs / 60);
    const remainingSecs = Math.floor(secs % 60);
    return `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`;
  };

  // Seek bar change
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const targetTime = parseFloat(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
      setCurrentTime(targetTime);
    }
  };

  // Volume change
  const handleVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
      audioRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const newMute = !isMuted;
    setIsMuted(newMute);
    audioRef.current.muted = newMute;
  };

  // Derive audio src URL (local file path if present, or direct drive stream URL)
  const primaryAudioSrc = demo.fileName ? `/audio/${demo.fileName}` : demo.audioUrl;

  return (
    <div className="w-full bg-slate-950/90 rounded-xl p-3 border border-slate-800/80 hover:border-violet-500/40 transition-colors">
      <audio
        ref={audioRef}
        src={primaryAudioSrc}
        preload="metadata"
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onTimeUpdate={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        onError={() => {
          setHasError(true);
        }}
      />

      <div className="flex flex-col gap-2">
        {/* Controls Row */}
        <div className="flex items-center justify-between gap-3">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-md flex-shrink-0 ${
              isPlaying
                ? 'bg-gradient-to-br from-violet-500 to-indigo-600 text-white ring-2 ring-violet-400/50 scale-105'
                : 'bg-slate-900 hover:bg-slate-800 text-violet-400 hover:text-white border border-slate-800'
            }`}
            title={isPlaying ? 'Pause' : 'Play Voice Sample'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          {/* Time & Progress */}
          <div className="flex-1 flex flex-col gap-1 min-w-0">
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span className="font-semibold text-cyan-300">
                {isPlaying ? formatTime(currentTime) : formatTime(currentTime || duration)}
              </span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Seek Range Bar */}
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-violet-500 focus:outline-none"
            />
          </div>

          {/* Volume Control */}
          <div className="hidden sm:flex items-center space-x-1.5">
            <button
              type="button"
              onClick={toggleMute}
              className="p-1.5 text-slate-400 hover:text-violet-300 transition-colors"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-3.5 h-3.5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5" />
              )}
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-14 h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
            />
          </div>
        </div>

        {/* Status / Fallback Notice */}
        <div className="flex items-center justify-between text-[10px] font-mono pt-1 text-slate-400 border-t border-slate-900">
          <span className="inline-flex items-center space-x-1 text-cyan-400/90 font-medium">
            <Sparkles className="w-3 h-3 text-violet-400" />
            <span>Real Human Voice</span>
          </span>

          {demo.fileName && (
            <span className="text-[10px] text-slate-500 truncate max-w-[140px]" title={demo.fileName}>
              {demo.fileName}
            </span>
          )}

          {onOpenModal && (
            <button
              type="button"
              onClick={() => onOpenModal(demo)}
              className="text-violet-300 hover:text-white hover:underline flex items-center space-x-1"
            >
              <span>Drive Player</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
