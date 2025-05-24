// Original Cookie Banner Logic (jQuery)
$(document).ready(function () {
    var aceptarCookies = $("#aceptar");
    var contenedorCookies = $("#cookies");
  
    aceptarCookies.on("click", function () {
      contenedorCookies.fadeOut();
    });
  });

// Language Switch Logic (Vanilla JS)
document.addEventListener('DOMContentLoaded', () => { // Ensures DOM is ready for vanilla JS part
    const langToggle = document.getElementById('langToggle');
    const langEsLabel = document.querySelector('.lang-label.lang-es');
    const langEnLabel = document.querySelector('.lang-label.lang-en');

    const navLinks = {
        inicio: {
            es: "Inicio",
            en: "Home"
        }
    };

    const pageTexts = {
        textoSuperior: {
            es: "¡Hola! Soy Pablo Vega, un apasionado de la tecnología y la inteligencia artificial. Me encanta aprender y enfrentar nuevos retos, siempre buscando mejorar mis habilidades y explorar nuevas oportunidades en el desarrollo de software. Me motiva la creación de soluciones innovadoras y la optimización de procesos mediante la inteligencia artificial.",
            en: "Hi! I'm Pablo Vega, passionate about technology and artificial intelligence. I love learning and facing new challenges, always looking to improve my skills and explore new opportunities in software development. I am motivated by creating innovative solutions and optimizing processes through artificial intelligence."
        },
        estudiosContenido: {
            es: "Estudié Sistemas Microinformáticos y Redes en el IES Mar de Cádiz, donde adquirí conocimientos en sistemas operativos, software de ofimática, administración de sistemas y gestión de redes informáticas; realicé mis prácticas de este ciclo en Bodegas Fundador SLU. Posteriormente, cursé Desarrollo de Aplicaciones Web en la Fundación CEU Andalucía, especializándome en tecnologías como Java, JavaScript, HTML, CSS, PHP y bases de datos. Mis prácticas de este ciclo también fueron en Bodegas Fundador SLU, donde además aprendí Flutter, Dart y WordPress.",
            en: "I studied Microcomputer Systems and Networks at IES Mar de Cádiz, where I acquired knowledge in operating systems, office software, system administration, and computer network management; I completed my internship for this program at Bodegas Fundador SLU. Subsequently, I pursued Web Application Development at Fundación CEU Andalucía, specializing in technologies such as Java, JavaScript, HTML, CSS, PHP, and databases. My internship for this program was also at Bodegas Fundador SLU, where I also learned Flutter, Dart, and WordPress."
        },
        interesesItem: {
            es: "<b>Intereses:</b> Desarrollo front-end e Inteligencia Artificial",
            en: "<b>Interests:</b> Front-end Development and Artificial Intelligence"
        },
        herramientasItem: {
            es: "<b>Herramientas:</b> VS Code, GitHub, Linux, phpMyAdmin, Postman",
            en: "<b>Tools:</b> VS Code, GitHub, Linux, phpMyAdmin, Postman"
        },
        iaItem: {
            es: "<b>Inteligencia Artifical:</b> Experimentación con IA open-source localmente, utilizando herramientas como Pinokio, Ollama, ComfyUI, entre otros.",
            en: "<b>Artificial Intelligence:</b> Experimentation with open-source AI locally, using tools like Pinokio, Ollama, ComfyUI, among others."
        },
        cookiesTitulo: {
            es: "¿Aceptas nuestras Cookies?",
            en: "Do you accept our Cookies?"
        },
        cookiesMensaje: {
            es: "Usamos cookies para mejorar tu experiencia en nuestra web.",
            en: "We use cookies to improve your experience on our website."
        },
        aceptar: { // For the button text, using its ID
            es: "Aceptar",
            en: "Accept"
        },
        verCookies: { // For the link text, using its ID
            es: "Ver página de cookies",
            en: "View cookie page"
        },
        footerCopyright: {
            es: "©2025-Pablo Vega. Todos los derechos reservados",
            en: "©2025-Pablo Vega. All rights reserved"
        }
    };

    function updateTextContent(language) {
        // Update Nav
        document.querySelector('#barra-navegacion a[href="Principal.html"]').textContent = navLinks.inicio[language];

        // Update Page Texts using IDs
        document.getElementById('textoSuperior').innerHTML = pageTexts.textoSuperior[language];
        document.getElementById('estudiosContenido').innerHTML = pageTexts.estudiosContenido[language];
        document.getElementById('interesesItem').innerHTML = pageTexts.interesesItem[language];
        document.getElementById('herramientasItem').innerHTML = pageTexts.herramientasItem[language];
        document.getElementById('iaItem').innerHTML = pageTexts.iaItem[language];
        
        document.getElementById('cookiesTitulo').textContent = pageTexts.cookiesTitulo[language];
        document.getElementById('cookiesMensaje').textContent = pageTexts.cookiesMensaje[language];
        document.getElementById('aceptar').textContent = pageTexts.aceptar[language];
        document.getElementById('verCookies').textContent = pageTexts.verCookies[language];
        document.getElementById('footerCopyright').textContent = pageTexts.footerCopyright[language];

        // Update active labels for the switch
        if (language === 'es') {
            langEsLabel.classList.add('active');
            langEnLabel.classList.remove('active');
            document.documentElement.lang = 'es';
        } else {
            langEnLabel.classList.add('active');
            langEsLabel.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        
        localStorage.setItem('preferredLanguage', language);
    }

    // Ensure toggle and labels exist to prevent errors if HTML structure is missing
    if (langToggle && langEsLabel && langEnLabel) {
        langToggle.addEventListener('change', function() {
            if (this.checked) {
                updateTextContent('en');
            } else {
                updateTextContent('es');
            }
        });

        langEsLabel.addEventListener('click', () => {
            if (langToggle.checked) {
                langToggle.checked = false;
                updateTextContent('es');
            }
        });

        langEnLabel.addEventListener('click', () => {
            if (!langToggle.checked) {
                langToggle.checked = true;
                updateTextContent('en');
            }
        });

        const preferredLanguage = localStorage.getItem('preferredLanguage');
        if (preferredLanguage === 'en') {
            langToggle.checked = true;
            updateTextContent('en');
        } else {
            updateTextContent('es'); 
        }
    } else {
        console.warn("Language toggle elements (langToggle, langEsLabel, or langEnLabel) not found. Language switching may not work as expected.");
        // Fallback: try to set default language for main content if possible
        if(document.getElementById('textoSuperior') && pageTexts.textoSuperior) document.getElementById('textoSuperior').innerHTML = pageTexts.textoSuperior.es;
        if(document.getElementById('estudiosContenido') && pageTexts.estudiosContenido) document.getElementById('estudiosContenido').innerHTML = pageTexts.estudiosContenido.es;
        // Add other essential elements here if needed for default display
        document.documentElement.lang = 'es'; // Default lang attribute
    }
});