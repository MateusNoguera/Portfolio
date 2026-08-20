const translations = {
    ptbr: {
        "site.title": "Mateus Nogueira | Portfólio",

        "header.home": "Início",
        "header.experience": "Experiência",
        "header.languages": "Idiomas",
        "header.projects": "Projetos",
        "header.contact": "Contato",

        "sections.experience": "Experiência",
        "sections.languages": "Idiomas",
        "sections.projects": "Projetos",
        "sections.contact": "Contato",

        "main.dev.name": "Mateus Nogueira",
        "main.dev.description": "Desenvolvedor com experiência em Business Intelligence e desenvolvimento de software, com interesse em programação, principalmente backend e desenvolvimento de jogos." +
                                "\n\nSou uma pessoa calma, com facilidade para aprender novas tecnologias e me adaptar a diferentes situações." +
                                "\n\nExperiência desde 2018, atuando em diferentes funções como programador, suporte ao cliente e, mais recentemente, consultoria em Business Intelligence.",
        "main.dev.technologies": "Algumas das tecnologias e ferramentas com as quais mais gosto, combinando desenvolvimento web, backend, desenvolvimento de jogos e Business Intelligence.",
        
        "experience.bilden.name": "Bilden Resultados com Inteligência",
        "experience.bilden.period": "Junho 2021 - Agosto 2025",
        "experience.bilden.description": "Desenvolvendo e fazendo manutenção de projetos de Business Intelligence utilizando principalmente Qlik Sense, QlikView, NPrinting e Qlik Cloud.",
        "experience.geovendas.name": "GEOvendas",
        "experience.geovendas.period": "Fevereiro 2021 - Março 2021",
        "experience.geovendas.description": "Suporte, auxiliando clientes a resolver problemas e navegar nos sistemas, além de fazer testes e identificar problemas.",
        "experience.bytecom.name": "Bytecom Sistemas",
        "experience.bytecom.period": "Setembro 2020 - Novembro 2020",
        "experience.bytecom.description": "Desenvolvedor Delphi, front-end e back-end, implementando e gerenciando funcionalidades no sistema ERP da empresa." +
                                          "\n Desenvolvedor Mobile, usando Kotlin, Android Studio e Node.Js.",
        "experience.dessis.name": "Dessis Sistemas",
        "experience.dessis.period": "Maio 2018 - Agosto 2020",
        "experience.dessis.description": "Desenvolvedor Delphi, front-end e back-end, implementando e gerenciando funcionalidades nos sistemas da empresa, juntamente com os bancos de dados Firebird e SQL Server.",
        
        "languages.portuguese.name": "Português",
        "languages.portuguese.level": "Nativo",
        "languages.portuguese.description": "Nasci e vivi no Brasil a vida toda.",
        "languages.english.name": "Inglês",
        "languages.english.level": "Avançado/Fluente",
        "languages.english.description": "Estudo e uso inglês há mais de 15 anos.",
        "languages.japanese.name": "Japonês",
        "languages.japanese.level": "Iniciante",
        "languages.japanese.description": "Após ouvir músicas japonesas por alguns meses, comecei a estudar o idioma como hobby."
    },

    en: {
        "site.title": "Mateus Nogueira | Portfolio",

        "header.home": "Home",
        "header.experience": "Experience",
        "header.languages": "Languages",
        "header.projects": "Projects",
        "header.contact": "Contact",

        "sections.experience": "Experience",
        "sections.languages": "Languages",
        "sections.projects": "Projects",
        "sections.contact": "Contact",
        
        "main.dev.name": "Mateus Nogueira",
        "main.dev.description": "Developer with experience in Business Intelligence and software development, interested in programming, primarily backend and game development." +
                                "\n\nI'm a calm person, with an aptitude for learning new technologies and adapting to different situations." + 
                                "\n\nExperience since 2018, working in different roles such as programmer, customer support and, more recently, Business Intelligence consulting.",
        "main.dev.technologies":"Some of the technologies and tools I enjoy the most, combining web development, backend, game development and Business Intelligence.",
        
        "experience.bilden.name": "Bilden Resultados com Inteligência",
        "experience.bilden.period": "June 2021 - August 2025",
        "experience.bilden.description": "Developing and maintaining Business Intelligence projects using mainly Qlik Sense, QlikView, NPrinting and Qlik Cloud.",
        "experience.geovendas.name": "GEOvendas",
        "experience.geovendas.period": "February 2021 - March 2021",
        "experience.geovendas.description": "Support, assisting customers in using and resolving problems on the company systems, as well as performing tests and identifying problems.",
        "experience.bytecom.name": "Bytecom Sistemas",
        "experience.bytecom.period": "September 2020 - November 2020",
        "experience.bytecom.description": "Delphi developer, front-end and back-end, implementing and managing features in the company's Enterprise Resource Planning system." +
                                          "\n Mobile Developer, using Kotlin, Android Studio and Node.Js.",
        "experience.dessis.name": "Dessis Sistemas",
        "experience.dessis.period": "May 2018 - August 2020",
        "experience.dessis.description": "Delphi developer, front-end and back-end, implementing and managing functionalities in the company's systems, along with the Firebird and SQL Server databases.",
        
        "languages.portuguese.name": "Portuguese",
        "languages.portuguese.level": "Native",
        "languages.portuguese.description": "I was born and have lived in Brazil my whole life.",
        "languages.english.name": "English",
        "languages.english.level": "Advanced/Fluent",
        "languages.english.description": "I've been learning and using English for over 15 years.",
        "languages.japanese.name": "Japanese",
        "languages.japanese.level": "Beginner",
        "languages.japanese.description": "After listening to japanese music for a few months, I started studying the language as a hobby."
    }
};

function setLanguage(language) {
    const selectedTranslation = translations[language];

    if (!selectedTranslation) {
        return;
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
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

    document.documentElement.lang = language === "ptbr" ? "pt-BR" : "en";

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
    const savedLanguage = localStorage.getItem("preferredLanguage") || "ptbr";
    const savedTheme = localStorage.getItem("preferredTheme") || "dark";

    setLanguage(savedLanguage);
    setTheme(savedTheme);
});