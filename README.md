# 🧮 Taschenrechner (Calculator)

Ein webbasierter Taschenrechner, der mit HTML, CSS und JavaScript erstellt wurde. Dieses Projekt ist eine Umsetzung der Taschenrechner-Aufgabe aus dem Curriculum von **The Odin Project**.

## ✨ Funktionen

*   **Grundrechenarten:** Beherrscht Addition, Subtraktion, Multiplikation und Division.
*   **Kettenrechnungen:** Mehrere Operationen können nacheinander ausgeführt werden (z. B. `12 + 7 - 1 = 18`), wobei die Zwischenresultate direkt berechnet und auf dem Display angezeigt werden.
*   **Tastatursteuerung:** Der Rechner lässt sich komplett über das Numpad oder die Tastatur bedienen (inklusive `Enter` für `=` und `Escape` für `Clear`).
*   **Fehlerbehandlung (Division durch 0):** Das Programm fängt unzulässige mathematische Operationen ab und gibt eine Error-Nachricht aus, anstatt abzustürzen.
*   **Smarte Eingabekontrolle:** Verhindert die Eingabe von mehreren Dezimalpunkten pro Zahl und reagiert logisch auf den Wechsel von Operatoren während der Eingabe.
*   **Backspace & Clear:** Ermöglicht das Löschen einzelner Ziffern oder das komplette Zurücksetzen des aktuellen Rechenvorgangs.

## 🛠️ Verwendete Technologien

*   **HTML5:** Strukturierung des Rechners und der Tasten.
*   **CSS3:** Styling und Layout-Erstellung mit **Flexbox**. Die Buttons passen sich dank dynamischer `calc()`-Berechnungen perfekt an das Raster an.
*   **JavaScript:** Die gesamte Logik. Umgesetzt mit modularen Funktionen, DOM-Manipulation und Event-Listenern.


## 🧠 Gelernte Konzepte

Während der Entwicklung dieses Projekts wurden folgende Konzepte angewandt und gefestigt:
*   DOM-Manipulation und Event-Listener (`addEventListener`).
*   Zustandsverwaltung in JavaScript (Verwendung von Objekten für Variablen und Flags wie `clearDisplay`, um den Ablauf der Rechnungen zu steuern).
*   Tastatur-Events abfangen und mit virtuellen Klicks (`.click()`) verknüpfen.
*   CSS Flexbox für das exakte Ausrichten von Elementen (inklusive extra grosser Buttons).