# Sandra Zänglein - Portfolio Webseite

Eine moderne, responsive Portfolio-Webseite für Sandra Zänglein als Webdesignerin und App-Entwicklerin.

## 🚀 Features

- **Responsive Design**: Optimiert für Desktop, Tablet und Mobile
- **Moderne Optik**: Gradient-Design mit professionellen Farben
- **Smooth Scrolling**: Sanfte Navigation zwischen Sektionen
- **Interaktive Elemente**: Hover-Effekte und Animationen
- **Kontaktformular**: Mit Validierung und Benachrichtigungen
- **Mobile Navigation**: Hamburger-Menü für mobile Geräte

## 📁 Struktur

```
Webseite Sandra Zänglein/
├── index.html          # Haupt-HTML-Datei
├── styles.css          # CSS-Styling
├── script.js          # JavaScript-Funktionalität
└── README.md          # Diese Datei
```

## 🎨 Sektionen

1. **Hero/Startbereich**: Einladende Begrüßung mit Call-to-Action Buttons
2. **Über mich**: Persönliche Vorstellung und Fähigkeiten
3. **Portfolio**: Showcase deiner Webprojekte
4. **Apps**: Übersicht über deine App-Entwicklungsprojekte
5. **Kontakt**: Kontaktinformationen und Formular

## 🛠️ Anpassungen

### Persönliche Informationen ändern
- **Name und Titel**: In `index.html` in der Hero-Sektion
- **E-Mail und Telefon**: Im Kontaktbereich
- **Social Media Links**: Aktualisiere die Links im Kontaktbereich

### Projekte hinzufügen
1. **Webprojekte**: Duplicate den `.portfolio-item` Block in der Portfolio-Sektion
2. **Apps**: Füge neue `.app-item` Blöcke in der Apps-Sektion hinzu
3. **Bilder**: Ersetze die Platzhalter-Icons durch echte Projektbilder

### Farben anpassen
Alle Farben sind als CSS-Variablen in `:root` definiert:
```css
:root {
    --primary-color: #6366f1;    /* Hauptfarbe */
    --secondary-color: #f59e0b;   /* Akzentfarbe */
    --text-primary: #1f2937;     /* Haupttext */
    --text-secondary: #6b7280;   /* Sekundärtext */
}
```

### Neue Fähigkeiten hinzufügen
Füge neue `.skill-item` Elemente in der Skills-Grid hinzu:
```html
<div class="skill-item">
    <i class="fab fa-python"></i>
    <span>Python</span>
</div>
```

## 📱 Browser-Kompatibilität

- ✅ Chrome (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## 🚀 Live schalten

### Option 1: Lokaler Test
1. Öffne `index.html` in einem Browser
2. Alles funktioniert direkt ohne Server

### Option 2: GitHub Pages (kostenlos)
1. Erstelle ein GitHub Repository
2. Lade alle Dateien hoch
3. Aktiviere GitHub Pages in den Repository-Einstellungen

### Option 3: Hosting-Anbieter
- Netlify (kostenlos)
- Vercel (kostenlos)
- Traditional Hosting (Strato, 1&1, etc.)

## 📝 To-Do / Erweiterungen

- [ ] Echte Projektbilder hinzufügen
- [ ] Blog-Sektion hinzufügen
- [ ] Kontaktformular Backend verbinden
- [ ] SEO optimieren (meta tags, etc.)
- [ ] Google Analytics hinzufügen
- [ ] Weitere Animationen
- [ ] Dark Mode Toggle

## 💡 Tipps

1. **Bilder**: Nutze optimierte Bilder (WebP Format, max. 1920px Breite)
2. **Performance**: Teste die Seite mit Google PageSpeed Insights
3. **SEO**: Füge relevante meta-tags für Suchmaschinen hinzu
4. **Backup**: Sichere deine Änderungen regelmäßig

## 🎯 Nächste Schritte

1. **Personalisiere den Inhalt** mit deinen echten Informationen
2. **Füge deine erste Webseite** im Portfolio-Bereich hinzu
3. **Ergänze Details** zu deinen App-Projekten
4. **Teste die Webseite** auf verschiedenen Geräten
5. **Gehe live** mit einem Hosting-Anbieter

Viel Erfolg mit deiner neuen Portfolio-Webseite! 🚀
