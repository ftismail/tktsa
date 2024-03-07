import React from 'react';

const VideoPlayer = ({src}) => {
    return (
        
        
                <div className="embed-responsive embed-responsive-16by9 w-100">
                <video controls className="embed-responsive-item w-100">
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            
    );
}

export default VideoPlayer;
