import React, { useRef, useEffect } from 'react';

const VIDEO_URL =
  'https://res.cloudinary.com/fmhe1n0v/video/upload/v1791132580/motion_2.0-fast_smooth_ohwx_motion_360-degree_orbit_right_around_Smooth_OHWX_motion_with_a_cinem-0.mp4';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.playbackRate = 1.0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Video autoPlay was prevented by browser policy:', err);
        });
      }
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none select-none">
      <video
        ref={videoRef}
        src={VIDEO_URL}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
};
