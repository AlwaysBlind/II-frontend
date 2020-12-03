import './App.css';
import React, { useState } from 'react';
import NavbarHeader from './components/NavbarHeader';
import ClassifierComponent from './components/ClassifierComponent';
import TestCaseButton from './components/Dropzone/TestCaseButton';
import ImageList from './components/ImageList/ImageList';
import FileList from './components/Dropzone/FileList';
import RequestImagesButton from './components/RequestImagesButton'

function App() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  return (
    <div className='App'>
      <NavbarHeader />
      <div className='d-flex flex-row justify-content-center mt-5 pt-5'>
        <ClassifierComponent setFiles={setFiles} files={files} />
        <TestCaseButton className='pt-5' setFiles={setFiles} files={files} />
      </div>
      <div>
        <FileList files={files} />
        <RequestImagesButton files={files} setImages={setImages} />
        <ImageList images={images} />
      </div>
    </div >
  );

}




export default App;
