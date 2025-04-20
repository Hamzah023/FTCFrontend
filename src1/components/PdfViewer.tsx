import React from 'react';
import { Document, Page } from 'react-pdf';
import { Button } from '@mantine/core';
import { pdfjs } from 'react-pdf';

// Set the worker file for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PdfViewerProps {
    pdfUrl: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {

    console.log('PDF URL:', pdfUrl); // Debugging line to check the URL

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'document.pdf';
        link.click();
    };

    return (
        <div className="flex flex-col items-center">
            <div className="w-full max-w-4xl">
                <Document file={pdfUrl}>
                    <Page pageNumber={1} />
                </Document>
                <Button onClick={handleDownload} className="mt-4">
                    Download PDF
                </Button>
            </div>
        </div>
    );
};

export default PdfViewer;