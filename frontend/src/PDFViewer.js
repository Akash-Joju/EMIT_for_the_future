// PDFViewer.js
import React, { useEffect } from "react";
import pdfjsLib from "pdfjs-dist";

const PDFViewer = ({ pdfUrl }) => {
  useEffect(() => {
    // Get the viewer container element
    const viewerContainer = document.getElementById("pdf-viewer");

    // Initialize PDF.js
    pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
    pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
      // Render the first page
      pdf.getPage(1).then((page) => {
        const canvas = document.createElement("canvas");
        viewerContainer.appendChild(canvas);
        const context = canvas.getContext("2d");

        const viewport = page.getViewport({ scale: 1 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({ canvasContext: context, viewport: viewport });
      });
    });
  }, [pdfUrl]);

  return (
    <div id="pdf-viewer" style={{ width: "100%", height: "100%" }}>
      PDF Viewer Loading...
    </div>
  );
};

export default PDFViewer;
