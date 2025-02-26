"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
    src: string;
    className?: string;
}

export function VideoPlayer({ src, className = "" }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState("0 seconds");
    const [showPlayButton, setShowPlayButton] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleLoadedMetadata = () => {
            const totalSeconds = Math.floor(video.duration);
            setDuration(`${totalSeconds} seconds`);
            setIsLoaded(true);
        };

        // Add both loadedmetadata and loadeddata events for better compatibility
        video.addEventListener('loadedmetadata', handleLoadedMetadata);
        video.addEventListener('loadeddata', handleLoadedMetadata);
        
        // Force load metadata
        video.preload = "metadata";
        
        // If the video is already loaded, get duration immediately
        if (video.readyState >= 2) {
            handleLoadedMetadata();
        }
        
        return () => {
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            video.removeEventListener('loadeddata', handleLoadedMetadata);
        };
    }, []);

    const handlePlayClick = () => {
        if (!videoRef.current) return;
        videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
    };

    return (
        <div className={`relative group ${className}`}>
            <video
                ref={videoRef}
                className="w-full h-full rounded-lg"
                preload="metadata"
                controls={!showPlayButton}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => {
                    setIsPlaying(false);
                    setShowPlayButton(true);
                }}
            >
                <source src={src} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            {/* Initial play button overlay */}
            {showPlayButton && (
                <button
                    onClick={handlePlayClick}
                    className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 group-hover:bg-black/40 transition-colors"
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/90 group-hover:bg-white transition-colors">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-black ml-1" />
                        </div>
                        {isLoaded && <span className="text-white text-sm md:text-lg font-medium max-w-[90%] truncate">{duration}</span>}
                    </div>
                </button>
            )}
        </div>
    );
} 