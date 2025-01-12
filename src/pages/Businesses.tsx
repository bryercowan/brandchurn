import React from 'react';
import { Building2, Plus } from 'lucide-react';
import type { Business } from '../types';

const Businesses = () => {
  const businesses: Business[] = []; // Will be populated with real data later

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Businesses</h1>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          <Plus className="w-5 h-5 mr-2" />
          Add Business
        </button>
      </div>

      {businesses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <Building2 className="w-12 h-12 mx-auto text-gray-400 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No businesses yet</h3>
          <p className="text-gray-500">Add your first business to get started</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Business cards will go here */}
        </div>
      )}
    </div>
  );
};

export default Businesses;