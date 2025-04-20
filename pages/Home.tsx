import React, { useState } from 'react';
import { Dropzone } from '../components/Dropzone';
import { PdfViewer } from '../components/PdfViewer';
import { Loader } from '../components/Loader';
import { uploadPagesDocument } from '../utils/api';

const Home: React.FC = () => {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleFileUpload = async (file: File) => {
        setLoading(true);
        try {
            const response = await uploadPagesDocument(file); // Upload file to backend
            const pdfBlobUrl = URL.createObjectURL(response); // Create an object URL from the Blob
            setPdfUrl(pdfBlobUrl); // Set the PDF URL from the Blob
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        
        <div 
            className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Upload .pages Document</h1>
            <Dropzone onFileUpload={handleFileUpload} />
            {loading && <Loader />}
            {pdfUrl && <PdfViewer pdfUrl={pdfUrl} />}
        </div>
    );
};

export default Home;