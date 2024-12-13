// Video thumbnail component (similar to previous example)
import PropTypes from "prop-types";
import {useEffect, useRef} from "react";

//
const VideoThumbnail = ({ videoUrl }) => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const generateThumbnail = () => {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      // Capture thumbnail at 2 seconds
      video.currentTime = 100;
      // seek video
      video.onseeked = () => {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      };
    };

    generateThumbnail();
  }, [videoUrl]);

  return (
    <>
      <video ref={videoRef} src={videoUrl} style={{ display: 'none',width: "100%" }} />
      <canvas ref={canvasRef} style={{width: "100%", height: "200px"}} />
    </>
  );
};

export default VideoThumbnail

VideoThumbnail.propTypes={
  videoUrl: PropTypes.string.isRequired
}
