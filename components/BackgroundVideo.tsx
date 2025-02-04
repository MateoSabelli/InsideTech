import React from 'react';

const BackgroundVideo: React.FC = () => {
  return (
    <div className="video-background">
      {/* <video autoPlay muted loop id="background-video">
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="video-overlay"></div>
    </div>
  );
};

export default BackgroundVideo;