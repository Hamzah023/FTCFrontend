import React from 'react';

export const Loader: React.FC = () => {
    return (
        <div className="flex items-center justify-center h-full">
            <div className="loader"></div>
            <p className="mt-4">Loading your PDF, please wait...</p>
        </div>
    );
};

export default Loader;