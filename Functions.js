const translations = {
    en: {
        "index.completename": "Mateus Nogueira",
        "footer.devname": "by Mateus Nogueira",
        "index.aboutme": "IT professional with experience since 2018, working in various roles such as programmer, customer support, and, more recently, Business Intelligence consulting." +
                        "\n\n I'm a calm person, with an aptitude for learning new technologies and adapting to different contexts and work environments." + 
                        "\n\n Currently, I'm refocusing on software development, with an interest in different areas of programming, including web, mobile, and game development, and also seeking to improve my skills in modern frameworks." +
                        "\n\n\n Languages: Delphi, Javascript, C#, Java, Python, PHP" +
                        "\n\n Web: HTML, CSS" +
                        "\n\n Databases: Firebird, SQLServer, MySQL" +
                        "\n\n Business Intelligence: Qlik Sense, QlikView, Qlik Cloud, NPrinting, ETL" +
                        "\n\n Other: Git, Node Js, Unity, Unreal Engine, Microsoft Office" + 
                        "\n\n\n\n Contact information is provided below.",
        "index.abouttxt": "About",
        "index.experiencetxt": "Work Experience",
        "index.updatestxt": "Updates",
        "experience.txtbilden": "Bilden Resultados com Inteligência" +
                                "\n June 2021 - August 2025",
        "experience.infobilden": "Developing and Managing Business Intelligence projects primarily using Qlik Cloud, Qlik Sense, Qlik View, NPrinting.",
        "experience.txtgeovendas": "GEOvendas" +
                                "\n February 2021 - March 2021",
        "experience.infogeovendas": "Support, assisting customers in using and resolving problems on the company systems, as well as performing tests and identifying problems."
    },
    ptbr: {
        "index.completename": "Mateus Nogueira",
        "footer.devname": "by Mateus Nogueira",
        "index.aboutme": "Profissional de TI com experiência desde 2018, atuando em diferentes funções como programador, suporte ao cliente e, mais recentemente, consultoria em Business Intelligence." +
                        "\n\n Sou uma pessoa calma, com facilidade para aprender novas tecnologias e me adaptar a diferentes contextos e ambientes de trabalho." + 
                        "\n\n Atualmente estou focando novamente em desenvolvimento de software, com interesse em diferentes áreas da programação, incluindo desenvolvimento Web, Mobile e jogos, além de estar buscando evoluir em frameworks modernos." + 
                        "\n\n\n Linguagens: Delphi, Javascript, C#, Java, Python, PHP" +
                        "\n\n Web: HTML, CSS" +
                        "\n\n Bancos de dados: Firebird, SQLServer, MySQL" +
                        "\n\n Business Intelligence: Qlik Sense, QlikView, Qlik Cloud, NPrinting, ETL" +
                        "\n\n Outros: Git, Node Js, Unity, Unreal Engine, Microsoft Office" + 
                        "\n\n\n\n Segue abaixo algumas formas para contato.",
        "index.abouttxt": "Sobre",
        "index.experiencetxt": "Experiência",
        "index.updatestxt": "Updates",
        "experience.txtbilden": "Bilden Resultados com Inteligência" +
                                "\n Junho 2021 - Agosto 2025",
        "experience.infobilden": "Desenvolvendo e fazendo manutenção de projetos de Business Intelligence utilizando principalmente Qlik Sense, Qlik View, Qlik Cloud, Nprinting.",
        "experience.txtgeovendas": "GEOvendas" +
                                "\n Fevereiro 2021 - Março 2021",
        "experience.infogeovendas": "Suporte, auxiliando clientes a resolver problemas e navegar nos sistemas, além de fazer testes e identificar problemas."
    }
};

function setLanguage(language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    //save user preference to localStorage
    localStorage.setItem('preferredLang', language);

    const iconBr = document.getElementById("BrazilIcon");
    const iconUs = document.getElementById("UsaIcon");

    if(language == 'ptbr') {
        
        iconBr.classList.add("BorderLangIcon");
        iconUs.classList.remove("BorderLangIcon");

    } else if(language == 'en') {

        iconBr.classList.remove("BorderLangIcon");
        iconUs.classList.add("BorderLangIcon");
    }

}

// Set the default or saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'ptbr';
    setLanguage(savedLang);
});