const translations = {
    en: {
        "header.resumecv": "Resume (CV)",
        "header.roadmap": "Roadmap",
        "header.projects": "Projects",
        "main.dev.name": "Mateus Nogueira",
        "main.dev.description": 
                            "Developer with experience in Business Intelligence and software development, interested in web applications, backend, APIs and game development." +
                            "\n\nI'm a calm person, with an aptitude for learning new technologies and adapting to different contexts and work environments." +
                            "\n\nRecently used: HTML, CSS, JavaScript, Git, Qlik Sense, QlikView, Qlik Cloud, NPrinting." + 
                            "\n\nOther technologies: Delphi, Node.js, Firebird, SQL Server, MySQL, C#, Java, Unity, Unreal Engine, Microsoft Office, Python, PHP.",
        "main.experiencetitle": "Experience",
        "main.experience.bilden.name": "Bilden Resultados com Inteligência",
        "main.experience.bilden.period": "June 2021 - August 2025",
        "experience.bilden.description": "Developing and Managing Business Intelligence projects primarily using Qlik Cloud, Qlik Sense, Qlik View, NPrinting."
    },
    ptbr: {
        "header.resumecv": "Currículo",
        "header.roadmap": "Roadmap",
        "header.projects": "Projetos",
        "main.dev.name": "Mateus Nogueira",
        "main.dev.description": 
                            "Desenvolvedor com experiência em Business Intelligence e desenvolvimento de software, com interesse em aplicações web, backend, API's e desenvolvimento de jogos." +
                            "\n\nSou uma pessoa calma, com facilidade para aprender novas tecnologias e me adaptar a diferentes contextos e ambientes de trabalho." +
                            "\n\nTecnologias usadas recentemente: HTML, CSS, JavaScript, Git, Qlik Sense, QlikView, Qlik Cloud, NPrinting." + 
                            "\n\nOutras tecnologias: Delphi, Node Js, Firebird, SQLServer, MySQL, C#, Java, Unity, Unreal Engine, Microsoft Office, Python, PHP.",
        "main.experiencetitle": "Experiência",
        "main.experience.bilden.name": "Bilden Resultados com Inteligência",
        "main.experience.bilden.period": "Junho 2021 - Agosto 2025",
        "experience.bilden.description": "Desenvolvendo e fazendo manutenção de projetos de Business Intelligence utilizando principalmente Qlik Sense, Qlik View, Qlik Cloud, Nprinting."
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    localStorage.setItem('preferredLang', language);

}

//On page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ptbr';
    setLanguage(savedLang);
});