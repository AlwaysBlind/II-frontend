import './App.css';
import React, { useState } from 'react';
import NavbarHeader from './components/NavbarHeader';
import ClassifierComponent from './components/ClassifierComponent';
import TestCaseButton from './components/Dropzone/TestCaseButton';
import ImageList from './components/ImageList/ImageList';
import FileList from './components/Dropzone/FileList';
import RequestImagesButton from './components/RequestImagesButton'
import { Route, HashRouter, Switch } from 'react-router-dom';
import About from './components/About';

function App() {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  return (
    <div className='App'>
      <HashRouter basename="">
        <NavbarHeader />
        <Switch>
          <Route exact path='/' component={ClassifierPage} />
          <Route path='/about' component={About} />
          <Route exact path='*' component={ClassifierPage} />
        </Switch>
      </HashRouter>
    </div >
  );

  function ClassifierPage() {
    return (
      <div>
        <div className='d-flex flex-row justify-content-center mt-5 pt-5'>
          <ClassifierComponent setFiles={setFiles} files={files} />
          <TestCaseButton className='pt-5' setFiles={setFiles} files={files} />
        </div>
        <div>
          <FileList files={files} />
          <RequestImagesButton files={files} setImages={setImages} />
          <ImageList images={images} />
        </div>
      </div>
    )
  }


}




export default App;
