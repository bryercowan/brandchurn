import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Building2, 
  MessageSquarePlus, 
  Share2, 
  TrendingUp,
  Settings
} from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Building2, label: 'Businesses', path: '/businesses' },
    { icon: MessageSquarePlus, label: 'Content Creation', path: '/content' },
    { icon: Share2, label: 'Social Manager', path: '/social' },
    { icon: TrendingUp, label: 'Analytics', path: '/analytics' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">BrandChurn</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors ${
                isActive ? 'bg-gray-50 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;