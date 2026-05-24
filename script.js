/* ==========================================================================
   OURA DIGITAL - PORTFOLIO INTERACTIVITY ENGINE (REAL CORPORATE INTEGRATION)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Dynamic Typing Effect (Akan Concept & Local Niches) --- */
    const typingElement = document.getElementById('typing-placeholder');
    const words = [
        "l'éclat numérique de votre entreprise.",
        "les artisans de votre croissance locale.",
        "spécialistes en solutions IA & Automatisation.",
        "votre allié pour désengorger WhatsApp."
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40; // Deletes faster
        } else {
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80; // Normal typing speed
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typingSpeed = 2200; // Delay when word is completed
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 400; // Pause before typing next word
        }

        setTimeout(typeEffect, typingSpeed);
    }
    
    if (typingElement) {
        typeEffect();
    }

    /* --- 2. Interactive Mouse Hover Tracking on Glass Card --- */
    const glassCard = document.getElementById('interactive-card');
    if (glassCard) {
        glassCard.addEventListener('mousemove', (e) => {
            const rect = glassCard.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            glassCard.style.setProperty('--mouse-x', `${x}%`);
            glassCard.style.setProperty('--mouse-y', `${y}%`);
        });
    }

    /* --- 3. Sticky Navbar & Header Scroll State --- */
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 4. Responsive Mobile Toggle Menu --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('open');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('open')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        });

        // Close menu when clicking link items
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
                const icon = mobileToggle.querySelector('i');
                icon.classList.replace('fa-xmark', 'fa-bars');
            });
        });
    }

    /* --- 5. ScrollSpy - Auto-Update Active Link on Scroll --- */
    const sections = document.querySelectorAll('section');
    
    function scrollSpyActive() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 180)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', scrollSpyActive);

    /* --- 6. About Interactive Tab Switcher --- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active classes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            // Set current active
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            const targetPane = document.getElementById(`tab-${tabId}`);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    /* --- 7. Pack Buttons Selection Micro-Interaction --- */
    const choosePackBtns = document.querySelectorAll('.choose-pack-btn');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');
    const contactSection = document.getElementById('contact');

    choosePackBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const packName = btn.getAttribute('data-pack');
            if (subjectInput && messageInput) {
                // Populate forms
                subjectInput.value = `Demande de devis - ${packName}`;
                messageInput.value = `Bonjour Ange Landry,\n\nJe souhaite échanger avec vous au sujet de l'implémentation de votre "${packName}" pour mon activité. Merci de me recontacter !`;
                
                // Force floating labels focus state
                subjectInput.dispatchEvent(new Event('input'));
                messageInput.dispatchEvent(new Event('input'));

                // Scroll smoothly to contact form
                contactSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    /* --- 8. Dynamic Modal Popup Window for Real Projects --- */
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body-content');
    const closeModalBtn = document.getElementById('modal-close-btn');
    const backdrop = document.getElementById('modal-backdrop');
    const projectCards = document.querySelectorAll('.project-card');

    // Rich Project Datastore based on Ange Landry Bile's portfolio assets
    const projectData = {
        'project-1': {
            title: 'QR Generate Master',
            category: 'Outil Digital & Automatisation',
            client: 'Commerces & Restaurants',
            date: 'Février 2026',
            bg: 'linear-gradient(135deg, #0b2240, #C89D3C)',
            icon: 'fa-qrcode',
            tags: ['PHP sur-mesure', 'AJAX', 'Tailwind CSS', 'SQL Server'],
            description: "QR Generate Master est notre outil marketing et d'automatisation de référence. Conçu pour digitaliser instantanément les établissements physiques, il permet aux commerces, hôtels et restaurants d'associer leurs supports de table physiques à des menus numériques interactifs ou des pages de paiement sécurisées. Grâce à l'utilisation combinée de PHP et d'AJAX, l'accès se fait en moins de 2 secondes, prouvant notre maîtrise de la vitesse d'exécution sur mobile."
        },
        'project-2': {
            title: 'Cap Mental',
            category: 'Plateforme Web & Ressources',
            client: 'Initiatives Sociales Côte d\'Ivoire',
            date: 'Novembre 2025',
            bg: 'linear-gradient(135deg, #0a1c30, #153a68)',
            icon: 'fa-brain',
            tags: ['Architecture Multi-pages', 'SEO Technique', 'Optimisation Accessibilité'],
            description: "Cap Mental est un portail numérique d'information et de ressources dense à fort trafic, spécialement imaginé et développé pour accompagner la jeunesse et les adolescents. Ce projet témoigne de notre savoir-faire dans l'organisation de sites web riches et volumineux, tout en garantissant un confort de lecture optimal et une fluidité absolue sur smartphone. C'est l'exemple idéal démontrant notre aptitude pour les structures éducatives, cabinets et grands instituts de formation."
        },
        'project-3': {
            title: 'Tech For Kids',
            category: 'Initiative & Formation',
            client: 'Programme Éducatif National',
            date: 'Août 2025',
            bg: 'linear-gradient(135deg, #001329, #E5C158)',
            icon: 'fa-graduation-cap',
            tags: ['Pédagogie', 'Accompagnement Équipe', 'Formation Utilisateur'],
            description: "Tech For Kids est notre programme éducatif phare d'initiation aux technologies et à la citoyenneté numérique. Plus qu'un projet technique, c'est la preuve ultime de notre engagement pédagogique. Chez Oura Digital, nous estimons que livrer un code propre ne suffit pas : nous formons systématiquement vos collaborateurs à piloter vos outils au quotidien. Une solution parfaite pour instaurer un climat de confiance solide et rassurer les équipes quant au virage digital."
        }
    };

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('id');
            const data = projectData[projectId];

            if (data) {
                // Populate detailed modal html contents dynamically
                modalBody.innerHTML = `
                    <div class="modal-hero-visual" style="background: ${data.bg};">
                        <i class="fa-solid ${data.icon}"></i>
                    </div>
                    <div class="modal-details-grid">
                        <div class="modal-text-content">
                            <h2>${data.title}</h2>
                            <p><strong>${data.category}</strong></p>
                            <p>${data.description}</p>
                        </div>
                        <div class="modal-sidebar">
                            <div class="sidebar-item">
                                <h4>Client / Secteur</h4>
                                <p>${data.client}</p>
                            </div>
                            <div class="sidebar-item">
                                <h4>Déploiement</h4>
                                <p>${data.date}</p>
                            </div>
                            <div class="sidebar-item">
                                <h4>Démonstration Technique</h4>
                                <div class="modal-tags">
                                    ${data.tags.map(tag => `<span>${tag}</span>`).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                // Open modal with smooth transition
                modal.classList.add('open');
                document.body.style.overflow = 'hidden'; // Stop scroll in back
            }
        });
    });

    function closeModal() {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    // Close on escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    /* --- 9. Glass Form Verification & Success Animation --- */
    const contactForm = document.getElementById('portfolio-contact-form');
    const successOverlay = document.getElementById('success-overlay');
    const closeSuccessBtn = document.getElementById('close-success-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Fetch inputs
            const nameInput = document.getElementById('contact-name');
            const emailInput = document.getElementById('contact-email');
            const subjectInput = document.getElementById('contact-subject');
            const messageInput = document.getElementById('contact-message');

            let isValid = true;

            // Name verification
            if (nameInput.value.trim() === '') {
                nameInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                nameInput.parentElement.classList.remove('error');
            }

            // Email/WhatsApp verification (allowing phones or emails for local ease)
            if (emailInput.value.trim() === '') {
                emailInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                emailInput.parentElement.classList.remove('error');
            }

            // Subject verification
            if (subjectInput.value.trim() === '') {
                subjectInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                subjectInput.parentElement.classList.remove('error');
            }

            // Message verification
            if (messageInput.value.trim() === '') {
                messageInput.parentElement.classList.add('error');
                isValid = false;
            } else {
                messageInput.parentElement.classList.remove('error');
            }

            if (isValid) {
                // Change submit button to visual loader
                const submitBtn = document.getElementById('contact-submit-btn');
                const originalBtnHtml = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Analyse en cours...';
                submitBtn.style.pointerEvents = 'none';

                // Simulate realistic transmission delay
                setTimeout(() => {
                    // Show success visual state
                    successOverlay.classList.add('show');
                    
                    // Reset form and btn
                    contactForm.reset();
                    submitBtn.innerHTML = originalBtnHtml;
                    submitBtn.style.pointerEvents = 'auto';

                    // Float out of labels (remove active inputs status)
                    const formGroups = contactForm.querySelectorAll('.form-group');
                    formGroups.forEach(group => group.classList.remove('error'));
                }, 1800);
            }
        });
        
        // Dynamic label support for JS prefilled values
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.placeholder = "filled"; // Keep label floating
                } else {
                    input.placeholder = " "; // Reset to placeholder default
                }
            });
        });
    }

    if (closeSuccessBtn && successOverlay) {
        closeSuccessBtn.addEventListener('click', () => {
            successOverlay.classList.remove('show');
        });
    }

});
