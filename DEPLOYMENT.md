# 🚀 Publikationsanleitung - Statistik Writing Website

## Schritt-für-Schritt: Von Git zu Live-Website

### 📋 Voraussetzungen
- GitHub Account ([hier erstellen](https://github.com/signup))
- Git auf Ihrem Computer installiert ([Download](https://git-scm.com/downloads))

---

## ⚡ Schnellstart (5 Minuten)

### 1. GitHub Repository erstellen

1. Gehen Sie zu [github.com](https://github.com) und loggen Sie sich ein
2. Klicken Sie auf das **"+"** Symbol oben rechts → **"New repository"**
3. Füllen Sie folgendes aus:
   - **Repository name**: `stat-writing-website`
   - **Description**: `Premium Statistikberatung für Abschlussarbeiten`
   - **Public** (wichtig für GitHub Pages Free)
   - ❌ **NICHT** "Initialize with README" ankreuzen (haben wir schon!)
4. Klicken Sie auf **"Create repository"**

### 2. Code zu GitHub pushen

Kopieren Sie die Befehle von GitHub (werden nach Repo-Erstellung angezeigt):

```bash
# In Ihrem Terminal / Command Prompt:
cd /pfad/zum/projekt

git remote add origin https://github.com/IHR-USERNAME/stat-writing-website.git
git branch -M main
git push -u origin main
```

**WICHTIG**: Ersetzen Sie `IHR-USERNAME` mit Ihrem GitHub Benutzernamen!

### 3. GitHub Pages aktivieren

1. Gehen Sie zu Ihrem Repository auf GitHub
2. Klicken Sie auf **"Settings"** (oben rechts)
3. Scrollen Sie in der linken Sidebar zu **"Pages"**
4. Unter **"Source"**:
   - Branch: **main** auswählen
   - Folder: **/ (root)** auswählen
   - Klicken Sie auf **"Save"**
5. ⏱️ Warten Sie 1-2 Minuten

### 4. Website aufrufen! 🎉

Ihre Website ist jetzt live unter:
```
https://IHR-USERNAME.github.io/stat-writing-website/
```

---

## 📝 Detaillierte Anleitung

### Option A: Via Command Line (empfohlen)

#### Windows (Git Bash / CMD):
```bash
# 1. Navigieren Sie zum Projektordner
cd C:\Users\YourName\stat-writing-website

# 2. Fügen Sie GitHub Remote hinzu
git remote add origin https://github.com/IHR-USERNAME/stat-writing-website.git

# 3. Pushen Sie den Code
git push -u origin main

# Bei Problemen mit Authentifizierung:
# - GitHub fragt nach Username & Password
# - Password = Personal Access Token (nicht Ihr normales Passwort!)
```

#### macOS / Linux:
```bash
# 1. Navigieren Sie zum Projektordner
cd ~/stat-writing-website

# 2. Fügen Sie GitHub Remote hinzu
git remote add origin https://github.com/IHR-USERNAME/stat-writing-website.git

# 3. Pushen Sie den Code
git push -u origin main
```

### Option B: Via GitHub Desktop (für Einsteiger)

1. Laden Sie [GitHub Desktop](https://desktop.github.com/) herunter
2. Installieren und mit GitHub-Account anmelden
3. **File** → **Add Local Repository**
4. Wählen Sie den `stat-writing-website` Ordner
5. Klicken Sie auf **"Publish repository"**
6. Wählen Sie:
   - Name: `stat-writing-website`
   - ✅ **Keep this code private** (falls gewünscht)
7. Klicken Sie auf **"Publish repository"**

---

## 🔐 GitHub Authentication Setup

### Personal Access Token erstellen (für Command Line)

Wenn Sie via Command Line pushen möchten:

1. Gehen Sie zu [github.com/settings/tokens](https://github.com/settings/tokens)
2. Klicken Sie auf **"Generate new token"** → **"Generate new token (classic)"**
3. Setzen Sie:
   - Note: `stat-writing-website`
   - Expiration: `90 days` (oder länger)
   - Scopes: ✅ **repo** (alle repo-Rechte)
4. Klicken Sie auf **"Generate token"**
5. ⚠️ **KOPIEREN SIE DEN TOKEN** (wird nur einmal angezeigt!)
6. Beim Git Push verwenden Sie:
   - Username: Ihr GitHub Username
   - Password: **Ihr Token** (nicht Ihr Passwort!)

### SSH Key Setup (Alternative, für Fortgeschrittene)

```bash
# 1. SSH Key erstellen
ssh-keygen -t ed25519 -C "ihre-email@example.com"

# 2. Key zu ssh-agent hinzufügen
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 3. Public Key kopieren
cat ~/.ssh/id_ed25519.pub
# Kopieren Sie den gesamten Output

# 4. Zu GitHub hinzufügen:
# - Gehen Sie zu github.com/settings/keys
# - "New SSH key" klicken
# - Fügen Sie den kopierten Key ein

# 5. Remote URL ändern
git remote set-url origin git@github.com:IHR-USERNAME/stat-writing-website.git
```

---

## 🌐 Custom Domain einrichten (optional)

### 1. Domain kaufen (z.B. statistik-writing.de)

Empfohlene Anbieter:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://www.cloudflare.com/products/registrar/)

### 2. DNS Einstellungen

Bei Ihrem Domain-Anbieter:

```
A Records (IPv4):
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153

AAAA Records (IPv6):
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153

CNAME Record (für www):
www.ihre-domain.de → IHR-USERNAME.github.io
```

### 3. In GitHub einstellen

1. Gehen Sie zu **Settings** → **Pages**
2. Bei **"Custom domain"**: Tragen Sie `ihre-domain.de` ein
3. ✅ Aktivieren Sie **"Enforce HTTPS"** (nach DNS-Propagierung)

⏱️ **DNS Propagierung**: Kann 24-48 Stunden dauern

---

## 📁 Dateistruktur verstehen

```
stat-writing-website/
├── index.html              ← Haupt-HTML (wird als / geladen)
├── style.css               ← Zusätzliche Styles
├── script.js               ← JavaScript Funktionalität
├── components/
│   ├── navbar.js          ← Navigation Component
│   └── faq-section.js     ← FAQ Component
├── .gitignore             ← Git Ignore Rules
└── README.md              ← Projektdokumentation
```

---

## 🔄 Änderungen vornehmen & aktualisieren

### Workflow für Updates:

```bash
# 1. Dateien bearbeiten (z.B. index.html)

# 2. Änderungen ansehen
git status
git diff

# 3. Änderungen stagen
git add .
# oder nur bestimmte Dateien:
git add index.html style.css

# 4. Commit erstellen
git commit -m "Update: Preise angepasst und neue Testimonials hinzugefügt"

# 5. Zu GitHub pushen
git push origin main

# 6. Warten (1-2 Minuten)
# ✅ Änderungen sind live!
```

### Quick Updates:

```bash
# One-Liner für schnelle Updates:
git add . && git commit -m "Quick fix: Tippfehler korrigiert" && git push

# Website-Build-Status prüfen:
# Gehen Sie zu: https://github.com/IHR-USERNAME/stat-writing-website/actions
```

---

## 🐛 Troubleshooting

### Problem: "Permission denied"
```bash
# Lösung: SSH Key setup oder Personal Access Token verwenden
# Siehe Abschnitt "GitHub Authentication Setup" oben
```

### Problem: "Repository not found"
```bash
# Prüfen Sie die Remote URL:
git remote -v

# Falls falsch, korrigieren:
git remote set-url origin https://github.com/KORREKTER-USERNAME/stat-writing-website.git
```

### Problem: Website zeigt 404
```bash
# Checkliste:
# 1. Ist index.html im Root-Verzeichnis? ✓
# 2. Ist GitHub Pages aktiviert? (Settings → Pages)
# 3. Branch = main? ✓
# 4. 2-3 Minuten gewartet? ⏱️
# 5. Cache leeren: Strg+Shift+R (Windows) / Cmd+Shift+R (Mac)
```

### Problem: CSS/JS lädt nicht
```bash
# In index.html prüfen:
# ✅ Richtig: <link rel="stylesheet" href="style.css">
# ❌ Falsch: <link rel="stylesheet" href="/style.css"> (Slash am Anfang!)

# Bei Custom Domain:
# ✅ Richtig: <link rel="stylesheet" href="./style.css">
```

### Problem: Components laden nicht
```bash
# Prüfen Sie in der Browser-Konsole (F12):
# - Gibt es CORS-Fehler?
# - Laden die .js Dateien?

# In index.html:
<script src="components/navbar.js"></script>     ✅ Richtig
<script src="/components/navbar.js"></script>    ❌ Falsch
```

---

## 🎯 Best Practices

### ✅ DO:
- Committen Sie regelmäßig mit klaren Nachrichten
- Testen Sie lokal vor dem Push
- Nutzen Sie Branches für große Änderungen
- Sichern Sie Ihre Arbeit

### ❌ DON'T:
- Pushen Sie keine Passwörter/API Keys
- Committen Sie keine großen Binärdateien (>50MB)
- Vergessen Sie nicht die .gitignore

---

## 📊 Analytics einrichten (optional)

### Google Analytics:

1. Erstellen Sie ein GA4 Property auf [analytics.google.com](https://analytics.google.com)
2. Kopieren Sie Ihre Measurement ID (z.B. `G-XXXXXXXXXX`)
3. Fügen Sie in `index.html` (im `<head>`) ein:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 DSGVO-Compliance (wichtig!)

Für Deutschland/EU beachten Sie:

1. **Cookie Banner** hinzufügen (wenn Sie Analytics nutzen)
2. **Impressum** erstellen (Pflicht!)
3. **Datenschutzerklärung** hinzufügen
4. **SSL/HTTPS** aktivieren (✅ GitHub Pages bietet das kostenlos)

---

## 🆘 Hilfe & Support

### Nützliche Links:
- [GitHub Pages Dokumentation](https://docs.github.com/en/pages)
- [Git Dokumentation](https://git-scm.com/doc)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Community:
- GitHub Issues: Probleme im Repository melden
- Stack Overflow: [github-pages] Tag

---

## ✅ Checkliste: Deployment erfolgreich?

- [ ] Repository auf GitHub erstellt
- [ ] Code erfolgreich gepusht
- [ ] GitHub Pages aktiviert (Settings → Pages)
- [ ] Website erreichbar unter `username.github.io/stat-writing-website`
- [ ] Alle Seiten/Components funktionieren
- [ ] Mobile Ansicht getestet
- [ ] Links funktionieren (Calendly, Telefon, etc.)
- [ ] Bilder laden korrekt
- [ ] CSS/JS wird geladen
- [ ] Keine Fehler in der Browser-Console (F12)

---

## 🎉 Geschafft!

Ihre Website ist jetzt live! 

**Nächste Schritte:**
1. ✏️ Inhalte anpassen (Edit-Modus nutzen)
2. 📸 Echte Bilder hochladen
3. 📞 Kontaktdaten aktualisieren
4. 🔗 Custom Domain einrichten (optional)
5. 📊 Analytics hinzufügen (optional)

---

**Fragen?** Erstellen Sie ein Issue im Repository oder kontaktieren Sie mich!

**Version**: 1.0 | **Letzte Aktualisierung**: November 2025
