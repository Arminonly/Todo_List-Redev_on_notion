import TodoPage from 'Pages/TodoPage/TodoPage';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import RegisterPage from './Pages/RegisterPage';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/todopage" element={<TodoPage />} />
      </Routes>
    </div>
  );
}

export default App;
