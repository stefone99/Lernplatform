'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

// Quiz-Fragen und Antworten
const quizQuestions = [
  {
    question: "Was ist Malware?",
    options: [
      "Ein spezielles Anti-Virus-Programm",
      "Schadsoftware, die entwickelt wurde, um Systeme zu beschädigen oder unbefugten Zugriff zu erlangen",
      "Eine spezielle Hardware zur Netzwerksicherheit",
      "Ein Programm zur Datensicherung"
    ],
    correctAnswer: 1
  },
  {
    question: "Was ist Phishing?",
    options: [
      "Eine Methode zur Datenwiederherstellung",
      "Ein Tool zum Aufspüren von Sicherheitslücken",
      "Eine Angeltechnik zum Entspannen nach der Arbeit",
      "Der Versuch, sensible Daten durch Täuschung zu erlangen, indem man sich als vertrauenswürdige Entität ausgibt"
    ],
    correctAnswer: 3
  },
  {
    question: "Was ist ein sicheres Passwort?",
    options: [
      "Ein Passwort, das leicht zu merken ist, wie 'passwort123'",
      "Ein Passwort, das aus persönlichen Informationen besteht",
      "Ein komplexes Passwort mit Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen",
      "Ein Passwort, das für alle Konten verwendet wird"
    ],
    correctAnswer: 2
  },
  {
    question: "Was ist Zwei-Faktor-Authentifizierung (2FA)?",
    options: [
      "Eine Methode, bei der zwei Personen ein Passwort bestätigen müssen",
      "Eine zusätzliche Sicherheitsebene, die neben dem Passwort einen zweiten Identitätsnachweis verlangt",
      "Ein Passwort, das aus zwei Teilen besteht",
      "Ein System mit zwei verschiedenen Firewalls"
    ],
    correctAnswer: 1
  },
  {
    question: "Warum sind Software-Updates wichtig?",
    options: [
      "Sie sind nur für neue Funktionen und haben nichts mit Sicherheit zu tun",
      "Sie verbessern nur die Leistung, nicht die Sicherheit",
      "Sie enthalten oft wichtige Sicherheitspatches, die bekannte Schwachstellen beheben",
      "Sie sind nur für technisch versierte Nutzer relevant"
    ],
    correctAnswer: 2
  },
  {
    question: "Was ist Ransomware?",
    options: [
      "Software, die Passwörter generiert",
      "Schadsoftware, die die Daten des Opfers verschlüsselt und Lösegeld für den Entschlüsselungsschlüssel verlangt",
      "Ein Tool zur Überwachung des Netzwerkverkehrs",
      "Ein Programm, das automatisch Sicherheitsupdates installiert"
    ],
    correctAnswer: 1
  },
  {
    question: "Was ist ein Man-in-the-Middle-Angriff?",
    options: [
      "Ein Angriff, bei dem ein Angreifer die Kommunikation zwischen zwei Parteien abfängt, ohne dass diese es bemerken",
      "Ein physischer Angriff auf einen Server",
      "Ein Angriff, bei dem drei oder mehr Hacker zusammenarbeiten",
      "Ein Angriff, der nur in der Mitte eines Netzwerks stattfinden kann"
    ],
    correctAnswer: 0
  },
  {
    question: "Was ist ein VPN?",
    options: [
      "Ein sehr schnelles Netzwerk",
      "Eine Art von Malware",
      "Ein Virtual Private Network, das eine verschlüsselte Verbindung über ein öffentliches Netzwerk herstellt",
      "Ein spezieller Computer für Sicherheitsaufgaben"
    ],
    correctAnswer: 2
  },
  {
    question: "Was ist eine gute Praxis beim Umgang mit E-Mails?",
    options: [
      "Alle Anhänge sofort öffnen, um Zeit zu sparen",
      "Persönliche Informationen an jeden senden, der danach fragt",
      "E-Mails von unbekannten Absendern ignorieren oder vorsichtig behandeln",
      "Links in E-Mails immer anklicken, um zu sehen, wohin sie führen"
    ],
    correctAnswer: 2
  },
  {
    question: "Warum sind regelmäßige Backups wichtig?",
    options: [
      "Sie sind nur für Unternehmen wichtig, nicht für Privatpersonen",
      "Sie schützen vor Datenverlust durch Hardwareausfall, Ransomware oder andere Probleme",
      "Sie sind nur nötig, wenn man sein Gerät verkaufen möchte",
      "Sie verbessern die Leistung des Computers"
    ],
    correctAnswer: 1
  }
];

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      // Speichern der Antwort
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestionIndex] = selectedOption;
      setUserAnswers(newUserAnswers);
      
      // Zurücksetzen der Auswahl
      setSelectedOption(null);
      
      // Wenn es die letzte Frage war, Quiz beenden
      if (currentQuestionIndex === quizQuestions.length - 1) {
        setQuizCompleted(true);
      } else {
        // Sonst zur nächsten Frage
        setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      }
    }
  };

  const calculateScore = () => {
    let correctCount = 0;
    quizQuestions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
  };

  const showQuizResults = () => {
    setShowResult(true);
  };

  const backToCourse = () => {
    router.push(`/kurse/${params.id}`);
  };

  const retakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setUserAnswers([]);
    setQuizCompleted(false);
    setShowResult(false);
  };

  // Daten für den Ergebnis-Chart
  const score = calculateScore();
  const resultsData = [
    { name: 'Richtig', value: score, color: '#10b981' },
    { name: 'Falsch', value: quizQuestions.length - score, color: '#ef4444' }
  ];

  const COLORS = ['#10b981', '#ef4444'];

  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {!showResult ? (
              <div className="glass p-8 rounded-xl">
                {!quizCompleted ? (
                  <>
                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">Frage {currentQuestionIndex + 1} von {quizQuestions.length}</h2>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          Fortschritt: {Math.round(((currentQuestionIndex) / quizQuestions.length) * 100)}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-primary-600 h-2.5 rounded-full" 
                          style={{ width: `${((currentQuestionIndex) / quizQuestions.length) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-6">{currentQuestion.question}</h3>
                    
                    <div className="space-y-3 mb-8">
                      {currentQuestion.options.map((option, index) => (
                        <div 
                          key={index}
                          onClick={() => handleOptionSelect(index)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            selectedOption === index
                              ? 'border-primary-600 bg-primary-50 dark:bg-primary-900/30'
                              : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-700'
                          }`}
                        >
                          <div className="flex items-start">
                            <div className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full border-2 mr-3 flex items-center justify-center ${
                              selectedOption === index
                                ? 'border-primary-600'
                                : 'border-gray-400'
                            }`}>
                              {selectedOption === index && (
                                <div className="w-3 h-3 rounded-full bg-primary-600"></div>
                              )}
                            </div>
                            <span className="flex-1">{option}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedOption === null}
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        selectedOption !== null
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      {currentQuestionIndex === quizQuestions.length - 1 ? 'Quiz abschließen' : 'Nächste Frage'}
                    </button>
                  </>
                ) : (
                  <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Herzlichen Glückwunsch!</h2>
                    <p className="text-lg mb-6">
                      Du hast alle Fragen beantwortet. Klicke auf die Schaltfläche unten, um deine Ergebnisse zu sehen.
                    </p>
                    <button
                      onClick={showQuizResults}
                      className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all"
                    >
                      Ergebnisse anzeigen
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="glass p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Deine Quiz-Ergebnisse</h2>
                
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold mb-2">{score} von {quizQuestions.length}</p>
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    {score === quizQuestions.length ? 'Perfekt! Du hast alle Fragen richtig beantwortet!' : 
                     score >= quizQuestions.length * 0.8 ? 'Sehr gut! Du hast die meisten Fragen richtig beantwortet!' :
                     score >= quizQuestions.length * 0.6 ? 'Gut gemacht! Du hast mehr als die Hälfte der Fragen richtig beantwortet.' :
                     'Du solltest den Kurs vielleicht noch einmal durchgehen, um dein Wissen zu verbessern.'}
                  </p>
                </div>
                
                <div className="h-64 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={resultsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {resultsData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={retakeQuiz}
                    className="flex-1 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white font-medium rounded-xl transition-all"
                  >
                    Quiz wiederholen
                  </button>
                  <button
                    onClick={backToCourse}
                    className="flex-1 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all"
                  >
                    Zurück zum Kurs
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}