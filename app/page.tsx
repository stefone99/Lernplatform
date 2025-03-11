'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import FeatureCard from '@/components/FeatureCard';
import CourseCard from '@/components/CourseCard';
import SurveyPreview from '@/components/SurveyPreview';
import ProgressChart from '@/components/ProgressChart';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/kurse');
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero-Bereich */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Sicheres Wissen für eine digitale Welt
              </h1>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                Entdecke moderne Lernkonzepte für Informationssicherheit und verbessere deine digitalen Fähigkeiten in einer entspannten Lernumgebung.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleGetStarted}
                  className="px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-all"
                >
                  Jetzt starten
                </button>
                <button className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all">
                  Mehr erfahren
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="glass p-4 rounded-2xl">
                <Image
                  src="/images/infosich.jpg"
                  alt="Informationssicherheit lernen"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features-Bereich */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was uns auszeichnet</h2>
            <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
              Eine moderne Lernplattform mit interaktiven Elementen und einem Design, das zum Lernen motiviert.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              title="Interaktives Lernen" 
              description="Lerne mit praktischen Übungen und interaktiven Umfragen, die dein Wissen testen."
              icon="🎯"
            />
            <FeatureCard 
              title="Fortschrittsvisualisierung" 
              description="Verfolge deinen Lernfortschritt mit ansprechenden Diagrammen und Statistiken."
              icon="📊"
            />
            <FeatureCard 
              title="Community-Vergleich" 
              description="Vergleiche deine Ergebnisse mit anderen Nutzern und motiviere dich selbst."
              icon="👥"
            />
          </div>
        </div>
      </section>
      
      {/* Kurse-Vorschau */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Aktuelle Kurse</h2>
            <button 
              onClick={handleGetStarted}
              className="text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
            >
              Alle Kurse ansehen
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CourseCard 
              id={1}
              title="Grundlagen der IT-Sicherheit" 
              description="Lerne die Basisprinzipien der Informationssicherheit kennen und verstehe die wichtigsten Konzepte."
              level="Anfänger"
              lessons={12}
              available={true}
            />
            <CourseCard 
              id={2}
              title="Sichere Passwortverwaltung" 
              description="Erfahre, wie du starke Passwörter erstellst und diese sicher verwaltest, um deine Daten zu schützen."
              level="Anfänger"
              lessons={8}
              available={false}
            />
            <CourseCard 
              id={3}
              title="Phishing-Angriffe erkennen" 
              description="Lerne, betrügerische E-Mails und Webseiten zu erkennen und schütze dich vor Identitätsdiebstahl."
              level="Mittel"
              lessons={10}
              available={false}
            />
          </div>
        </div>
      </section>
      
      {/* Umfragen-Vorschau */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Lernbasierte Umfragen</h2>
            <button 
              onClick={() => router.push('/umfragen')}
              className="text-primary-600 dark:text-primary-400 hover:underline cursor-pointer"
            >
              Alle Umfragen ansehen
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <SurveyPreview 
              title="Wie sicher sind deine Passwörter?" 
              description="Teste dein Wissen über Passwörter und erhalte Tipps zur Verbesserung deiner Passwort-Gewohnheiten."
              active={true}
              questions={10}
            />
            <SurveyPreview 
              title="Kennst du die gängigen Phishing-Methoden?" 
              description="Überprüfe, ob du Phishing-Versuche erkennen kannst und lerne mehr über aktuelle Betrugsmaschen."
              active={true}
              questions={12}
            />
            <SurveyPreview 
              title="Datenschutz im Internet" 
              description="Wie gut kennst du dich mit Datenschutzeinstellungen und -praktiken im Internet aus?"
              active={false}
              questions={15}
            />
            <SurveyPreview 
              title="Mobile Sicherheit" 
              description="Teste dein Wissen über die Sicherheit von Smartphones und mobilen Anwendungen."
              active={false}
              questions={8}
            />
          </div>
        </div>
      </section>
      
      {/* Fortschritts-Visualisierung */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Verfolge deinen Fortschritt</h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
                Mit unseren ansprechenden Visualisierungen behältst du deinen Lernfortschritt im Auge und kannst dich mit anderen vergleichen.
              </p>
            </div>
            
            <div className="glass p-6 rounded-2xl">
              <ProgressChart />
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Bereit, deine Wissen zu erweitern?</h2>
            <p className="text-xl mb-8 opacity-90">
              Starte jetzt mit deinem ersten Kurs und mache den ersten Schritt zu mehr Sicherheit im digitalen Alltag.
            </p>
            <button 
              onClick={handleGetStarted}
              className="px-8 py-4 bg-white text-primary-700 rounded-xl font-medium text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenlos starten
            </button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-4">InfoSec Learn</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Eine moderne Lernplattform für Informationssicherheit mit interaktiven Elementen und individuellem Fortschritt.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={handleGetStarted}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                  >
                    Kurse
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push('/umfragen')}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                  >
                    Umfragen
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => router.push('/fortschritt')}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 cursor-pointer"
                  >
                    Fortschritt
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Kontakt</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                Hast du Fragen oder Feedback?
              </p>
              <a href="mailto:info@infosec-learn.de" className="text-primary-600 dark:text-primary-400 hover:underline">
                info@infosec-learn.de
              </a>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
            <p className="text-gray-700 dark:text-gray-300">
              © {new Date().getFullYear()} InfoSec Learn. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}