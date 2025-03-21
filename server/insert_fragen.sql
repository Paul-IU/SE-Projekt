INSERT INTO fragebogen (fach, frage, antwort_1, antwort_2, antwort_3, antwort_4, richtige_antwort, author_id) 
VALUES 
--Objektorientierte Programmierung
('Objektorientierte Programmierung', 'IOBP01', ' Welche Eigenschaft trifft auf eine Unterklasse zu?',
'Eine Unterklasse erbt alle Methoden und Attribute einer Oberklasse und kann zusätzlich weitere Methoden und Attribute besitzen.',
'Die Unterklasse enthält lediglich alle Attribute der Oberklasse. Es ist dazu möglich, dass sie eigene Methoden implementiert.', 
'In Java kann die Unterklasse Attribute und Methoden aller Oberklassen haben. Zusätzliche, d.h. eigene Methoden, sind nicht möglich.',
'Methoden der Oberklasse können in der Unterklasse überladen werden.', 1, 1);

('Objektorientierte Programmierung', 'IOBP01', 'Was sind Getter- und Setter-Methoden?', 
'Getter- und Setter-Methoden sind spezielle Methoden, die zum Lesen und Ändern von Attributen einer Klasse eingesetzt werden.', 
'Getter-Methoden setzen den Wert und Setter-Methoden lesen die Werte der Attribute einer Klasse.', 
'Getter-Methoden berechnen und geben das Ergebnis zurück. Setter-Methoden setzen Werte und haben keinen Rückgabewert.', 
'Getter- und Setter-Methoden dienen ausschließlich der internen Verwendung: Nur die Konstruktoren einer Klasse dürfen diese Methoden nutzen, um Werte in den Attributen zu setzen.', 
1, 1),

('Objektorientierte Programmierung', 'IOBP01', 'Was passiert bei folgendem Konstruktor-Quellcode: public Haus(){ this.fertiggestellt = true; public Haus(float groesse, int etagen){ this.etagen = etagen; this(); this.groesse = groesse; } }', 
'Der zweite Konstruktor kann nicht verwendet werden, und es gibt zur Laufzeit einen Fehler, weil der Aufruf des Standard-Konstruktors zwischen den Wertezuweisungen steht.', 
'Nach dem Aufruf des Standard-Konstruktors wird der zweite Attributwert für "groesse" nicht mehr gesetzt.', 
'Der Compiler gibt einen Fehler aus und kann den Quellcode nicht compilieren.', 
'Beim Aufruf des 2. Konstruktors wird der Standard-Konstruktor mit genutzt.', 
3, 1),

('Objektorientierte Programmierung', 'IOBP01', 'Was muss beim Implementieren von statischen Methoden beachtet werden?', 
'In statischen Methoden dürfen keine Konstruktoren aufgerufen werden.', 
'In statische Methoden dürfen keine Klassenvariablen genutzt werden.', 
'In statischen Methoden kann nicht frei auf Instanzvariablen der Klasse zugegriffen werden.', 
'In statischen Methoden dürfen keine switch-Anweisungen oder Schleifen-Konstrukte verwendet werden.', 
3, 1),

('Objektorientierte Programmierung', 'IOBP01', 'Welches Attribut macht für eine Klasse "Tier" keinen Sinn?', 
'Gewicht', 
'Farbe', 
'Geburtsdatum', 
'Tierärztin', 
4, 1),

('Objektorientierte Programmierung', 'IOBP01', 'Was ist in folgendem Code für die Konstruktoren falsch? public class Buch { private String titel; private Autor autor; private int anzahlSeiten; private float preis; public Buch(){ public Buch(){ } public Buch(String titel){ this.titel = titel; } public Buch(String titel,int anzSeiten){ this.titel = titel; this.anzahlSeiten = anzSeiten; } public Buch(int anzSeiten, String titel){ this.anzahlSeiten = anzSeiten; this(titel); } }', 
'Konstruktor 3 und 4 haben die gleiche Parameterliste. Dies ist nicht erlaubt.', 
'Es gibt keinen Fehler bei diesem Code-Beispiel.', 
'Konstruktor 1 ist der Standard-Konstruktor und wird deshalb ohne Inhalt nicht akzeptiert.', 
'In Konstruktor 4 muss der erste Aufruf der Aufruf eines anderen Konstruktors sein.', 
4, 1),

('Objektorientierte Programmierung', 'IOBP01', 'Was sind unchecked Exceptions?', 
'Exceptions, deren Konstruktor überladen ist.', 
'Exceptions, die nicht von der Klasse Exception abgeleitet werden.', 
'Alle selbst definierten Exceptions.', 
'Alle Exceptions, die von der Klasse Runtime-Exception abgeleitet werden.', 
4, 1);

--Einführung in das Internet of Things
('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Aus was besteht eine Drei-Schichten-Architektur typischerweise?', 
'GUI-Schicht, Middleware, Datenhaltungsschicht', 
'GUI-Schicht, Fachkonzeptschicht, Datenhaltungsschicht', 
'Fachkonzeptschicht, Datenbankschicht, Datenhaltungsschicht', 
'Applikation, Middleware, Betriebssystem', 
2, 1);

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Ordnen Sie die folgenden Begrifflichkeiten in der korrekten Reihenfolge der Entwicklung vom Web 1.0 - Web 4.0 zu.', 
'Semantisches Web, Wikis, Homepages, Vernetzung von Alltagsgegenständen', 
'Homepages, Wikis, Semantisches Web, Vernetzung von Alltagsgegenständen', 
'Wikis, Homepages, Semantisches Web, Vernetzung von Alltagsgegenständen', 
'Homepages, Wikis, Vernetzung von Alltagsgegenständen, Semantisches Web', 
2, 1),

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Die standardisierte Datenbankabfragesprache, um auf Daten in relationalen Datenbanken zugreifen und diese verändern zu können, nennt man …', 
'EPL.', 'SQL.', 'RDF.', 'OWL.', 
2, 1),

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Aus wie vielen Komponenten besteht das Smart Energy Konzept?', 
'4', '3', '2', '5', 
1, 1),

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Über welche Protokolle kommunizieren Gateways mit Zentralsystemen in IoT-Plattformen häufig?', 
'HTTP oder MQTT', 'HTTP oder HTML', 'HTTP oder MSMQ', 'HTTP oder TCP/IP', 
1, 1),

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Fachkräftemangel und demographischer Wandel gefährden das …', 
'Fachkräftepotential.', 'Arbeitskräftepotential.', 'Entwicklungspotential.', 'Innovationspotential.', 
4, 1),

('Einführung in das Internet of Things', 'DLBINGEIT01', 
'Ziel des Web 3.0 ist es, Computern die Interpretation und Einordnung von …', 
'Informationen zu ermöglichen.', 'Webseiten zu ermöglichen.', 'Metatexten und Webseiten zu ermöglichen.', 'Semantischen Datenbanken zu ermöglichen.', 
1, 1);

--Ergonomie für die Web-Entwicklung
('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Was bezeichnet der Begriff „User Interface“?', 
'Die Schnittstellen zwischen dem Menschen und einem Produkt', 
'Die Leistungsmöglichkeiten eines Produkts', 
'Die Gebrauchstauglichkeit einer Benutzeroberfläche', 
'Die Anpassung zwischen dem Menschen und seinen Arbeitsbedingungen', 
1, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Als was wird das Layout Pattern Tiny Tweaks auch bezeichnet?', 
'Mobile Only', 
'Mobile First', 
'Mostly Mobile', 
'Mobile Best', 
1, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Welche Herangehensweise bei der Gestaltung einer Website entspricht nicht der Grundidee des Responsive Design?', 
'Die Gestaltung für veränderliche Fenstergrößen', 
'Die Gestaltung des Weblayouts für fixe Fenstergrößen', 
'Die Anpassung auf unterschiedliche Ausgabegeräte', 
'Die Anpassung von Inhalten für die mobile Ausgabe', 
2, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Welches Website-Suchverhalten ist charakteristisch für eine ergebnisorientierte Vorgehensweise und eine klare Vorstellung des Ziels?', 
'Kein Suchverhalten wird so charakterisiert.', 
'Das Verhalten des Researchers', 
'Das Verhalten des Browsers', 
'Das Verhalten des Suchers', 
4, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Wie werden Spalteninhalte des Layoutpatterns Column Drop bei Veränderung der Bildschirmbreite angepasst?', 
'Die Spaltenbreite passt sich fluide der Breite an, bei Verkleinerung des Bildschirms werden Spalteninhalte neu angeordnet.', 
'Die Spaltenbreite bleibt weitgehend konstant, bei einer Verkleinerung des Bildschirms werden Spalten abgesenkt.', 
'Das genannte Layoutpattern ist einspaltig, bei Veränderung der Bildschirmbreite wird der gesamte Inhalt fluide angepasst.', 
'Die Spaltenbreite bleibt fest, bei Verkleinerung des Bildschirms werden Spalten erst ab einer minimalen Breite abgesenkt.', 
2, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'Wodurch zeichnet sich ein CLI aus?', 
'Der Benutzer kann die Interaktion ohne zusätzliche Eingabegeräte durchführen.', 
'Der Benutzer kann die Interaktion ohne Blickzuwendung oder motorische Eingabe durchführen.', 
'Der Benutzer kann die Interaktion ohne Positionierungseingaben durchführen.', 
'Der Benutzer kann die Interaktion ohne vorherige Kenntnis der Befehle durchführen.', 
3, 1),

('Ergonomie für die Web-Entwicklung', 'DLBMIUID01', 
'In welchem Verhältnis stehen Ergonomie und Usability zueinander?', 
'Ergonomie bezieht sich auf Anwendungen im Unterhaltungsbereich, Usability auf Anwendungen im Arbeitsumfeld.', 
'Usability ist ein Teilbereich von Ergonomie und bezieht sich auf die bedienfreundliche Gestaltung von Interfaces.', 
'Ergonomie ist ein Teilbereich von Usability und bezieht sich auf die funktionale Gestaltung von Interfaces.', 
'Ergonomie bezieht sich auf Anwendungen im Arbeitsumfeld, Usability auf Anwendungen im Bereich Unterhaltung.', 
2, 1);
