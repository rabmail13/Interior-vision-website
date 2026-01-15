'use client';

interface VideoPlayerProps {
  src: string;
  maxWidth?: string;
  maxHeight?: string;
}

export default function VideoPlayer({ src, maxWidth = '90%', maxHeight = '80%' }: VideoPlayerProps) {
  const handleClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <video
      src={src}
      style={{
        maxWidth,
        maxHeight,
        objectFit: 'contain',
        width: '100%',
        height: 'auto',
        backgroundColor: 'transparent'
      }}
      controls
      autoPlay
      loop
      muted
      onClick={handleClick}
      preload="metadata"
      playsInline
      onError={(e) => {
        console.error('Video error:', e);
        console.error('Video src:', src);
      }}
      onLoadedMetadata={() => {
        console.log('Video metadata loaded');
      }}
    />
  );
}
