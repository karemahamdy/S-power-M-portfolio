
import { AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <AlertTriangle className="w-24 h-24 text-yellow-500 mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button 
          onClick={() => window.location.href = '/'}
          className="bg-[#27265F] hover:bg-[#27265F] text-white font-bold py-2 px-4 rounded"
        >
          Go to Homepage
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;