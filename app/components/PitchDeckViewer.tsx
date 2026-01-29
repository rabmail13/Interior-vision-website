'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure PDF.js worker
if (typeof window !== 'undefined') {
  pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
}

interface PitchDeckViewerProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

export default function PitchDeckViewer({ isOpen, onClose, pdfUrl }: PitchDeckViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [pageWidth, setPageWidth] = useState<number>(1200);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageWidth(Math.min(window.innerWidth * 0.9, 1200));
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onDocumentLoadError(error: Error) {
    console.error('Error loading PDF:', error);
    setLoading(false);
  }

  function goToPreviousPage() {
    setPageNumber(prevPage => Math.max(prevPage - 1, 1));
  }

  function goToNextPage() {
    setPageNumber(prevPage => Math.min(prevPage + 1, numPages));
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90"
      style={{ zIndex: 10000 }}
      onClick={onClose}
    >
      <div
        className="relative w-full h-full max-w-7xl max-h-screen p-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 text-white hover:text-gray-300 transition-colors"
          aria-label="Close pitch deck"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* PDF container */}
        <div className="flex-1 flex items-center justify-center overflow-auto">
          {loading && (
            <div className="text-white text-lg">Loading pitch deck...</div>
          )}

          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="text-white">Loading...</div>}
            error={<div className="text-red-400">Failed to load PDF. Please try again.</div>}
          >
            <Page
              pageNumber={pageNumber}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="shadow-2xl"
              width={pageWidth}
            />
          </Document>
        </div>

        {/* Navigation controls */}
        {!loading && numPages > 0 && (
          <div className="flex items-center justify-center gap-6 mt-6 pb-4">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Previous page"
            >
              Previous
            </button>

            <div className="text-white font-medium text-lg">
              Page {pageNumber} of {numPages}
            </div>

            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
