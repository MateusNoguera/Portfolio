const translations = {
    en: {
        "welcome.title": "Welcome to Our Website",
        "welcome.message": "We are glad you are here!",
        "index.aboutme": "I started working in IT in May 2018, as a programmer and IT Infrastructure Support, helping with the maintenance and installation of the computers at the company where I worked during that period." +
                        "\n Primarily using Delphi with SQL Server and Firebird databases." + 
                        "\n\n Sendo esse o foco durante quase 3 anos. Por volta de 3 meses durante este período também atuei como desenvolvedor mobile, utilizando principalmente Kotlin, Android Studio e Node Js." + 
                        "\n\n Depois disso, por mais de 4 anos, trabalhei como consultor B.I. , utilizando principalmente as tecnologias Qlik Sense, Qlik View e bancos de dados diversos." + 
                        "\n\n Atualmente meu principal objetivo é voltar a trabalhar com programação. É a área específica em que eu mais me destaco e mais tenho vontade de crescer." +
                        "\n Também é a área que mais me da satisfação de atuar e aprender novas tecnologias." + 
                        "\n No momento não estou buscando uma linguágem em específico, mas me inserir novamente em um cargo de programador/desenvolvedor." + 
                        "\n\n Sou uma pessoa mais reservada, inicialmente não de falar muito, porém com o tempo e convivência isso tende mudar." + 
                        "\n\n Tenho facilidade em aprender novas tecnologias, além de me adaptar rapidamente em ambientes novos." + 
                        "\n\n\n\n Para contato e mais informações deixo abaixo meus perfis do LinkedIn e GitHub."
    },
    pt: {
        "welcome.title": "Bem-vindo ao nosso site",
        "welcome.message": "Estamos felizes que você está aqui!",
        "index.aboutme": "Comecei a trabalhar na área de T.I. em Maio de 2018 como programador e também de suporte técnico, na parte de manutenção e instalação dos computadores da empresa em que eu trabalhava nesse período." +
                        "\n Utilizando principalmente Delphi e os bancos de dados SQL Server e Firebird." + 
                        "\n\n Sendo esse o foco durante quase 3 anos. Por volta de 3 meses durante este período também atuei como desenvolvedor mobile, utilizando principalmente Kotlin, Android Studio e Node Js." + 
                        "\n\n Depois disso, por mais de 4 anos, trabalhei como consultor B.I. , utilizando principalmente as tecnologias Qlik Sense, Qlik View e bancos de dados diversos." + 
                        "\n\n Atualmente meu principal objetivo é voltar a trabalhar com programação. É a área específica em que eu mais me destaco e mais tenho vontade de crescer." +
                        "\n Também é a área que mais me da satisfação de atuar e aprender novas tecnologias." + 
                        "\n No momento não estou buscando uma linguágem em específico, mas me inserir novamente em um cargo de programador/desenvolvedor." + 
                        "\n\n Sou uma pessoa mais reservada, inicialmente não de falar muito, porém com o tempo e convivência isso tende mudar." + 
                        "\n\n Tenho facilidade em aprender novas tecnologias, além de me adaptar rapidamente em ambientes novos." + 
                        "\n\n\n\n Para contato e mais informações deixo abaixo meus perfis do LinkedIn e GitHub."
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
}

// Set the default or saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
});