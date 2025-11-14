@echo off
REM 🚀 Automatisches Deployment Script für Statistik Writing Website (Windows)
REM Dieses Script vereinfacht den Update-Prozess

echo ========================================
echo 🚀 Statistik Writing - Deployment Script
echo ========================================
echo.

REM Prüfe ob wir in einem Git Repository sind
if not exist .git (
    echo ❌ Fehler: Kein Git Repository gefunden
    echo Bitte führen Sie das Script im stat-writing-website Ordner aus.
    pause
    exit /b 1
)

REM Prüfe auf ungespeicherte Änderungen
git status -s >nul 2>&1
if errorlevel 1 (
    echo ❌ Fehler: Git ist nicht verfügbar
    pause
    exit /b 1
)

REM Zeige Status
git status -s
if errorlevel 0 (
    echo.
    echo 📝 Ungespeicherte Änderungen gefunden
    echo.
    
    REM Frage nach Commit-Message
    set /p commit_msg="💬 Commit-Nachricht eingeben (oder Enter für Standard): "
    
    if "%commit_msg%"=="" (
        set commit_msg=Update: %date% %time%
    )
    
    REM Stage alle Änderungen
    echo 📦 Stage Änderungen...
    git add .
    
    REM Commit erstellen
    echo 💾 Erstelle Commit...
    git commit -m "%commit_msg%"
    
    if errorlevel 1 (
        echo ❌ Fehler beim Commit
        pause
        exit /b 1
    ) else (
        echo ✅ Commit erfolgreich erstellt
    )
) else (
    echo ✨ Keine Änderungen zum Committen
)

REM Push zu GitHub
echo.
echo 🚀 Pushe zu GitHub...
git push origin main

if errorlevel 1 (
    echo.
    echo ❌ Fehler beim Push
    echo.
    echo Mögliche Probleme:
    echo 1. Keine Internetverbindung
    echo 2. Authentifizierung fehlgeschlagen (Token abgelaufen?)
    echo 3. Remote nicht konfiguriert
    echo.
    echo Hilfe: Siehe DEPLOYMENT.md
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo ✅ Deployment erfolgreich!
    echo ========================================
    echo.
    echo 📍 Ihre Website wird in 1-2 Minuten aktualisiert.
    echo.
    
    REM Versuche Remote URL zu ermitteln
    for /f "tokens=*" %%i in ('git config --get remote.origin.url') do set REMOTE_URL=%%i
    echo 🌐 Remote: %REMOTE_URL%
    echo.
    
    REM Optional: Browser öffnen
    set /p open_browser="🌐 Website im Browser öffnen? (j/n): "
    if /i "%open_browser%"=="j" (
        REM Extrahiere Username aus Git URL (vereinfacht)
        echo Opening browser...
        REM start https://IHRE-USERNAME.github.io/stat-writing-website/
    )
)

echo.
pause
