import React from 'react';
import { TrendingUp } from 'lucide-react';

const Analytics = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-center py-8">
          <TrendingUp className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Analytics Overview</h3>
          <p className="text-gray-500 mb-4">Connect your accounts to view performance metrics</p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            View Reports
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;