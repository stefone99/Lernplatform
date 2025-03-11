'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [visibleSections, setVisibleSections] = useState<number[]>([0]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Beobachten Sie das Scrollen, um Abschnitte nach und nach anzuzeigen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            if (!visibleSections.includes(index)) {
              setVisibleSections((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [visibleSections]);

  // Kursinhalt (in einer echten Anwendung würde dies aus einer Datenbank geladen)
  const courseContent = [
    {
      type: 'text',
      content: `# Einführung in die IT-Sicherheit

Die Informationstechnologie ist heute aus unserem Alltag nicht mehr wegzudenken. Wir nutzen digitale Geräte und das Internet für nahezu jeden Aspekt unseres Lebens – vom Online-Banking über die Kommunikation mit Freunden und Familie bis hin zum Arbeiten im Home-Office. Diese zunehmende Digitalisierung bringt jedoch auch neue Risiken mit sich.

IT-Sicherheit, auch bekannt als Cybersicherheit, beschäftigt sich mit dem Schutz von Computersystemen, Netzwerken und Daten vor unberechtigtem Zugriff, Diebstahl oder Beschädigung. In einer Welt, in der Cyberangriffe immer raffinierter werden, ist es für jeden wichtig, grundlegende Kenntnisse im Bereich IT-Sicherheit zu haben.`
    },
    {
      type: 'image',
      src: '/images/cybersecurity-concept.jpg',
      alt: 'Cybersicherheit Konzept'
    },
    {
      type: 'text',
      content: `## Warum ist IT-Sicherheit wichtig?

Die Bedeutung der IT-Sicherheit kann kaum überschätzt werden. Hier sind einige Gründe, warum dieses Thema so wichtig ist:

1. **Schutz persönlicher Daten**: Wir speichern immer mehr sensible Informationen digital – von Bankdaten und Passwörtern bis hin zu privaten Fotos und Nachrichten. Ein Sicherheitsverstoß kann zum Diebstahl dieser Daten führen.

2. **Finanzielle Sicherheit**: Cyberkriminelle können gestohlene Informationen nutzen, um Identitätsdiebstahl zu begehen, Bankkonten zu leeren oder betrügerische Transaktionen durchzuführen.

3. **Schutz der Privatsphäre**: IT-Sicherheit hilft dabei, unsere Privatsphäre zu wahren und zu kontrollieren, wer Zugriff auf unsere Daten hat.

4. **Aufrechterhaltung der Arbeitsfähigkeit**: Für Unternehmen kann ein Cyberangriff den Betrieb lahmlegen und zu erheblichen finanziellen Verlusten führen.

5. **Nationale Sicherheit**: Auf größerer Ebene können Cyberangriffe kritische Infrastrukturen wie Stromnetze, Krankenhäuser oder Regierungssysteme gefährden.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Datenschutz Illustration'
    },
    {
      type: 'text',
      content: `## Grundlegende Bedrohungen in der IT-Sicherheit

Um sich effektiv schützen zu können, ist es wichtig, die häufigsten Arten von Cyberbedrohungen zu kennen:

### Malware

Malware (kurz für "Malicious Software") ist Schadsoftware, die entwickelt wurde, um Computersysteme zu beschädigen oder unbefugten Zugriff zu erlangen. Zu den häufigsten Arten von Malware gehören:

- **Viren**: Programme, die sich an andere Dateien anheften und beim Öffnen dieser Dateien aktiviert werden.
- **Würmer**: Selbständig verbreitende Schadsoftware, die sich über Netzwerke verbreitet.
- **Trojaner**: Schädliche Programme, die als nützliche Software getarnt sind.
- **Ransomware**: Verschlüsselt die Daten des Opfers und verlangt Lösegeld für den Entschlüsselungsschlüssel.
- **Spyware**: Überwacht heimlich die Aktivitäten des Nutzers und sendet diese Daten an Dritte.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Verschiedene Arten von Malware'
    },
    {
      type: 'text',
      content: `### Phishing

Phishing ist eine Form des Social Engineering, bei der Angreifer versuchen, sensible Informationen wie Passwörter, Kreditkartendaten oder persönliche Daten zu stehlen, indem sie sich als vertrauenswürdige Entität ausgeben. Dies geschieht häufig über:

- E-Mails, die aussehen, als kämen sie von Banken, Zahlungsdienstleistern oder anderen vertrauenswürdigen Organisationen
- Gefälschte Websites, die legitimen Seiten täuschend ähnlich sehen
- Nachrichten in sozialen Medien oder Instant-Messaging-Diensten

Phishing-Angriffe werden immer ausgefeilter und können manchmal selbst erfahrene Nutzer täuschen.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Beispiel einer Phishing-E-Mail'
    },
    {
      type: 'text',
      content: `### Schwache und wiederverwendete Passwörter

Eine der häufigsten Sicherheitslücken sind schwache Passwörter. Viele Menschen verwenden einfache Passwörter wie "123456", "passwort" oder persönliche Informationen (Geburtstage, Namen von Haustieren etc.), die leicht zu erraten sind.

Ein weiteres Problem ist die Wiederverwendung von Passwörtern. Wenn ein Angreifer Zugriff auf ein Passwort erhält, das für mehrere Dienste verwendet wird, kann er auf alle diese Konten zugreifen.

### Man-in-the-Middle-Angriffe

Bei einem Man-in-the-Middle-Angriff positioniert sich ein Angreifer zwischen dem Nutzer und dem Dienst, mit dem der Nutzer kommuniziert. Der Angreifer kann dann den Datenverkehr abfangen, mitlesen oder sogar verändern, ohne dass der Nutzer oder der Dienst davon erfährt.

Solche Angriffe sind besonders in ungesicherten WLAN-Netzwerken wie öffentlichen Hotspots möglich.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Man-in-the-Middle Angriff Konzept'
    },
    {
      type: 'text',
      content: `## Grundlegende Schutzmaßnahmen

Zum Glück gibt es eine Reihe von Maßnahmen, die jeder ergreifen kann, um sich vor den meisten Cyberbedrohungen zu schützen:

### Starke, einzigartige Passwörter

Verwenden Sie komplexe Passwörter, die eine Kombination aus Groß- und Kleinbuchstaben, Zahlen und Sonderzeichen enthalten. Jedes Konto sollte ein eigenes, einzigartiges Passwort haben.

Ein Passwort-Manager kann dabei helfen, viele verschiedene, komplexe Passwörter zu verwalten, ohne sie sich merken zu müssen.

### Zwei-Faktor-Authentifizierung (2FA)

Die Zwei-Faktor-Authentifizierung fügt eine zusätzliche Sicherheitsebene hinzu, indem sie neben dem Passwort einen zweiten Nachweis der Identität verlangt – meist einen Code, der an ein Mobiltelefon gesendet wird, oder einen biometrischen Scan.

Aktivieren Sie 2FA, wo immer es möglich ist, insbesondere für wichtige Konten wie E-Mail, Banking oder Cloud-Speicher.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Zwei-Faktor-Authentifizierung Illustration'
    },
    {
      type: 'text',
      content: `### Regelmäßige Software-Updates

Software-Updates enthalten oft wichtige Sicherheitspatches, die bekannte Schwachstellen beheben. Halten Sie Ihr Betriebssystem, Ihre Apps und insbesondere Ihre Sicherheitssoftware stets auf dem neuesten Stand.

### Vorsicht bei unbekannten E-Mails und Anhängen

Öffnen Sie keine E-Mails oder Anhänge von unbekannten Absendern. Selbst wenn der Absender bekannt erscheint, seien Sie vorsichtig, wenn die Nachricht ungewöhnlich ist oder Sie zur Eingabe persönlicher Daten auffordert.

### Verwenden Sie sichere Netzwerke

Seien Sie vorsichtig bei der Nutzung öffentlicher WLAN-Netzwerke, insbesondere für sensible Aktivitäten wie Online-Banking. Verwenden Sie ein VPN (Virtual Private Network), um Ihre Verbindung zu verschlüsseln.

### Regelmäßige Backups

Sichern Sie Ihre wichtigen Daten regelmäßig auf externen Festplatten oder in der Cloud. Im Falle eines Ransomware-Angriffs oder eines Geräteausfalls können Sie so auf Ihre Daten zugreifen, ohne Lösegeld zahlen zu müssen.`
    },
    {
      type: 'image',
      src: '/placeholder/1200/600',
      alt: 'Daten-Backup Konzept'
    },
    {
      type: 'text',
      content: `## Die Zukunft der IT-Sicherheit

Mit der fortschreitenden Digitalisierung und der Entwicklung neuer Technologien wie künstlicher Intelligenz, dem Internet der Dinge (IoT) und 5G entstehen auch neue Herausforderungen für die IT-Sicherheit.

Angreifer setzen zunehmend künstliche Intelligenz ein, um Sicherheitsmaßnahmen zu umgehen und neue Angriffsvektoren zu identifizieren. Gleichzeitig werden auch Sicherheitssysteme immer intelligenter, um diese Bedrohungen zu erkennen und abzuwehren.

Die IT-Sicherheit ist ein ständiger Wettlauf zwischen Angreifern und Verteidigern. Es ist daher wichtig, stets informiert zu bleiben und seine Sicherheitsmaßnahmen regelmäßig zu überprüfen und anzupassen.

## Fazit

IT-Sicherheit ist in der heutigen digitalen Welt von entscheidender Bedeutung. Durch das Verständnis grundlegender Bedrohungen und die Umsetzung einfacher Schutzmaßnahmen kann jeder dazu beitragen, seine digitale Sicherheit zu verbessern.

Denken Sie daran: IT-Sicherheit ist kein einmaliges Projekt, sondern ein kontinuierlicher Prozess. Bleiben Sie wachsam, informiert und proaktiv, um sich und Ihre Daten zu schützen.

Sind Sie bereit, Ihr Wissen zu testen? Nehmen Sie am Quiz teil, um zu sehen, wie viel Sie über IT-Sicherheit gelernt haben!`
    }
  ];

  const startQuiz = () => {
    router.push(`/kurse/${params.id}/quiz`);
  };

  return (
    <main className="min-h-screen pb-16">
      <Navbar />
      
      <div className="pt-24 md:pt-32 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">Grundlagen der IT-Sicherheit</h1>
          
          <div className="max-w-4xl mx-auto">
            {courseContent.map((section, index) => {
              if (section.type === 'text') {
                // Konvertiere Markdown-ähnlichen Text in HTML
                const content = section.content
                  .replace(/^# (.+)$/gm, '<h1 class="text-4xl font-bold my-6">$1</h1>')
                  .replace(/^## (.+)$/gm, '<h2 class="text-3xl font-bold my-5 mt-10">$1</h2>')
                  .replace(/^### (.+)$/gm, '<h3 class="text-2xl font-bold my-4">$1</h3>')
                  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.+?)\*/g, '<em>$1</em>')
                  .replace(/^(\d+)\. (.+)$/gm, '<li class="ml-8 list-decimal my-3 text-lg">$2</li>')
                  .replace(/^- (.+)$/gm, '<li class="ml-8 list-disc my-3 text-lg">$1</li>')
                  .split('\n\n')
                  .map(para => {
                    if (para.startsWith('<')) return para;
                    if (para.startsWith('<li')) return `<ul>${para}</ul>`;
                    return `<p class="my-4 text-lg leading-relaxed">${para}</p>`;
                  })
                  .join('');

                return (
                  <div 
                    key={index}
                    ref={el => sectionRefs.current[index] = el}
                    data-index={index}
                    className={`transition-all duration-1000 ease-in-out transform ${
                      visibleSections.includes(index) 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-10'
                    }`}
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                );
              } else if (section.type === 'image') {
                return (
                  <div 
                    key={index}
                    ref={el => sectionRefs.current[index] = el}
                    data-index={index}
                    className={`my-12 transition-all duration-1000 ease-in-out transform ${
                      visibleSections.includes(index) 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-10 scale-95'
                    }`}
                  >
                    <div className="glass p-3 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={section.src}
                        alt={section.alt}
                        width={1200}
                        height={600}
                        className="rounded-lg w-full"
                      />
                    </div>
                    <p className="text-center text-gray-600 dark:text-gray-400 mt-3 text-lg italic">
                      {section.alt}
                    </p>
                  </div>
                );
              }
              return null;
            })}
            
            {/* Quiz-Start-Button */}
            <div 
              ref={el => sectionRefs.current[courseContent.length] = el}
              data-index={courseContent.length}
              className={`my-20 transition-all duration-1000 ease-in-out transform ${
                visibleSections.includes(courseContent.length) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="glass p-10 rounded-xl text-center shadow-xl border-2 border-primary-200 dark:border-primary-800">
                <h2 className="text-3xl font-bold mb-6">Bereit, dein Wissen zu testen?</h2>
                <p className="text-xl mb-8 text-gray-700 dark:text-gray-300">
                  Stelle dein Verständnis der Grundlagen der IT-Sicherheit auf die Probe mit unserem interaktiven Quiz!
                </p>
                <button 
                  onClick={startQuiz}
                  className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-all text-xl shadow-md hover:shadow-lg transform hover:-translate-y-1"
                >
                  Quiz starten
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}