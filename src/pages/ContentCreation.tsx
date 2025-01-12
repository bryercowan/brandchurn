import React, { useState } from 'react';
import { MessageSquarePlus, Upload, Video, AlertCircle, Loader2 } from 'lucide-react';

const ContentCreation = () => {
  const [step, setStep] = useState<'input' | 'processing' | 'complete'>('input');
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    script: '',
    avatar: 'anna',
    voice: 'en-US-1',
    title: '',
    platform: 'all',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setStep('processing');

    // Simulate video creation process
    setTimeout(() => {
      setStep('complete');
    }, 3000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Content Creation</h1>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {step === 'input' && (
        <div className="bg-white rounded-lg shadow p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter a title for your content"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Script
              </label>
              <textarea
                value={formData.script}
                onChange={(e) => setFormData({ ...formData, script: e.target.value })}
                className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your video script here..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Avatar
                </label>
                <select
                  value={formData.avatar}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="anna">Anna</option>
                  <option value="john">John</option>
                  <option value="marcus">Marcus</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Voice
                </label>
                <select
                  value={formData.voice}
                  onChange={(e) => setFormData({ ...formData, voice: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="en-US-1">English (US) - Female</option>
                  <option value="en-US-2">English (US) - Male</option>
                  <option value="en-GB-1">English (UK) - Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Platform
                </label>
                <select
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Platforms</option>
                  <option value="instagram">Instagram</option>
                  <option value="x">X</option>
                  <option value="linkedin">LinkedIn</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <Video className="w-5 h-5 mr-2" />
                Create Video
              </button>
            </div>
          </form>
        </div>
      )}

      {step === 'processing' && (
        <div className="bg-white rounded-lg shadow p-12">
          <div className="text-center">
            <Loader2 className="w-12 h-12 mx-auto text-blue-500 animate-spin mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Creating Your Video</h3>
            <p className="text-gray-500">This may take a few minutes...</p>
          </div>
        </div>
      )}

      {step === 'complete' && (
        <div className="bg-white rounded-lg shadow p-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Video Created Successfully!</h3>
            <p className="text-gray-500 mb-6">Your video is ready to be shared</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setStep('input')}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Create Another
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                View Video
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentCreation;