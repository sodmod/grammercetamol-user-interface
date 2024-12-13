// PDF thumbnail component
import {useEffect, useRef} from "react";
import { pdfjs } from 'react-pdf';
import PropTypes from "prop-types";

const PdfThumbnail = ({ pdfUrl }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const fetchPdfThumbnail = async () => {
      const pdf = await pdfjs.getDocument(pdfUrl).promise;
      const page = await pdf.getPage(1); // Get the first page
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 0.2 }); // Adjust scale for thumbnail size

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      await page.render({ canvasContext: context, viewport }).promise;
    };

    fetchPdfThumbnail();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} style={{ width: '100px', height: '100px' }} />;
};

PdfThumbnail.propTypes = {
  pdfUrl: PropTypes.string.isRequired, // Define 'pdfUrl' as a required string prop
};

export default PdfThumbnail
