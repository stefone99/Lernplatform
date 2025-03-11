'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import CourseCard from '@/components/CourseCard';

export default function CoursesPage() {
  // State für den aktuellen Filter
  const [activeFilter, setActiveFilter] = useState('all');
  // State für die Suche
  const [searchTerm, setSearchTerm] = useState('');

  // Kursdaten (in einer echten Anwendung würden diese von einer API geladen)
  const courses = [
    {
      id: 1,
      title: 'Grundlagen der IT-Sicherheit',
      description: 'Lerne die Basisprinzipien der Informationssicherheit kennen und verstehe die wichtigsten Konzepte.',
      level: 'Anfänger',
      lessons: 12,
      available: true
    },
    {
      id: 2,
      title: 'Sichere Passwortverwaltung',
      description: 'Erfahre, wie du starke Passwörter erstellst und diese sicher verwaltest, um deine Daten zu schützen.',
      level: 'Anfänger',
      lessons: 8,
      available: false
    },
    {
      id: 3,
      title: 'Phishing-Angriffe erkennen',
      description: 'Lerne, betrügerische E-Mails und Webseiten zu erkennen und schütze dich vor Identitätsdiebstahl.',
      level: 'Mittel',
      lessons: 10,
      available: false
    },
    {
      id: 4,
      title: 'Zwei-Faktor-Authentifizierung',
      description: 'Entdecke die Vorteile der Zwei-Faktor-Authentifizierung und lerne, wie du sie für verschiedene Dienste einrichtest.',
      level: 'Anfänger',
      lessons: 6,
      available: false
    },
    {
      id: 5,
      title: 'Sichere Browsing-Gewohnheiten',
      description: 'Entwickle sichere Gewohnheiten beim Surfen im Internet und schütze dich vor gängigen Bedrohungen.',
      level: 'Anfänger',
      lessons: 9,
      available: false
    },
    {
      id: 6,
      title: 'VPN und sichere Verbindungen',
      description: 'Verstehe, wie VPNs funktionieren und wann du sie nutzen solltest, um deine Privatsphäre zu schützen.',
      level: 'Mittel',
      lessons: 7,
      available: false
    },
    {
      id: 7,
      title: 'Mobile Sicherheit',
      description: 'Lerne, wie du dein Smartphone und deine Apps sicher konfigurierst und nutzt.',
      level: 'Mittel',
      lessons: 11,
      available: false
    },
    {
      id: 8,
      title: 'Datenschutz in sozialen Medien',
      description: 'Erfahre, wie du deine Privatsphäre in sozialen Netzwerken schützt und welche Einstellungen wichtig sind.',
      level: 'Anfänger',
      lessons: 8,
      available: false
    },
    {
      id: 9,
      title: 'Sicheres Cloud-Computing',
      description: 'Verstehe die Sicherheitsaspekte von Cloud-Diensten und wie du deine Daten in der Cloud schützen kannst.',
      level: 'Fortgeschritten',
      lessons: 14,
      available: false
    }
  ];

  // Funktion zum Filtern der Kurse basierend auf Suchbegriff
  const filterBySearchTerm = (courseList) => {
    if (searchTerm.trim() === '') return courseList;
    
    const term = searchTerm.toLowerCase();
    return courseList.filter(course => 
      course.title.toLowerCase().includes(term) || 
      course.description.toLowerCase().includes(term)
    );
  };

  // Kurse nach Level filtern
  const filterCoursesByLevel = (level) => {
    const filteredList = courses.filter(course => course.level === level);
    return filterBySearchTerm(filteredList);
  };

  // Alle Kurse nach Suchbegriff filtern
  const allFilteredCourses = filterBySearchTerm(courses);

  // Nach Niveau gefilterterte Kurslisten
  const beginnerCourses = filterCoursesByLevel('Anfänger');
  const intermediateCourses = filterCoursesByLevel('Mittel');
  const advancedCourses = filterCoursesByLevel('Fortgeschritten');

  // Bestimmen, welche Abschnitte basierend auf dem Filter angezeigt werden sollen
  const shouldShowBeginnerSection = activeFilter === 'all' || activeFilter === 'Anfänger';
  const shouldShowIntermediateSection = activeFilter === 'all' || activeFilter === 'Mittel';
  const shouldShowAdvancedSection = activeFilter === 'all' || activeFilter === 'Fortgeschritten';

  // Prüfen, ob insgesamt keine Kurse gefunden wurden
  const noCoursesFound = (shouldShowBeginnerSection && beginnerCourses.length === 0) &&
                         (shouldShowIntermediateSection && intermediateCourses.length === 0) &&
                         (shouldShowAdvancedSection && advancedCourses.length === 0);

  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Unsere Kurse</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Entdecke unsere informativen Kurse zum Thema Informationssicherheit und erweitere dein Wissen in angenehmer Lernumgebung.
            </p>
          </div>
        </div>
      </section>
      
      {/* Kursfilter */}
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-4 rounded-xl mb-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-gray-700 dark:text-gray-300">Filter:</span>
                <div className="flex flex-wrap space-x-2">
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeFilter === 'all' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                    }`}
                  >
                    Alle
                  </button>
                  <button 
                    onClick={() => setActiveFilter('Anfänger')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeFilter === 'Anfänger' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                    }`}
                  >
                    Anfänger
                  </button>
                  <button 
                    onClick={() => setActiveFilter('Mittel')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeFilter === 'Mittel' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                    }`}
                  >
                    Fortgeschritten
                  </button>
                  <button 
                    onClick={() => setActiveFilter('Fortgeschritten')}
                    className={`px-3 py-1 rounded-full transition-all ${
                      activeFilter === 'Fortgeschritten' 
                        ? 'bg-primary-600 text-white' 
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-primary-100 dark:hover:bg-primary-900/30'
                    }`}
                  >
                    Experten
                  </button>
                </div>
              </div>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Kurse durchsuchen..." 
                  className="pl-10 pr-4 py-2 rounded-lg bg-white/50 dark:bg-gray-800/50 border-none focus:ring-2 focus:ring-primary-500 transition-all w-full sm:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Keine Kurse gefunden Meldung */}
      {noCoursesFound && (
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center p-8 glass rounded-xl">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Keine Kurse gefunden, die deinen Filterkriterien entsprechen.
              </p>
              <button 
                onClick={() => {setActiveFilter('all'); setSearchTerm('');}}
                className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-all"
              >
                Filter zurücksetzen
              </button>
            </div>
          </div>
        </section>
      )}
      
      {/* Hinweis zu verfügbaren Kursen */}
      <section className="py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-4 rounded-xl mb-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
            <div className="flex items-start gap-3">
              <div className="text-blue-500 dark:text-blue-400 flex-shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-blue-700 dark:text-blue-300">
                Derzeit ist nur der Kurs "<strong>Grundlagen der IT-Sicherheit</strong>" verfügbar. Weitere Kurse werden in Kürze freigeschaltet.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Anfängerkurse */}
      {shouldShowBeginnerSection && beginnerCourses.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Für Anfänger</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beginnerCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level as 'Anfänger' | 'Mittel' | 'Fortgeschritten'}
                  lessons={course.lessons}
                  available={course.available}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Mittelstufe-Kurse */}
      {shouldShowIntermediateSection && intermediateCourses.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Für Fortgeschrittene</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {intermediateCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level as 'Anfänger' | 'Mittel' | 'Fortgeschritten'}
                  lessons={course.lessons}
                  available={course.available}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Fortgeschrittene Kurse */}
      {shouldShowAdvancedSection && advancedCourses.length > 0 && (
        <section className="py-8">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-bold mb-6">Für Experten</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advancedCourses.map(course => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  description={course.description}
                  level={course.level as 'Anfänger' | 'Mittel' | 'Fortgeschritten'}
                  lessons={course.lessons}
                  available={course.available}
                />
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Lernpfad */}
      <section className="py-12 glass mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Dein Lernpfad zur IT-Sicherheit</h2>
            <p className="text-center text-gray-700 dark:text-gray-300 mb-8">
              Unsere empfohlene Reihenfolge für einen optimalen Lernfortschritt:
            </p>
            
            <div className="relative">
              {/* Verbindungslinie */}
              <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-1 bg-primary-600 dark:bg-primary-400 transform -translate-x-1/2"></div>
              
              {/* Lernpfad-Schritte */}
              <div className="space-y-12">
                <div className="relative flex items-start md:items-center flex-col md:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold z-10 mb-4 md:mb-0 md:mr-6 md:ml-auto md:translate-x-1/2">1</div>
                  <div className="md:w-1/2 glass p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Grundlagen der IT-Sicherheit</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Beginne mit den Grundprinzipien der Informationssicherheit und verstehe, warum sie wichtig sind.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start md:items-center flex-col md:flex-row-reverse">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold z-10 mb-4 md:mb-0 md:ml-6 md:mr-auto md:-translate-x-1/2">2</div>
                  <div className="md:w-1/2 glass p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Persönliche Absicherung</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Erlerne die Grundlagen der Passwortsicherheit und Zwei-Faktor-Authentifizierung, um deine Accounts zu schützen.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start md:items-center flex-col md:flex-row">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold z-10 mb-4 md:mb-0 md:mr-6 md:ml-auto md:translate-x-1/2">3</div>
                  <div className="md:w-1/2 glass p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Bedrohungserkennung</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Lerne, potenzielle Bedrohungen wie Phishing-Angriffe zu erkennen und zu vermeiden.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start md:items-center flex-col md:flex-row-reverse">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white text-xl font-bold z-10 mb-4 md:mb-0 md:ml-6 md:mr-auto md:-translate-x-1/2">4</div>
                  <div className="md:w-1/2 glass p-6 rounded-xl">
                    <h3 className="text-lg font-bold mb-2">Erweiterte Schutzmechanismen</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Vertiefe dein Wissen mit fortgeschrittenen Themen wie VPN, sichere Browsing-Gewohnheiten und Cloud-Sicherheit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass p-8 rounded-2xl max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Bereit, deine IT-Sicherheitskenntnisse zu verbessern?</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Starte noch heute mit unseren strukturierten Kursen und baue dein Wissen Schritt für Schritt auf.
            </p>
            <button className="px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Mit dem Grundlagenkurs beginnen
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}