import { BarChart, Users, Briefcase, Package, ShoppingCart, DollarSign, Factory, ClipboardList } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome to your ERP Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard icon={Users} label="Customers" value="1,245" />
        <StatCard icon={Briefcase} label="Employees" value="87" />
        <StatCard icon={Package} label="Products" value="312" />
        <StatCard icon={ShoppingCart} label="Sales (YTD)" value="$1.2M" />
        <StatCard icon={DollarSign} label="Revenue" value="$2.8M" />
        <StatCard icon={Factory} label="Production Orders" value="54" />
      </div>
      <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6">
        <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
        <div className="flex flex-wrap gap-4">
          <QuickLink icon={Users} label="CRM" href="/crm" />
          <QuickLink icon={Briefcase} label="HR" href="/hr" />
          <QuickLink icon={Package} label="Inventory" href="/inventory" />
          <QuickLink icon={ShoppingCart} label="POS" href="/pos" />
          <QuickLink icon={DollarSign} label="Financial" href="/financial" />
          <QuickLink icon={Factory} label="Manufacturing" href="/manufacturing" />
          <QuickLink icon={ClipboardList} label="Projects" href="/projects" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-lg shadow p-6 flex items-center gap-4">
      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-300" />
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-slate-500 dark:text-slate-400 text-sm">{label}</div>
      </div>
    </div>
  );
}

function QuickLink({ icon: Icon, label, href }) {
  return (
    <a href={href} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded hover:bg-blue-50 dark:hover:bg-blue-900 transition font-medium">
      <Icon className="w-4 h-4 text-blue-600 dark:text-blue-300" />
      {label}
    </a>
  );
}
