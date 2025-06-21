import { Link, useLocation } from 'react-router-dom';
import { LogOut, Settings, BarChart2, Users, Briefcase, Package, ShoppingCart, DollarSign, Factory, ClipboardList } from 'lucide-react';
import clsx from 'clsx';

const MODULES = [
  { key: 'dashboard', label: 'Dashboard', icon: BarChart2 },
  { key: 'crm', label: 'CRM', icon: Users },
  { key: 'hr', label: 'HR', icon: Briefcase },
  { key: 'inventory', label: 'Inventory', icon: Package },
  { key: 'pos', label: 'POS', icon: ShoppingCart },
  { key: 'financial', label: 'Financial', icon: DollarSign },
  { key: 'manufacturing', label: 'Manufacturing', icon: Factory },
  { key: 'projects', label: 'Projects', icon: ClipboardList },
];

export default function Layout({ user = { name: 'User' }, onLogout, children, features = {} }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#18181b] dark:to-[#23272f]">
      {/* Sidebar */}
      <aside className="w-64 bg-white/80 dark:bg-[#18181b]/90 border-r border-slate-200 dark:border-slate-800 flex flex-col py-6 px-4 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <img src="/vite.svg" alt="ERP" className="h-8 w-8" />
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">ERP System</span>
        </div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {MODULES.map(({ key, label, icon: Icon }) => {
              const enabled = features[key] !== false;
              const active = location.pathname.includes(key);
              return (
                <li key={key}>
                  <Link
                    to={enabled ? `/${key}` : '#'}
                    className={clsx(
                      'flex items-center gap-3 px-3 py-2 rounded-md font-medium transition',
                      active && enabled && 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400',
                      !enabled && 'opacity-50 cursor-not-allowed pointer-events-none',
                      'hover:bg-slate-100 dark:hover:bg-slate-800'
                    )}
                    title={enabled ? label : 'Contact provider to enable'}
                  >
                    <Icon className="w-5 h-5" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mt-8 flex flex-col gap-2">
          <Link to="/settings" className={clsx(
            'flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition',
            location.pathname === '/settings' && 'bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400')
          }>
            <Settings className="w-5 h-5" /> Settings
          </Link>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
        <div className="mt-8 text-xs text-slate-400 dark:text-slate-600">Logged in as <span className="font-semibold">{user.name}</span></div>
      </aside>
      {/* Main content */}
      <main className="flex-1 min-h-screen px-8 py-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
