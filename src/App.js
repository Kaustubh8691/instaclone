import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import PostViewer from './Postviewer/PostViewer';
import Form from './Component/Form';
const App=()=> {
  return (
    <BrowserRouter>
    <div className='wrapper'>
    <Routes>
      <Route path='*' element={<PostViewer/>}/>
      <Route path='/landpage' element={<LandingPage/>}/>
      <Route path='/form' element={<Form/>}/>
    </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
