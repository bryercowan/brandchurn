import React from 'react';
import { 
  Building2, 
  MessageSquarePlus, 
  TrendingUp, 
  Users,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Building2, label: 'Active Businesses', value: '3' },
    { icon: MessageSquarePlus, label: 'Content Pieces', value: '24' },
    { icon: Users, label: 'Total Followers', value: '12.4K' },
    { icon: Activity, label: 'Engagement Rate', value: '4.2%' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <stat.icon className="w-8 h-8 text-blue-500" />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Content</h2>
            <TrendingUp className="w-5 h-5 text-green-500" />
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">Social Media Post #{index + 1}</p>
                  <p className="text-sm text-gray-600">Scheduled for tomorrow</p>
                </div>
                <span className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                  Scheduled
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Platform Performance</h2>
            <Activity className="w-5 h-5 text-blue-500" />
          </div>
          <div className="space-y-4">
            {['Instagram', 'X', 'LinkedIn'].map((platform, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{platform}</p>
                  <p className="text-sm text-gray-600">+2.4% engagement this week</p>
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded">
                  {/* Placeholder for mini chart */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;