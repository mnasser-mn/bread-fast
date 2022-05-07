import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { NotFound } from './components/not-found';
import { PostDetails } from './components/post-details';

function AppRouter() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/posts/:id' element={<PostDetails/>}/>
      <Route path='/posts' element={<Home/>} />
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRouter;
