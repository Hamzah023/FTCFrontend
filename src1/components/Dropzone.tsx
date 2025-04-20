// filepath: /Users/hamzah/LocalDocuments/LocalProjects/frontendFTC/FileTypeConverterFrontend/src/components/Dropzone.tsx
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface DropzoneProps {
    onFileUpload: (file: File) => void; // Accepts a File instead of a pdfUrl
}

export const Dropzone: React.FC<DropzoneProps> = ({ onFileUpload }) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file && file.type === 'application/vnd.apple.pages') {
            onFileUpload(file); // Pass the file to the parent
        } else {
            alert('Please upload a valid .pages document.');
        }
    }, [onFileUpload]);

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} />
            <p>Drag and drop a .pages file here, or click to select one</p>
        </div>
    );
};