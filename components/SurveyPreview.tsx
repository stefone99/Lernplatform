import React from 'react';

interface SurveyPreviewProps {
  title: string;
  description: string;
  active: boolean;
  questions: number;
}

export default function SurveyPreview({ title, description, active, questions }: SurveyPreviewProps) {
  return (
    <div className="glass p-6 rounded-xl hover-lift h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold">{title}</h3>
        {active ? (
          <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs px-2 py-1 rounded-full">
            Aktiv
          </span>
        ) : (
          <span className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 text-xs px-2 py-1 rounded-full">
            Demnächst
          </span>
        )}
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {questions} Fragen
        </span>
        
        <span className="text-sm text-gray-600 dark:text-gray-400">
          ca. {Math.round(questions * 1.5)} Minuten
        </span>
      </div>
      
      <button 
        className={`mt-6 w-full px-4 py-2 rounded-lg transition-all ${
          active 
            ? 'bg-primary-600 hover:bg-primary-700 text-white' 
            : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed'
        }`}
        disabled={!active}
      >
        {active ? 'Umfrage starten' : 'Demnächst verfügbar'}
      </button>
    </div>
  );
}