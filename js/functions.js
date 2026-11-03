const translations = {
    ptbr: {
        "site.title": "Mateus Nogueira | Portfólio",

        "header.about": "Sobre",
        "header.experience": "Experiência",
        "header.projects": "Projetos",
        "header.contact": "Contato",

        "hero.role": "Desenvolvedor de Software",

        "hero.description":
            "Desenvolvedor com experiência em Business Intelligence e desenvolvimento de software, com interesse em backend, desenvolvimento web e desenvolvimento de jogos.",

        "hero.projects": "Ver projetos",
        "hero.contact": "Contato",

        "sections.about": "Sobre",

        "about.description":
            "Trabalho com desenvolvimento de software desde 2018, passando por diferentes áreas como desenvolvimento, suporte ao cliente e Business Intelligence. Gosto de aprender novas tecnologias e me adaptar a diferentes ambientes."
    },

    en: {
        "site.title": "Mateus Nogueira | Portfolio",

        "header.about": "About",
        "header.experience": "Experience",
        "header.projects": "Projects",
        "header.contact": "Contact",

        "hero.role": "Software Developer",

        "hero.description":
            "Software developer with experience in Business Intelligence and software development, with an interest in backend, web development and game development.",

        "hero.projects": "View projects",
        "hero.contact": "Contact",

        "sections.about": "About",

        "about.description":
            "I've worked with software development since 2018, across development, customer support and Business Intelligence. I enjoy learning new technologies and adapting to different environments."
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