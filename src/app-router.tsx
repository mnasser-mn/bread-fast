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
      <Route path={`${process.env.PUBLIC_URL}/posts/:id`} element={<PostDetails/>}/>
      <Route path={`${process.env.PUBLIC_URL}/posts`} element={<Home/>} />
      <Route path={`${process.env.PUBLIC_URL}/`} element={ <Navigate to={`${process.env.PUBLIC_URL}/posts`} />} />
      <Route path={`${process.env.PUBLIC_URL}/*`} element={<NotFound/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default AppRouter;