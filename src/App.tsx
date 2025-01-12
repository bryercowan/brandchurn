import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthGuard } from './components/AuthGuard';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Businesses from './pages/Businesses';
import ContentCreation from './pages/ContentCreation';
import SocialManager from './pages/SocialManager';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AuthGuard>
              <div className="flex min-h-screen bg-gray-50">
                <Sidebar />
                <main className="flex-1 ml-64 p-8">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/businesses" element={<Businesses />} />
                    <Route path="/content" element={<ContentCreation />} />
                    <Route path="/social" element={<SocialManager />} />
                    <Route path="/analytics" element={<Analytics />} />
                    <Route path="/settings" element={<Settings />} />
                  </Routes>
                </main>
              </div>
            </AuthGuard>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;