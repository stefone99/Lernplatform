import React from 'react';
import Navbar from '@/components/Navbar';
import ProgressChart from '@/components/ProgressChart';

export default function ProgressPage() {
  // Beispieldaten für abgeschlossene Kurse (in einer echten Anwendung würden diese von einer API geladen)
  const completedCourses = [
    {
      id: 1,
      title: 'Grundlagen der IT-Sicherheit',
      progress: 100,
      completedAt: '12.02.2024'
    },
    {
      id: 2,
      title: 'Sichere Passwortverwaltung',
      progress: 100,
      completedAt: '28.02.2024'
    },
    {
      id: 3,
      title: 'Phishing-Angriffe erkennen',
      progress: 80,
      completedAt: null
    }
  ];

  // Beispieldaten für Badges (Auszeichnungen)
  const badges = [
    {
      id: 1,
      name: 'Passwort-Profi',
      description: 'Erfolgreich alle Lektionen zum Thema Passwortsicherheit abgeschlossen',
      icon: '🔐',
      earnedAt: '28.02.2024'
    },
    {
      id: 2,
      name: 'Sicherheits-Einsteiger',
      description: 'Erfolgreich deinen ersten Kurs abgeschlossen',
      icon: '🏅',
      earnedAt: '12.02.2024'
    },
    {
      id: 3,
      name: 'Quiz-Meister',
      description: 'In 5 Umfragen mehr als 90% richtige Antworten erreicht',
      icon: '🧠',
      earnedAt: '05.03.2024'
    }
  ];

  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Dein Lernfortschritt</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Verfolge deine Fortschritte, entdecke deine Stärken und arbeite an deinen Verbesserungspotenzialen.
            </p>
          </div>
        </div>
      </section>
      
      {/* Fortschrittsvisualisierung */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-6 rounded-2xl mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">Fortschrittsübersicht</h2>
            <ProgressChart />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="glass p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">68%</div>
                <h3 className="text-lg font-medium">Gesamtfortschritt</h3>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">2/8</div>
                <h3 className="text-lg font-medium">Abgeschlossene Kurse</h3>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5/12</div>
                <h3 className="text-lg font-medium">Erledigte Umfragen</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Abgeschlossene Kurse */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Deine Kurse</h2>
          <div className="glass p-6 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th className="text-left py-4 px-4">Kurs</th>
                    <th className="text-left py-4 px-4">Fortschritt</th>
                    <th className="text-left py-4 px-4">Abgeschlossen am</th>
                    <th className="text-left py-4 px-4">Aktion</th>
                  </tr>
                </thead>
                <tbody>
                  {completedCourses.map(course => (
                    <tr key={course.id} className="border-b border-gray-200 dark:border-gray-700">
                      <td className="py-4 px-4">{course.title}</td>
                      <td className="py-4 px-4">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div 
                            className="bg-primary-600 h-2.5 rounded-full" 
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 inline-block">
                          {course.progress}%
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        {course.completedAt ? course.completedAt : 'In Bearbeitung'}
                      </td>
                      <td className="py-4 px-4">
                        <button className="text-primary-600 dark:text-primary-400 hover:underline">
                          {course.progress === 100 ? 'Wiederholen' : 'Fortsetzen'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      
      {/* Errungenschaften / Badges */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Deine Auszeichnungen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {badges.map(badge => (
              <div key={badge.id} className="glass p-6 rounded-xl hover-lift">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{badge.icon}</span>
                  <h3 className="text-lg font-bold">{badge.name}</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {badge.description}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Erhalten am: {badge.earnedAt}
                </p>
              </div>
            ))}
            
            {/* Platzhalter für noch nicht erreichte Badges */}
            <div className="glass p-6 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 flex flex-col items-center justify-center">
              <span className="text-3xl mb-2 text-gray-400 dark:text-gray-600">🔒</span>
              <h3 className="text-lg font-medium text-gray-500 dark:text-gray-400 text-center">Mehr Auszeichnungen warten auf dich!</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-2">
                Schließe weitere Kurse und Umfragen ab, um neue Auszeichnungen freizuschalten.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lernempfehlungen */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Personalisierte Empfehlungen</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Basierend auf deinem Lernverhalten und deinen Fortschritten empfehlen wir dir folgende Kurse und Umfragen:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Zwei-Faktor-Authentifizierung</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Erhöhe deine Kenntnisse über moderne Authentifizierungsmethoden und schütze deine Accounts besser.
                </p>
                <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  Zum Kurs →
                </button>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-800/50 p-4 rounded-xl">
                <h3 className="font-semibold mb-2">Sichere Online-Einkäufe</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  Lerne, wie du beim Online-Shopping auf Sicherheitsmerkmale achten und deine Zahlungsdaten schützen kannst.
                </p>
                <button className="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline">
                  Zum Kurs →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}