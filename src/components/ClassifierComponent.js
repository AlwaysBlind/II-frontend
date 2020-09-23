import React, { useState } from 'react';
import VideoDropZone from './Dropzone/VideoDropZone';
import RequestImagesButton from './RequestImagesButton'
import ImageList from './ImageList/ImageList';
import FileList from './Dropzone/FileList';

const ClassifierComponent = () => {
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([]);


    return (
        <div className="col-md-4">
            <VideoDropZone setFiles={setFiles} />
            <FileList files={files} />
            <RequestImagesButton files={files} setImages={setImages} />
            <ImageList images={images} />
        </div>
    );
}

export default ClassifierComponent;