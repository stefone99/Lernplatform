'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import SurveyPreview from '@/components/SurveyPreview';

export default function SurveysPage() {
  // Umfragedaten (in einer echten Anwendung würden diese von einer API geladen)
  const surveys = [
    {
      id: 1,
      title: 'Wie sicher sind deine Passwörter?',
      description: 'Teste dein Wissen über Passwörter und erhalte Tipps zur Verbesserung deiner Passwort-Gewohnheiten.',
      active: true,
      questions: 10
    },
    {
      id: 2,
      title: 'Kennst du die gängigen Phishing-Methoden?',
      description: 'Überprüfe, ob du Phishing-Versuche erkennen kannst und lerne mehr über aktuelle Betrugsmaschen.',
      active: true,
      questions: 12
    },
    {
      id: 3,
      title: 'Datenschutz im Internet',
      description: 'Wie gut kennst du dich mit Datenschutzeinstellungen und -praktiken im Internet aus?',
      active: false,
      questions: 15
    },
    {
      id: 4,
      title: 'Mobile Sicherheit',
      description: 'Teste dein Wissen über die Sicherheit von Smartphones und mobilen Anwendungen.',
      active: false,
      questions: 8
    },
    {
      id: 5,
      title: 'Cloud-Sicherheit Grundlagen',
      description: 'Verstehe die grundlegenden Sicherheitskonzepte in Cloud-Umgebungen und lerne, worauf du achten solltest.',
      active: true,
      questions: 12
    },
    {
      id: 6,
      title: 'Soziale Medien und Privatsphäre',
      description: 'Überprüfe, wie gut du deine Privatspäre in sozialen Medien schützt und lerne neue Strategien.',
      active: true,
      questions: 10
    },
    {
      id: 7,
      title: 'Heimnetzwerk-Sicherheit',
      description: 'Wie sicher ist dein Heimnetzwerk? Lerne potenzielle Schwachstellen kennen und erhöhe deine Sicherheit.',
      active: false,
      questions: 14
    },
    {
      id: 8,
      title: 'Biometrische Authentifizierung',
      description: 'Informiere dich über die Vor- und Nachteile von biometrischen Authentifizierungsmethoden.',
      active: false,
      questions: 8
    }
  ];

  // Umfragen nach Status filtern
  const activeSurveys = surveys.filter(survey => survey.active);
  const upcomingSurveys = surveys.filter(survey => !survey.active);

  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <section className="pt-24 md:pt-32 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Lernbasierte Umfragen</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Teste dein Wissen, entdecke Wissenslücken und verbessere deine Kenntnisse über Informationssicherheit mit interaktiven Umfragen.
            </p>
          </div>
        </div>
      </section>
      
      {/* Aktive Umfragen */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Verfügbare Umfragen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeSurveys.map(survey => (
              <SurveyPreview 
                key={survey.id}
                title={survey.title}
                description={survey.description}
                active={survey.active}
                questions={survey.questions}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Kommende Umfragen */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-6">Demnächst verfügbar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingSurveys.map(survey => (
              <SurveyPreview 
                key={survey.id}
                title={survey.title}
                description={survey.description}
                active={survey.active}
                questions={survey.questions}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Vorteile von lernbasierten Umfragen */}
      <section className="py-12 glass mt-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Warum lernbasierte Umfragen?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="mr-4 text-primary-600 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Selbsteinschätzung</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Finde heraus, wo deine Stärken liegen und in welchen Bereichen du noch Nachholbedarf hast.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-primary-600 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Sofortiges Feedback</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Erhalte sofort Rückmeldung zu deinen Antworten und lerne aus deinen Fehlern.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-primary-600 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Praxisorientiertes Wissen</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Die Fragen basieren auf realen Szenarien und helfen dir, dein Wissen im Alltag anzuwenden.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-primary-600 dark:text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Zeitsparend</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Kurze, fokussierte Umfragen ermöglichen es dir, auch in kurzen Pausen etwas zu lernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call-to-Action-Bereich */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center glass p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">Bereit, dein Wissen zu testen?</h2>
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              Starte noch heute mit unseren interaktiven Umfragen und verbessere kontinuierlich deine Fähigkeiten im Bereich Informationssicherheit.
            </p>
            <button className="px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all">
              Mit der ersten Umfrage beginnen
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}