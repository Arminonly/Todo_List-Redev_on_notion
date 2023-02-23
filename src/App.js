import { Errorpage } from 'Pages/Auth/Errorpage';
import Registry from 'Pages/Auth/Registry';
import { SuccessPage } from 'Pages/Auth/SuccessPage';
import TodoPage from 'Pages/TodoPage/TodoPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/todopage" element={<TodoPage />} />
        <Route path="/registry" element={<Registry/>} />
        <Route path="/authSuccess" element={<SuccessPage/>} />
        <Route path="/authError" element={<Errorpage/>} />
      </Routes>
    </div>
  );
}

export default App;
