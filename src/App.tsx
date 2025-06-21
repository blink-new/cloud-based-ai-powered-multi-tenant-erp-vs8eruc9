import { useState } from 'react'
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CRM from './pages/CRM';
import Financial from './pages/Financial';
import HR from './pages/HR';
import Inventory from './pages/Inventory';
import POS from './pages/POS';
import Manufacturing from './pages/Manufacturing';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import { ThemeProvider } from 'next-themes';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  // Feature toggles (simulate provider control)
  const features = {
    dashboard: true,
    crm: true,
    hr: true,
    inventory: true,
    pos: false, // Example: POS disabled
    financial: true,
    manufacturing: false, // Example: Manufacturing disabled
    projects: true,
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <Layout user={user} onLogout={() => setUser(null)} features={features}>
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/crm" element={<CRM />} />
            <Route path="/financial" element={<Financial />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/pos" element={<POS />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;