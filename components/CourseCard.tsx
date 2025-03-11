import React from 'react';
import Link from 'next/link';

interface CourseCardProps {
  title: string;
  description: string;
  level: 'Anfänger' | 'Mittel' | 'Fortgeschritten';
  lessons: number;
  id?: number;
  available?: boolean;
}

export default function CourseCard({ 
  title, 
  description, 
  level, 
  lessons, 
  id = 1, 
  available = false 
}: CourseCardProps) {
  // Nur der Kurs mit ID 1 (Grundlagen der IT-Sicherheit) ist verfügbar
  const isAvailable = id === 1 || available;

  const getLevelColor = () => {
    switch (level) {
      case 'Anfänger':
        return isAvailable 
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
          : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';
      case 'Mittel':
        return isAvailable
          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
          : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';
      case 'Fortgeschritten':
        return isAvailable
          ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300'
          : 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';
      default:
        return 'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  return (
    <div className={`glass p-6 rounded-xl ${isAvailable ? 'hover-lift' : 'opacity-70'} h-full flex flex-col`}>
      <h3 className={`text-xl font-bold mb-2 ${!isAvailable && 'text-gray-500 dark:text-gray-400'}`}>{title}</h3>
      <p className={`${isAvailable ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500 dark:text-gray-400'} mb-4 flex-grow`}>
        {description}
      </p>
      
      <div className="flex justify-between items-center mt-4">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${getLevelColor()}`}>
          {level}
        </span>
        <span className={`text-sm ${isAvailable ? 'text-gray-600 dark:text-gray-400' : 'text-gray-500 dark:text-gray-500'} flex items-center`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          {lessons} Lektionen
        </span>
      </div>
      
      {isAvailable ? (
        <Link href={`/kurse/${id}`}>
          <button className="mt-6 w-full px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all">
            Kurs starten
          </button>
        </Link>
      ) : (
        <button 
          className="mt-6 w-full px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-lg cursor-not-allowed"
          disabled
        >
          Demnächst verfügbar
        </button>
      )}
    </div>
  );
}