const translations = {
    en: {
        "welcome.title": "Welcome to Our Website",
        "welcome.message": "We are glad you are here!",
        "index.aboutme": "IT professional with experience since 2018, working in various roles such as programmer, customer support, and, more recently, Business Intelligence consulting." +
                        "\n\n I'm a calm person, with an aptitude for learning new technologies and adapting to different contexts and work environments." + 
                        "\n\n Currently, I'm refocusing on software development, with an interest in different areas of programming, including web, mobile, and game development, and also seeking to improve my skills in modern frameworks." +
                        "\n\n\n Languages: Delphi, Javascript, C#, Java, Python, PHP" +
                        "\n\n Web: HTML, CSS" +
                        "\n\n Databases: Firebird, SQLServer, MySQL" +
                        "\n\n Business Intelligence: Qlik Sense, QlikView, Qlik Cloud, NPrinting, ETL" +
                        "\n\n Other: Git, Node Js, Unity, Unreal Engine, Microsoft Office" + 
                        "\n\n\n\n Below are some ways to contact me!",
        "index.abouttxt": "About",
        "index.experiencetxt": "Work Experience",
        "index.updatestxt": "Updates"
    },
    ptbr: {
        "welcome.title": "Bem-vindo ao nosso site",
        "welcome.message": "Estamos felizes que você está aqui!",
        "index.aboutme": "Profissional de TI com experiência desde 2018, atuando em diferentes funções como programador, suporte ao cliente e, mais recentemente, consultoria em Business Intelligence." +
                        "\n\n Sou uma pessoa calma, com facilidade para aprender novas tecnologias e me adaptar a diferentes contextos e ambientes de trabalho." + 
                        "\n\n Atualmente estou focando novamente em desenvolvimento de software, com interesse em diferentes áreas da programação, incluindo desenvolvimento Web, Mobile e jogos, além de estar buscando evoluir em frameworks modernos." + 
                        "\n\n\n Linguagens: Delphi, Javascript, C#, Java, Python, PHP" +
                        "\n\n Web: HTML, CSS" +
                        "\n\n Bancos de dados: Firebird, SQLServer, MySQL" +
                        "\n\n Business Intelligence: Qlik Sense, QlikView, Qlik Cloud, NPrinting, ETL" +
                        "\n\n Outros: Git, Node Js, Unity, Unreal Engine, Microsoft Office" + 
                        "\n\n\n\n Deixo abaixo algumas formas para contato!",
        "index.abouttxt": "Sobre",
        "index.experiencetxt": "Experiência",
        "index.updatestxt": "Updates"
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    // Optional: save user preference to localStorage
    localStorage.setItem('preferredLang', language);

    if(language == 'ptbr') {
        const iconBr = document.getElementById("BrazilIcon");
        iconBr.classList.add("BorderLangIcon");
        const iconUs = document.getElementById("UsaIcon");
        iconUs.classList.remove("BorderLangIcon");
    } else if(language == 'en') {
        const iconBr = document.getElementById("BrazilIcon");
        iconBr.classList.remove("BorderLangIcon");
        const iconUs = document.getElementById("UsaIcon");
        iconUs.classList.add("BorderLangIcon");
    }

}

// Set the default or saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ptbr';
    setLanguage(savedLang);
});