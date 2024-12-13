// inbuilt libraries
import PropTypes from "prop-types";
import {useEffect, useState} from 'react';

// custom components
import PdfThumbnail from "./pdf/PdfThumbnail.jsx";
import VideoThumbnail from "./video/VideoThumbnail.jsx";

// thumbnail wrapper component
const ThumbnailWrapper = ({url}) => {
  const [thumbnail, setThumbnail] = useState(null);

  // Create thumbnail based on file type
  useEffect(() => {
    const fileType = getFileType(url);
    switch(fileType) {
      case 'image':
        setThumbnail(<img src={url} alt="thumbnail" style={{width: '100px', height: '100px'}}/>);
        break;
      case 'video':
        setThumbnail(<VideoThumbnail videoUrl={url}/>);
        break;
      case 'pdf':
        setThumbnail(<PdfThumbnail pdfUrl={url}/>);
        break;
      default:
        setThumbnail(<div>Unsupported File Type</div>);
    }

  }, [url]);

  return <>{thumbnail}</>;
};


export default ThumbnailWrapper;

ThumbnailWrapper.propTypes = {
  url: PropTypes.string.isRequired,
}


// Detect type based on file extension or MIME type
const getFileType = (url) => {
  const fileExtension = url.split('.').pop().toLowerCase();
  const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
  const videoExtensions = ['mp4', 'webm', 'ogg'];
  const pdfExtension = 'pdf';

  if(imageExtensions.includes(fileExtension)) {
    return 'image';
  }else if(videoExtensions.includes(fileExtension)) {
    return 'video';
  }else if(fileExtension === pdfExtension) {
    return 'pdf';
  }
  return 'unknown';
};
