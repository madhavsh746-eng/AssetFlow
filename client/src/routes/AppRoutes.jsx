import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<h2 className="text-xl text-red-500 font-semibold">404 - Page Not Found</h2>} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
