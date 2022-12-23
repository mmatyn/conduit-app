import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './app/HomePage/HomePage';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from './app/LoginPage/LoginPage';
import { RegisterPage } from './app/RegisterPage/RegisterPage';
import { ArticlePage } from './app/ArticlePage/ArticlePage';
import { ProfilePage } from './app/ProfilePage/ProfilePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <HomePage/>}>
        </Route>
        <Route path='/login' element={
          <LoginPage/>}>
        </Route>
        <Route path='/register' element={
          <RegisterPage/>}>
        </Route>        
        <Route path='/article'>
          <Route path=':slug' element={
            <ArticlePage/>}>
          </Route>
        </Route> 
        <Route path='/profile'>
          <Route path=':username' element={
            <ProfilePage/>}>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
