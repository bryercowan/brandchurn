import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import { LogIn, Linkedin, Twitter, Mail } from 'lucide-react';

const Login = () => {
  const { signIn, loading, error } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();

  const handleOAuthLogin = async (provider: 'linkedin' | 'twitter' | 'google') => {
    await signIn(provider);
    const from = (location.state as any)?.from || '/';
    navigate(from);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <LogIn className="w-12 h-12 text-blue-500" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to BrandChurn
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Rapid content creation and distribution
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <button
              onClick={() => handleOAuthLogin('linkedin')}
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Continue with LinkedIn
            </button>

            <button
              onClick={() => handleOAuthLogin('twitter')}
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-sky-500 text-sky-500 rounded-md hover:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 disabled:opacity-50"
            >
              <Twitter className="w-5 h-5 mr-2" />
              Continue with X (Twitter)
            </button>

            <button
              onClick={() => handleOAuthLogin('google')}
              disabled={loading}
              className="w-full flex justify-center items-center px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
            >
              <Mail className="w-5 h-5 mr-2" />
              Continue with Google
            </button>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Free tier includes
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                <span className="ml-2">Connect 2 social accounts</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                <span className="ml-2">10 minutes of video content</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <span className="flex-shrink-0 h-5 w-5 text-green-500">✓</span>
                <span className="ml-2">30 days analytics retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;