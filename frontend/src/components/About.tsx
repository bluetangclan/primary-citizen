import React, { useState, useEffect } from 'react';
import axios from 'axios';

// TypeScript interfaces for type safety
interface AboutData {
  appName: string;
  version: string;
  description: string;
  mission: string;
  features: string[];
  contact: {
    email: string;
    github: string;
  };
  lastUpdated: string;
}

const About: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get<AboutData>('http://localhost:3001/api/about');
        setAboutData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load about information');
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!aboutData) return <div className="p-8">No data available</div>;

  return (
    <div className="max-w-4xl mx-auto p-8">
      
      <h1 className="text-4xl font-bold text-blue-600 mb-6">{aboutData.appName}</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{aboutData.mission}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">About This App</h2>
        <p className="text-gray-700 mb-4">{aboutData.description}</p>
        <p className="text-sm text-gray-500">Version: {aboutData.version}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
        <ul className="space-y-2">
          {aboutData.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact & Development</h2>
        <div className="space-y-2">
          <p><strong>Email:</strong> {aboutData.contact.email}</p>
          <p><strong>GitHub:</strong> 
            <a href={aboutData.contact.github} 
               className="text-blue-600 hover:underline ml-2"
               target="_blank" 
               rel="noopener noreferrer">
              View Source Code
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: {new Date(aboutData.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

export {};