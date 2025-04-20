import { pdfjs } from 'react-pdf';

// Ensure PDF worker is loaded
if (typeof window !== 'undefined' && !pdfjs.GlobalWorkerOptions.workerSrc) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
}

export const loadPdfWorker = async () => {
  try {
    await pdfjs.getDocument('/documents/resume.pdf').promise;
    return true;
  } catch (error) {
    console.error('Error loading PDF worker:', error);
    return false;
  }
}; 