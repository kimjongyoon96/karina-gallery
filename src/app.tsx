// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header'; // Header 컴포넌트 임포트
import Menubar from './components/menubar/menubar';
import MainContens from './components/maincontens/maincontens';
import SeachBar from './components/seachbar/seachbar';
import Number from './components/movepage/movepage';
import SecondMain from './components/secondmain/secondmain';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Menubar />
        <Routes>
          <Route path="/" element={<MainContens />} />
          <Route path="/contact" element={<SecondMain />} />
        </Routes>
        <SeachBar />
        <Number />
      </div>
    </Router>
  );
};

export default App;
