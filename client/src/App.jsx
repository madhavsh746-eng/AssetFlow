import { Routes, Route, Navigate } from "react-router-dom";

import Login      from "./pages/Login";
import Dashboard  from "./pages/Dashboard";
import Assets     from "./pages/Assets";
import Users      from "./pages/Users";
import Bookings   from "./pages/Bookings";
import Maintenance from "./pages/Maintenance";
import Audit      from "./pages/Audit";
import Reports    from "./pages/Reports";
import Allocation from "./pages/Allocation";
import NotFound   from "./pages/NotFound";

import MainLayout     from "./layouts/MainLayout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Redirect root to dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      {/* Public route */}
      <Route path="/login" element={<Login />} />

      {/* Protected layout routes */}
      <Route element={
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      }>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/assets"     element={<Assets />} />
        <Route path="/allocation" element={<Allocation />} />
        <Route path="/bookings"   element={<Bookings />} />
        <Route path="/maintenance"element={<Maintenance />} />
        <Route path="/audit"      element={<Audit />} />
        <Route path="/reports"    element={<Reports />} />
        <Route path="/users"      element={<Users />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;