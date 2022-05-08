import React from 'react';
import './App.scss';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { PostDetails } from './components/PostDetails';

function AppRouter() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/posts/:id' element={<PostDetails/>}/>
      <Route path='/posts' element={<Home/>} />
      <Route path='/' element={ <Navigate to={'/posts'} />} />
      <Route path='*' element={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRouter;
