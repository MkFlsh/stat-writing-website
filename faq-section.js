// FAQ Section Component
class FAQSection extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section id="faq" class="py-20 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl sm:text-5xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          
          <div class="space-y-4">
            ${this.createFAQItem(
              'Ist das Ghostwriting? Ist das legal?',
              'Nein, wir schreiben keine kompletten Arbeiten. Wir bieten statistische Beratung und erstellen auf Basis Ihrer Daten einen Ergebnis-Teil mit Interpretation – ähnlich wie ein Statistik-Tutor oder Methodenberater. Sie bleiben Autor:in Ihrer Arbeit. Die finale Integration und Verantwortung liegt bei Ihnen.'
            )}
            
            ${this.createFAQItem(
              'Welche Software nutzen Sie?',
              'Wir arbeiten primär mit R (inkl. tidyverse, ggplot2) und SPSS. Je nach Projekt können auch Python, Stata oder andere Tools zum Einsatz kommen. Alle Analysen werden reproduzierbar dokumentiert.'
            )}
            
            ${this.createFAQItem(
              'Wie lange dauert ein typisches Projekt?',
              'Das hängt vom Umfang ab. Einfache Auswertungen (t-Tests, ANOVAs, Korrelationen) sind in 5-7 Tagen machbar. Komplexere Analysen (Regressionen, SEM, Mehrebenenmodelle) können 10-14 Tage in Anspruch nehmen. Express-Slots für dringende Fälle sind begrenzt verfügbar.'
            )}
            
            ${this.createFAQItem(
              'Was kostet Ihre Beratung?',
              'Die Preise hängen von Umfang, Komplexität und Zeitrahmen ab. Im Erstgespräch besprechen wir Ihre Anforderungen und erstellen ein transparentes Angebot. Grobe Richtwerte: Bachelor-Thesis ab 800€, Master-Thesis ab 1.200€, Promotion auf Anfrage.'
            )}
            
            ${this.createFAQItem(
              'Bekomme ich alle Skripte und Daten?',
              'Ja, Sie erhalten alle R-Skripte bzw. SPSS-Syntax, die bereinigten Datensätze, Output-Dateien und den schriftlichen Ergebnis-Teil. Alles ist reproduzierbar und Sie können jeden Schritt nachvollziehen.'
            )}
            
            ${this.createFAQItem(
              'Kann ich Rückfragen stellen?',
              'Selbstverständlich. Im Paket ist eine Review-Runde enthalten, in der Sie Fragen klären können. Zusätzliche Beratungsrunden sind optional buchbar.'
            )}
            
            ${this.createFAQItem(
              'Welche Fachbereiche betreuen Sie?',
              'Wir arbeiten cross-disziplinär: Psychologie, Medizin, BWL, Soziologie, Pädagogik, Gesundheitswissenschaften u.v.m. Unser Team hat Erfahrung mit verschiedensten Forschungsdesigns und statistischen Verfahren.'
            )}
            
            ${this.createFAQItem(
              'Wie wird Vertraulichkeit gewährleistet?',
              'Alle Daten werden verschlüsselt übertragen und auf sicheren Servern gespeichert. Auf Wunsch unterzeichnen wir eine NDA. Nach Projektabschluss werden Ihre Daten gelöscht oder an Sie zurückgegeben.'
            )}
          </div>
        </div>
      </section>
    `;
    
    // Initialize FAQ toggles
    this.initializeFAQ();
  }
  
  createFAQItem(question, answer) {
    return `
      <div class="faq-item border border-gray-200 rounded-lg overflow-hidden">
        <button class="faq-question w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center transition-colors">
          <span class="font-semibold text-gray-900">${question}</span>
          <svg class="faq-icon w-5 h-5 text-blue-600 transform transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="faq-answer hidden px-6 py-4 bg-gray-50 text-gray-700">
          ${answer}
        </div>
      </div>
    `;
  }
  
  initializeFAQ() {
    const questions = this.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const answer = faqItem.querySelector('.faq-answer');
        const icon = question.querySelector('.faq-icon');
        
        // Toggle answer
        answer.classList.toggle('hidden');
        
        // Rotate icon
        if (answer.classList.contains('hidden')) {
          icon.style.transform = 'rotate(0deg)';
        } else {
          icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }
}

customElements.define('faq-section', FAQSection);
