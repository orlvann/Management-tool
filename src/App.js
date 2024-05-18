import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import TaskListPage from './pages/TaskListPage';
import CollaborationPage from './pages/CollaborationPage';
import WhiteBoardPage from './pages/WhiteBoardPage';
import CalendarPage from './pages/CalendarPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tasks' element={<TaskListPage />} />
        <Route path='/collaboration' element={<CollaborationPage />} />
        <Route path='/whiteboard' element={<WhiteBoardPage />} />
        <Route path='/calendar' component={CalendarPage} />
      </Routes>
    </Router>
  );
}

export default App;
