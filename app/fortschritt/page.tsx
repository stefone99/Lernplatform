import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const ProgressChart = () => {
  const [activeChart, setActiveChart] = useState('bar');
  
  // Beispieldaten für Fortschritt
  const progressData = [
    { kategorie: 'Grundlagen', benutzer: 75, durchschnitt: 62 },
    { kategorie: 'Passwortsicherheit', benutzer: 85, durchschnitt: 70 },
    { kategorie: 'Phishing', benutzer: 60, durchschnitt: 55 },
    { kategorie: 'Netzwerksicherheit', benutzer: 40, durchschnitt: 45 },
    { kategorie: 'Datenschutz', benutzer: 70, durchschnitt: 58 }
  ];
  
  // Beispieldaten für den zeitlichen Verlauf
  const timeData = [
    { monat: 'Jan', fortschritt: 10 },
    { monat: 'Feb', fortschritt: 25 },
    { monat: 'Mär', fortschritt: 35 },
    { monat: 'Apr', fortschritt: 50 },
    { monat: 'Mai', fortschritt: 60 },
    { monat: 'Jun', fortschritt: 75 }
  ];
  
  // Übungsdaten
  const practiceData = [
    { name: 'Woche 1', richtig: 5, falsch: 8 },
    { name: 'Woche 2', richtig: 8, falsch: 6 },
    { name: 'Woche 3', richtig: 12, falsch: 5 },
    { name: 'Woche 4', richtig: 15, falsch: 3 }
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center mb-6 space-x-2">
        <button 
          onClick={() => setActiveChart('bar')} 
          className={`px-4 py-2 rounded-lg transition-all ${activeChart === 'bar' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          Kategorien
        </button>
        <button 
          onClick={() => setActiveChart('line')} 
          className={`px-4 py-2 rounded-lg transition-all ${activeChart === 'line' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          Zeitlicher Verlauf
        </button>
        <button 
          onClick={() => setActiveChart('radar')} 
          className={`px-4 py-2 rounded-lg transition-all ${activeChart === 'radar' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          Fähigkeitsprofil
        </button>
        <button 
          onClick={() => setActiveChart('practice')} 
          className={`px-4 py-2 rounded-lg transition-all ${activeChart === 'practice' ? 'bg-primary-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
        >
          Übungserfolg
        </button>
      </div>
      
      <div className="h-80 w-full">
        {activeChart === 'bar' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={progressData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="kategorie" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '0.5rem',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
              <Bar dataKey="benutzer" name="Dein Fortschritt" fill="#3b82f6" />
              <Bar dataKey="durchschnitt" name="Durchschnitt" fill="#93c5fd" />
            </BarChart>
          </ResponsiveContainer>
        )}
        
        {activeChart === 'line' && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={timeData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="monat" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '0.5rem',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="fortschritt" name="Lernfortschritt (%)" stroke="#8b5cf6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}
        
        {activeChart === 'radar' && (
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={90} data={progressData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="kategorie" />
              <PolarRadiusAxis angle={30} domain={[0, 100]} />
              <Radar name="Dein Profil" dataKey="benutzer" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
              <Radar name="Durchschnitt" dataKey="durchschnitt" stroke="#93c5fd" fill="#93c5fd" fillOpacity={0.6} />
              <Legend />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '0.5rem',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }} 
              />
            </RadarChart>
          </ResponsiveContainer>
        )}
        
        {activeChart === 'practice' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={practiceData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              stackOffset="sign"
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                  borderRadius: '0.5rem',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }} 
              />
              <Legend />
              <Bar dataKey="richtig" name="Richtige Antworten" fill="#10b981" />
              <Bar dataKey="falsch" name="Falsche Antworten" fill="#f87171" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-2">Dein Gesamtfortschritt: 68%</p>
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full max-w-md mx-auto">
          <div 
            className="h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" 
            style={{ width: '68%' }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;