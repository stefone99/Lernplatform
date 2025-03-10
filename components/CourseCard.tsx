import React from 'react';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'Anfänger' | 'Mittel' | 'Fortgeschritten';
  lessons: number;
}

export default function CourseCard({ title, description, level, lessons }: CourseCardProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'Anfänger':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Mittel':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Fortgeschritten':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <div className="glass p-6 rounded-xl hover-lift h-full flex flex-col">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{description}</p>
      
      <div className="flex justify-between items-center mt-4">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${getLevelColor()}`}>
          {level}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {lessons} Lektionen
        </span>
      </div>
      
      <button className="mt-6 w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all">
        Kurs starten
      </button>
    </div>
  );
}