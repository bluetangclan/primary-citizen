import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import './App.css';

// Home component
const Home: React.FC = () => (
  <div className="max-w-4xl mx-auto p-8">
    <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Primary Citizen</h1>
    <p className="text-lg text-gray-700 mb-4">
      Your guide for keeping up with local, state, and national elected representatives in your precinct. Stay informed about your local government, 
      elected officials, and upcoming elections.
    </p>
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mt-8">
      <h2 className="text-xl font-semibold text-blue-800 mb-2">Getting Started</h2>
      <p className="text-blue-700">
        This is a development version of Primary Citizen. Navigate to the About page 
        to learn more about the project's mission and features.
      </p>
    </div>
  </div>
);

//tailwind test
<div className="bg-blue-500 text-white p-4 rounded-lg m-4">
  Testing Tailwind CSS v4 - this should be blue!
</div>

const App: React.FC = () => {
  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
        <nav className="bg-blue-600 text-white p-4 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Primary Citizen</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline px-3 py-2 rounded hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link to="/about" className="hover:underline px-3 py-2 rounded hover:bg-blue-700 transition-colors">
                About
              </Link>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;