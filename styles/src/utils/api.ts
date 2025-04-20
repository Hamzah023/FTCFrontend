import axios from 'axios';

const API_URL = 'http://your-backend-url/api/upload'; // Replace with your backend URL

export const uploadPagesDocument = async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(API_URL, formData, {
        responseType: 'blob', // Ensure the response is returned as a Blob
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    return response.data as Blob; // Return the Blob (PDF file)
};