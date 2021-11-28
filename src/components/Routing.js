import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Todopage from '../pages/Todopage';
import NotFoundpage from '../pages/NotFoundpage';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/todos" element={<Todopage />} />
      <Route exact path="*" element={<NotFoundpage />} />
    </Routes>
  );
};

export default Routing;