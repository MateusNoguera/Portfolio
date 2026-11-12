const translations = {
    ptbr: {
        "site.title": "Mateus Nogueira | Portfólio",

        "header.about": "Sobre",
        "header.experience": "Experiência",
        "header.projects": "Projetos",
        "header.contact": "Contato",

        "hero.role": "Desenvolvedor de Software",

        "hero.description": "Desenvolvedor com experiência em Business Intelligence e desenvolvimento de software, com interesse em backend, desenvolvimento web e desenvolvimento de jogos.",

        "hero.projects": "Ver projetos",
        "hero.contact": "Contato",

        "sections.about": "Sobre",

        "about.description": "Trabalho com desenvolvimento de software desde 2018, passando por diferentes áreas como desenvolvimento, suporte ao cliente e Business Intelligence. Sou uma pessoa calma, com facilidade para aprender novas tecnologias e me adaptar a diferentes situações.",

        "sections.experience": "Experiência",
        "experience.bilden.role": "Consultor BI",
        "experience.bilden.company": "Bilden Resultados com Inteligência",
        "experience.bilden.period": "Junho 2021 — Agosto 2025",
        "experience.bilden.description": "Desenvolvimento e gerenciamento de projetos em Business Intelligence, utilizando principalmente Qlik Cloud, Qlik Sense, QlikView e NPrinting.",

        "experience.geovendas.role": "Suporte ao cliente",
        "experience.geovendas.company": "GEOvendas",
        "experience.geovendas.period": "Fevereiro 2021 — Março 2021",
        "experience.geovendas.description": "Suporte aos clientes, auxiliando na utilização dos sistemas, resolução de problemas, testes e identificação de falhas.",

        "experience.bytecom.role": "Desenvolvedor de Software",
        "experience.bytecom.company": "Bytecom Sistemas",
        "experience.bytecom.period": "Setembro 2020 — Novembro 2020",
        "experience.bytecom.description": "Desenvolvimento Delphi, implementando e gerenciando funcionalidades em sistema ERP." + "\nDesenvolvimento mobile utilizando Kotlin, Android Studio e Node.js.",

        "experience.dessis.role": "Desenvolvedor de Software",
        "experience.dessis.company": "Dessis Sistemas",
        "experience.dessis.period": "Maio 2018 — Agosto 2020",
        "experience.dessis.description": "Desenvolvimento Delphi, implementando e gerenciando funcionalidades em sistemas ERP, utilizando bancos de dados Firebird e SQL Server."
    },

    en: {
        "site.title": "Mateus Nogueira | Portfolio",

        "header.about": "About",
        "header.experience": "Experience",
        "header.projects": "Projects",
        "header.contact": "Contact",

        "hero.role": "Software Developer",

        "hero.description": "Software developer with experience in Business Intelligence and software development, with an interest in backend, web development and game development.",

        "hero.projects": "View projects",
        "hero.contact": "Contact",

        "sections.about": "About",

        "about.description": "I've worked with software development since 2018, across development, customer support and Business Intelligence. I am a calm person, with an aptitude for learning new technologies and adapting to different situations.",
        
        "sections.experience": "Experience",
        "experience.bilden.role": "BI Consultant",
        "experience.bilden.company": "Bilden Resultados com Inteligência",
        "experience.bilden.period": "June 2021 — August 2025",
        "experience.bilden.description": "Development and management of Business Intelligence projects, mainly using Qlik Cloud, Qlik Sense, QlikView and NPrinting.",

        "experience.geovendas.role": "Customer Support",
        "experience.geovendas.company": "GEOvendas",
        "experience.geovendas.period": "February 2021 — March 2021",
        "experience.geovendas.description": "Customer support, assisting users with company systems, troubleshooting, testing and identifying issues.",

        "experience.bytecom.role": "Software Developer",
        "experience.bytecom.company": "Bytecom Sistemas",
        "experience.bytecom.period": "September 2020 — November 2020",
        "experience.bytecom.description": "Delphi development, implementing and managing features in an ERP system." + "\nMobile development using Kotlin, Android Studio and Node.js.",

        "experience.dessis.role": "Software Developer",
        "experience.dessis.company": "Dessis Sistemas",
        "experience.dessis.period": "May 2018 — August 2020",
        "experience.dessis.description": "Delphi development, implementing and managing features in ERP systems, using Firebird and SQL Server databases."
    }
};

function setLanguage(language) {
    const selectedTranslation = translations[language];

    if (!selectedTranslation) {
        return;
    }

    document.querySelectorAll("[data-i18n]")
            .forEach((element) => {
                const key = element.dataset.i18n;
                const translatedText = selectedTranslation[key];

                if (!translatedText) {
                    return;
                }

                if (element.tagName === "TITLE") {
                    document.title = translatedText;
                } else {
                    element.textContent = translatedText;
                }
            });

    document.documentElement.lang =
        language === "ptbr" ? "pt-BR" : "en";

    document.querySelectorAll(".LanguageButton")
            .forEach((button) => {
                button.classList.toggle(
                    "IsActive",
                    button.dataset.language === language
                );
            });

    localStorage.setItem("preferredLanguage", language);
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    document.querySelectorAll(".ThemeButton")
            .forEach((button) => {
                button.classList.toggle(
                    "IsActive",
                    button.dataset.theme === theme
                );
            });

    localStorage.setItem("preferredTheme", theme);
}

document.querySelectorAll(".LanguageButton")
        .forEach((button) => {
            button.addEventListener("click", () => {
                setLanguage(button.dataset.language);
            });
        });

document.querySelectorAll(".ThemeButton")
        .forEach((button) => {
            button.addEventListener("click", () => {
                setTheme(button.dataset.theme);
            });
        });

document.addEventListener("DOMContentLoaded", () => {
    const savedLanguage =
        localStorage.getItem("preferredLanguage") || "ptbr";

    const savedTheme =
        localStorage.getItem("preferredTheme") || "dark";

    setLanguage(savedLanguage);
    setTheme(savedTheme);
});