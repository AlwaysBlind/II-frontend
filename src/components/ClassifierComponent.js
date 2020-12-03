import React from 'react';
import VideoDropZone from './Dropzone/VideoDropZone';

const ClassifierComponent = ({ files, setFiles }) => {
    return (
        <div className="col-4">
            <VideoDropZone setFiles={setFiles} />
        </div>
    );
}

export default ClassifierComponent;