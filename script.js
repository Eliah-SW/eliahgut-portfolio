const translations = {
    de: {
        heroText: "Eliah Gut",
        heroSubText: "Informatiker | Applikationsentwickler",
        aboutMe: "Ich bin im 1. Lehrjahr als Informatiker Applikationsentwickler und wohne im Kanton Freiburg. Meine Lehre habe ich gerade begonnen, und ich freue mich darauf, mein Wissen und meine Fähigkeiten in der Praxis zu vertiefen. Ich setze gerne meine Ideen in Projekte um und habe bereits einige kleine Projekte gemacht. Besonders interessieren mich Webentwicklung, Datenbanken und APIs.",
        aboutTitle: "Über mich",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        otherSkillsTitle: "Sonstiges",
        projectsTitle: "Projekte",
        hobbiesTitle: "Meine Hobbys",
        contactTitle: "Kontakt",
        projectF1: "F1 Angular Webseite",
        projectLocoGeo: "Loco Geo",
        projectFerrariAPI: "Ferrari Rest API",
        projectAutohaendler: "Auto Händler",
        tennis: "Tennis",
        hockey: "Eishockey",
        ski: "Ski",
        travel: "Reisen",
        photos: "Fotos",
        pc: "PC",
        f1Text: "Eine Webseite, die mit Angular erstellt wurde und sich mit einer F1 API verbindet. Sie zeigt alle Fahrer oder Strecken an, mit einer Detailansicht für jeden.",
        locoGeoText: "Eine Angular-Webseite, auf der du ein Flaggenquiz machen kannst. Am Ende wird eine Punktzahl mit der Anzahl der richtigen Antworten und der benötigten Zeit angezeigt.",
        ferrariAPI: "Eine REST API, die mit Java Spring Boot erstellt wurde und verschiedene Ferrari-Modelle enthält. Sie umfasst mehrere Endpunkte, an denen Ferraris sortiert und gefiltert werden können.",
        autohaendler: "Ein grosses MySQL-Projekt, bei dem wir für einen Autohändler eine Datenbank erstellt haben, mit der er alles von Mitarbeitern bis hin zu Wartungen einsehen kann.",
        moreAboutMe: "Mehr über mich",
        contactMe: "Kontakt aufnehmen",
        phone: "Telefon",
        email: "E-Mail",
        linkedin: "LinkedIn"
    },
    en: {
        heroText: "Eliah Gut",
        heroSubText: "Computer Scientist | Application Developer",
        aboutMe: "I am in my first year as an application developer apprentice and live in the canton of Fribourg. I have just started my apprenticeship and am excited to deepen my knowledge and skills in practice. I enjoy turning my ideas into projects and have already worked on a few small projects. I am particularly interested in web development, databases, and APIs.",
        aboutTitle: "About Me",
        frontendTitle: "Frontend",
        backendTitle: "Backend",
        otherSkillsTitle: "Other Skills",
        projectsTitle: "Projects",
        projectAutohaendler: "Car Dealer",
        hobbiesTitle: "My Hobbies",
        contactTitle: "Contact",
        projectF1: "F1 Angular Website",
        projectLocoGeo: "Loco Geo",
        projectFerrariAPI: "Ferrari Rest API",
        tennis: "Tennis",
        hockey: "Ice Hockey",
        ski: "Skiing",
        travel: "Traveling",
        photos: "Photography",
        pc: "PC",
        f1Text: "A website built with Angular that connects to an F1 API. It displays all drivers or tracks, with a detailed view for each.",
        locoGeoText: "An Angular website where you can take a flag quiz. At the end, it shows a score with the number of correct answers and the time taken.",
        ferrariAPI: "A REST API built with Java Spring Boot, featuring various Ferrari models. It includes several endpoints where Ferraris can be sorted and filtered.",
        autohaendler: "A big MySQL project where we created a database for a car dealer, so they can see everything from employees to maintenance.",
        moreAboutMe: "More About Me",
        contactMe: "Get in Touch",
        phone: "Phone",
        email: "Email",
        linkedin: "LinkedIn"
    }
};

function switchLanguage(language) {
    document.querySelector(".hero-text").textContent = translations[language].heroText;
    document.querySelector(".hero-subtext").textContent = translations[language].heroSubText;
    document.querySelector("#about .section-title").textContent = translations[language].aboutTitle;
    document.querySelector("#about p").textContent = translations[language].aboutMe;
    document.querySelector("#skills .section-title").textContent = translations[language].frontendTitle;
    document.querySelector("#skills + .section .section-title").textContent = translations[language].backendTitle;
    document.querySelector("#skills + .section + .section .section-title").textContent = translations[language].otherSkillsTitle;
    document.querySelector("#projects .section-title").textContent = translations[language].projectsTitle;
    document.querySelector("#hobbies .section-title").textContent = translations[language].hobbiesTitle;
    document.querySelector("#contact .section-title").textContent = translations[language].contactTitle;

    document.querySelector(".btn-primary").textContent = translations[language].moreAboutMe;
    document.querySelector(".btn-secondary").textContent = translations[language].contactMe;

    document.querySelector(".card:nth-child(1) h3").textContent = translations[language].projectF1;
    document.querySelector(".card:nth-child(1) p").textContent = translations[language].f1Text;
    document.querySelector(".card:nth-child(3) h3").textContent = translations[language].projectLocoGeo;
    document.querySelector(".card:nth-child(3) p").textContent = translations[language].locoGeoText;
    document.querySelector(".card:nth-child(2) h3").textContent = translations[language].projectFerrariAPI;
    document.querySelector(".card:nth-child(2) p").textContent = translations[language].ferrariAPI;
    document.querySelector(".card:nth-child(4) h3").textContent = translations[language].projectAutohaendler;
    document.querySelector(".card:nth-child(4) p").textContent = translations[language].autohaendler;

    document.querySelector(".hobby:nth-child(1) h3").textContent = translations[language].tennis;
    document.querySelector(".hobby:nth-child(2) h3").textContent = translations[language].hockey;
    document.querySelector(".hobby:nth-child(3) h3").textContent = translations[language].ski;
    document.querySelector(".hobby:nth-child(4) h3").textContent = translations[language].travel;
    document.querySelector(".hobby:nth-child(5) h3").textContent = translations[language].photos;
    document.querySelector(".hobby:nth-child(6) h3").textContent = translations[language].pc;

    document.querySelector("section#contact p:nth-child(2)").innerHTML = "<strong>" + translations[language].phone + ":</strong> 079 570 28 14";
    document.querySelector("section#contact p:nth-child(3)").innerHTML = "<strong>" + translations[language].email + ":</strong> eliah.gut@swisscom.com";
    document.querySelector("section#contact p:nth-child(4)").innerHTML = "<strong>" + translations[language].linkedin + ":</strong> <a href='https://www.linkedin.com/in/eliah-gut-0a7541322/' target='_blank'>Eliah Gut LinkedIn</a>";
}


document.querySelectorAll('.hero-actions a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});