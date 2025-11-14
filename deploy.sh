#!/bin/bash

# 🚀 Automatisches Deployment Script für Statistik Writing Website
# Dieses Script vereinfacht den Update-Prozess

echo "🚀 Statistik Writing - Deployment Script"
echo "========================================"
echo ""

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Prüfe ob wir in einem Git Repository sind
if [ ! -d .git ]; then
    echo -e "${RED}❌ Fehler: Kein Git Repository gefunden${NC}"
    echo "Bitte führen Sie das Script im stat-writing-website Ordner aus."
    exit 1
fi

# Prüfe auf ungespeicherte Änderungen
if [[ -n $(git status -s) ]]; then
    echo -e "${YELLOW}📝 Ungespeicherte Änderungen gefunden:${NC}"
    git status -s
    echo ""
    
    # Frage nach Commit-Message
    read -p "💬 Commit-Nachricht eingeben (oder Enter für Standard): " commit_msg
    
    if [ -z "$commit_msg" ]; then
        commit_msg="Update: $(date '+%Y-%m-%d %H:%M')"
    fi
    
    # Stage alle Änderungen
    echo -e "${BLUE}📦 Stage Änderungen...${NC}"
    git add .
    
    # Commit erstellen
    echo -e "${BLUE}💾 Erstelle Commit...${NC}"
    git commit -m "$commit_msg"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Commit erfolgreich erstellt${NC}"
    else
        echo -e "${RED}❌ Fehler beim Commit${NC}"
        exit 1
    fi
else
    echo -e "${GREEN}✨ Keine Änderungen zum Committen${NC}"
fi

# Push zu GitHub
echo ""
echo -e "${BLUE}🚀 Pushe zu GitHub...${NC}"
git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}════════════════════════════════════════${NC}"
    echo -e "${GREEN}✅ Deployment erfolgreich!${NC}"
    echo -e "${GREEN}════════════════════════════════════════${NC}"
    echo ""
    echo "📍 Ihre Website wird in 1-2 Minuten aktualisiert."
    echo ""
    
    # Versuche GitHub Username zu ermitteln
    REMOTE_URL=$(git config --get remote.origin.url)
    if [[ $REMOTE_URL =~ github\.com[:/]([^/]+)/([^/\.]+) ]]; then
        USERNAME="${BASH_REMATCH[1]}"
        REPO="${BASH_REMATCH[2]}"
        echo -e "🌐 Website: ${BLUE}https://${USERNAME}.github.io/${REPO}/${NC}"
        echo -e "📊 Status: ${BLUE}https://github.com/${USERNAME}/${REPO}/actions${NC}"
    fi
    echo ""
else
    echo ""
    echo -e "${RED}❌ Fehler beim Push${NC}"
    echo ""
    echo "Mögliche Probleme:"
    echo "1. Keine Internetverbindung"
    echo "2. Authentifizierung fehlgeschlagen (Token abgelaufen?)"
    echo "3. Remote nicht konfiguriert"
    echo ""
    echo "Hilfe: Siehe DEPLOYMENT.md"
    exit 1
fi

# Optional: Browser öffnen
read -p "🌐 Website im Browser öffnen? (j/n): " open_browser
if [ "$open_browser" = "j" ] || [ "$open_browser" = "J" ]; then
    if [[ $REMOTE_URL =~ github\.com[:/]([^/]+)/([^/\.]+) ]]; then
        URL="https://${USERNAME}.github.io/${REPO}/"
        
        # OS-spezifisch Browser öffnen
        if [[ "$OSTYPE" == "darwin"* ]]; then
            open "$URL"
        elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
            xdg-open "$URL"
        elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "cygwin" ]]; then
            start "$URL"
        fi
    fi
fi
