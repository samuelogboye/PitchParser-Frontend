import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ScrollText, Zap } from 'lucide-react';
// import { FileUpload, ScrollText, Zap } from 'lucide-react';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ScrollText className="h-8 w-8 text-indigo-600" />
            <span className="text-2xl font-bold text-gray-800">PitchParser</span>
          </div>
          <button
            onClick={() => navigate('/login')}
            className="px-4 py-2 text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Login
          </button>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Transform Your Pitch Decks into
            <span className="text-indigo-600"> Actionable Insights</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            Upload your pitch decks and let our AI-powered platform analyze and extract key information,
            making your decision-making process faster and more efficient.
          </p>
          <button
            onClick={() => navigate('/signup')}
            className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium text-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-24">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            {/* <FileUpload className="h-12 w-12 text-indigo-600 mb-6" /> */}
            <h3 className="text-xl font-semibold mb-4">Easy Upload</h3>
            <p className="text-gray-600">
              Simply drag and drop your pitch decks. We support PDF and PowerPoint formats.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <Zap className="h-12 w-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Instant Analysis</h3>
            <p className="text-gray-600">
              Our advanced algorithms process your documents in seconds, extracting valuable insights.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <ScrollText className="h-12 w-12 text-indigo-600 mb-6" />
            <h3 className="text-xl font-semibold mb-4">Structured Data</h3>
            <p className="text-gray-600">
              Get organized, searchable content from your pitch decks in a clean table format.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage