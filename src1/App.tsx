import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true, // Opt into startTransition behavior
        v7_relativeSplatPath: true, // Opt into relative splat path behavior
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
  );
};

export default App;