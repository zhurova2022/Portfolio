let lang = 'en';
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  allowTouchMove: false,
  breakpoints:{
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
      allowTouchMove: true,
    }
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

var swiper = new Swiper(".Reviews", {
  loop: true,
  allowTouchMove: false,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    650: {
      allowTouchMove: true,
    }
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


const languages = {
  en:{
    dateLang: 'en-US',
    linkAbout: 'About me',
    linkSkills: 'Technical skills',
    linkProjects: 'Projects',
    linkEducation: 'Education',
    linkExperience: 'Experience', 
    title: 'Alisa Zhurova',
    job: 'Front-End Developer',
    desc: 'Now I work as the head of the IT sector at JSC "Vitebskdrev", and in my free time I develop websites using HTML, CSS(SCSS), JS/JQuery, and WordPress. I also study MS SQL server and 1C programming.',
    telegram: 'Write to me in Telegram!',
    collegeWork: 'Laboratory technician',
    collegePlace: 'Vitebsk State Polytechnic College (2016-2018)',
    collegeInstall: 'installing the software;',
    collegePrograms: 'work in Microsoft Office (Word, Excel, PowerPoint);',
    collegeSend: 'sending messages by e-mail;',
    collegeMake: 'making copies of documents and systematization of documents;',
    collegeMonitoring: 'monitoring the condition of the equipment used and timely informing the management about the need for its repair or replacement;',
    collegeAcceptance: 'acceptance of applications and documents of applicants in the admissions committee.',
    drevWork: 'Leading software engineer',
    drevPlace: 'JSC "Vitebskdrev" (2018 - 2023)',
    drevInstall: 'installing the software;',
    drevDevelopment: 'development of instructions for working with programs, preparation of the necessary technical documentation;',
    drevImplementation: 'implementation of maintenance of implemented programs and software tools;',
    drevAdvising: 'advising users on software and work in 1C ERP, 1C Accounting;',
    drevReceiving: 'receiving, processing, storing and printing information received by e-mail, as well as sending messages to interested parties;',
    drevProblems: 'solve user problems related to the correct operation of software products and tools in a timely manner;',
    drevWebsite: 'during my work, I have created a corporate website and administer it;',
    drevMetrics: 'also I developed your own theme for the site JSC Vitebskdrev on WordPress, and installed settings Yandex metrics and Google search console.',
    drevupWork: 'Head of the sector IT',
    drevupPlace: 'JSC "Vitebskdrev" (2023 - Present)',
    drevupMarketing: 'conducting marketing of the electronic information market;',
    drevupBuy: 'purchase of computer hardware and software;',
    drevupEvents: 'carrying out activities for the creation, maintenance, development and information support of a computer hardware system, solving engineering, economic and other production tasks;',
    drevupBd: 'designing database structures and access mechanisms;',
    drevupRegulations: 'development and maintenance of regulations for work with information and computing systems;',
    drevupIntegration: 'development of organizational and technical measures for the introduction of computer technology;',
    drevupSupport: 'maintenance of system software for computing facilities, instrumental and applied software;',
    drevupСybersecurity: 'ensuring information security at the enterprise;',
    drevupSoftware: 'installation and updating of operating systems, application and office software;',
    drevupNetwork: 'ensuring the smooth functioning of the local computer network;',
    drevupWeb: 'development and administration of the company\'s website;',
    drevup1c: 'drafting instructions, training and advising users on software and work in 1C:Accounting, 1C:ERP, 1C:ZUP, 1C:Document management;',
    drevupServers: 'database and server administration: 1C, Kaspersky, SCUD Epicur, Zimbra, Active Directory.',
    reviewTitle: 'Reviews',
    feedbackIvan: 'Quickly. Qualitatively. Inexpensive. There were no time limits, so periodically the work went faster than we wanted. Several design options were presented. After choosing the optimal one, the design was completed to my requirements pretty quickly. After finishing the work, full  instruction was presented on how to edit everything or add it yourself to the website. Technical support remained and patient answers to stupid questions) 10/10 and my recommendation.',
    authorIvan: 'Ivan Tsyrkunovich',
    orgIvan: '360 Photography', 
    feedbackAlex: 'When we turned to Alice with a request to create a new website for our company, we didn\'t even realize how lucky we were! Communication was easy, the work was done quickly and on time, and all our wishes were heard and taken into account. The design of the website turned out to be an incredibly exciting activity - and first of all, thanks to her creative approach, flair and ability to suggest and implement the right and interesting idea at the right time! Alice is a Professional with a capital letter and a specialist whom I would be happy to recommend to anyone who dreams of creating a great and effective website!',
    authorAlex: 'Alexandra Saks',
    orgAlex: 'Musikschule Saks', 
    collegeTitle: 'Vitebsk State Polytechnic College (2012-2016)',
    collegeEducation: 'Specialization: Information technology software',
    universityTitle: 'Vitebsk State University named after P.M. Masherova (2016-2020)',
    universityEducation: 'Specialization: Information technology software',
    leonTitle: 'Leon (2020)',
    leonEducation: 'Learning English at A1-A2 level.',
    leonDesc: 'Now my English level is A2.',
    educationTitle: 'Education',
    PlatformTitle: '1C Certificate:The Professional (2024)',
    PlatformEducation: 'knowledge of the basic mechanisms of the 1C platform:Enterprise 8.3',
    ncotTitle: 'National Traffic Exchange Center (2024)',
    ncotEducation: 'Fundamentals of information security of an organization',
    bacisAdm: 'Basics of 1C Administration (2024)',
    Adm: '1C System Administration (2024)',
    AdmTitle: '1C Certificate:The Professional (2024)',
    AdmEducation: 'knowledge of the architecture and administrative tools of the 1C platform:Enterprise 8.3',
    ERPTitle: '1C Certificate:The Professional (2024)',
    ERPEducation: 'to know the possibilities and features of using a typical 1C:ERP configuration',
    kiberTitle: 'National Center for Personal Data Protection of the Republic of Belarus (2025)',
    kiberEducation: 'Ensuring the security of critical information facilities'
  },
  ru:{
    dateLang: 'ru',
    linkAbout: 'Обо мне',
    linkSkills: 'Технические навыки',
    linkProjects: 'Проекты',
    linkEducation: 'Образование',
    linkExperience: 'Опыт работы', 
    title: 'Алиса Журова ',
    job: 'Веб-программист',
    desc: 'Сейчас работаю начальником сектора ИТ на предприятии ОАО "Витебскдрев", а в свободное время разрабатываю веб-сайты, используя HTML, CSS(SCSS), JS/JQuery, WordPress. Дополнительно изучаю MS SQL server и программирование в 1С.',
    telegram: 'Пишите мне в телеграм!',
    collegeWork: 'Лаборант',
    collegePlace: 'Витебский государственный политехнический колледж (2016-2018)',
    collegeInstall: 'установка программного обеспечения;',
    collegePrograms: 'работа в Microsoft Office (Word, Excel, PowerPoint);',
    collegeSend: 'рассылка писем по электронной почте;',
    collegeMake: 'изготовление копий документов и систематизирование документации;',
    collegeMonitoring: 'отслеживание состояния используемой техники и своевременное информирование руководства о необходимости её ремонта или замены;',
    collegeAcceptance: 'Прием заявлений и документов абитуриентов в приемной комиссии.',
    drevWork: 'Ведущий инженер-программист',
    drevPlace: 'ОАО "Витебскдрев" (2018 - 2023)',
    drevInstall: 'установка программного обеспечения;',
    drevDevelopment: 'разработка инструкций по работе с программами, оформление необходимой технической документации;',
    drevImplementation: 'осуществление сопровождения внедрённых программ и программных средств;',
    drevAdvising: 'консультирование пользователей по программному обеспечению и работе с 1с: Бухгалтерия, 1с : ERP;',
    drevReceiving: 'приём, обработка, хранение и распечатка информации, поступающей по электронной почте, а также рассылка электронных сообщений заинтересованным лицам;',
    drevProblems: 'своевременно решать проблемы пользователей, связанные с правильной эксплуатацией программных продуктов и средств;',
    drevWebsite: 'разработка и администрирование веб-сайта предприятия;',
    drevMetrics: 'разработка собственной темы для сайта предприятия на WordPress, а также настройка яндекс метрики и Google search console.',
    drevupWork: 'Начальник сектора ИТ',
    drevupPlace: 'ОАО "Витебскдрев" (2023 - По настоящее время)',
    drevupMarketing: 'проведение маркетинга электронного информационного рынка;',
    drevupBuy: 'приобретение компьютерного оборудования и программного обеспечения;',
    drevupEvents: 'проведение мероприятий по созданию, обслуживанию развитию и информационному обеспечению системы средств вычислительной техники, решения инженерных, экономических и других задач произвоственного характера;',
    drevupBd: 'проектирование структур баз данных и механизмов доступа к ним;',
    drevupRegulations: 'разработка и обеспечение регламента работ с информационно-вычислительными системами;',
    drevupIntegration: 'разработка организационно-технических мероприятий по внедрению средств вычислительной техники;',
    drevupSupport: 'сопровождение системного программного обеспечения вычислительных средств, инструментальных и прикладных программных средств;',
    drevupСybersecurity: 'обеспечение информационной безопасности на предприятии;',
    drevupSoftware: 'установка и обновление операционных систем, прикладного и офисного ПО;',
    drevupNetwork: 'обеспечение бесперебойногого функционирования локальной вычислительной сети;',
    drevupWeb: 'разработка и администрирование веб-сайта предприятия;',
    drevup1c: 'составление инструкций, обучение и консультирование пользователей по программному обеспечению и работе в 1С:Бухгалтерия, 1С:ERP, 1С:ЗУП, 1С:Документооборот;',
    drevupServers: 'администрирование баз данных и серверов: 1С, Kaspersky, СКУД Эпикур, Zimbra, Active Directory;',
    reviewTitle: 'Отзывы',
    feedbackIvan: 'Быстро. Качественно. Недорого. По времени небыло ограничений, так что переодически работа шла быстрее чем хотелось. Было представлено несколько вариантов дизайна, после выбора оптимального, допиливалось под мои хотелки, тоже всё быстро. По окончании работы была представлена полная развёрнута инструкция как всё править или добавлять самостоятельно, но всё равно техподдержка осталась. Терпеливые ответы на глупые вопросы) 10/10 и моя рекомендация',
    authorIvan: 'Иван Цыркунович',
    orgIvan: '360 Photography', 
    feedbackAlex: 'Когда мы обратились с просьбой о создании нового сайта нашей компании, мы даже не предполагали, как нам повезло! Общение проходило легко, работа выполнялась быстро и в сроки, а все наши пожелания были услышаны и учтены. Оформление сайта оказалось невероятно увлекательным занятием -  и в первую очередь, благодаря её творческому подходу, чутью и умению в нужный момент подсказать и воплотить нужную и интересную идею! Алиса является Профессионалом с большой буквы и специалистом, которого я с радостью порекомендую всем, кто мечтает о создании великолепного и эффективного сайта!',
    authorAlex: 'Александра Сакс',
    orgAlex: 'Музыкальная школа Saks',
    collegeTitle: 'Витебский политехнический колледж (2012-2016)',
    collegeEducation: 'Специальность: Программное обеспечение информационных технологий',
    universityTitle: 'Витебский государственный университет имени Машерова (2016-2020)',
    universityEducation: 'Специальность: Программное обеспечение информационных технологий',
    leonTitle: 'Leon (2020)',
    leonEducation: 'Изучение английского языка на уровне A1-A2.',
    leonDesc: 'Сейчас уровень владения английского языка - А2.',
    educationTitle: 'Образование',
    PlatformTitle: 'Сертификат 1С:Профессионал (2024)',
    PlatformEducation: 'на знание основных механизмов платформы 1С:Предприятие 8.3',
    ncotTitle: 'Национальный центр обмена трафиком (2024)',
    ncotEducation: 'Основы информационной безопасности организации',
    bacisAdm: 'Основы "1С администрирования (2024)',
    Adm: 'Администрирование системы 1С (2024)',
    AdmTitle: 'Сертификат 1С:Профессионал (2024)',
    AdmEducation: 'на знание архитектуры и инструментов администрирования платформы 1С:Предприятие 8.3',
    ERPTitle: 'Сертификат 1С:Профессионал (2024)',
    ERPEducation: 'на знание возможностей и особенностей применения типовой конфигурации 1С:ERP',
    kiberTitle: 'Национальный центр защиты персональных данных Республики Беларусь (2025)',
    kiberEducation: 'Обеспечение безопасности критически важных объектов информатизации'
  }
};

const buttonRu = document.querySelector('.button_ru');
const buttonEn = document.querySelector('.button_en');

buttonRu.addEventListener('click', () =>{
  lang = 'ru'; 
  SettingTranscription();
  buttonRu.classList.add('active');
  buttonEn.classList.remove('active');
})
buttonEn.addEventListener('click', () =>{
  lang = 'en';
  SettingTranscription();
  buttonRu.classList.remove('active');
  buttonEn.classList.add('active');
})

function SettingTranscription(){
  document.querySelector('.about-link').textContent = languages[lang].linkAbout;
  document.querySelector('.skills-link').textContent = languages[lang].linkSkills;
  document.querySelector('.projects-link').textContent = languages[lang].linkProjects;
  document.querySelector('.education-link').textContent = languages[lang].linkEducation;
  document.querySelector('.work-link').textContent = languages[lang].linkExperience;

  document.querySelector('.title').textContent = languages[lang].title;
  document.querySelector('.job').textContent = languages[lang].job;
  document.querySelector('.desc p').textContent = languages[lang].desc;
  document.querySelector('.telegram a p').textContent = languages[lang].telegram;

  document.querySelector('.skills h2').textContent = languages[lang].linkSkills;
  document.querySelector('.projects h2').textContent = languages[lang].linkProjects;
  document.querySelector('.experience h2').textContent = languages[lang].linkExperience;

  document.querySelector('.college-work').textContent = languages[lang].collegeWork;
  document.querySelector('.college-place').textContent = languages[lang].collegePlace;
  document.querySelector('.college-functions_install').textContent = languages[lang].collegeInstall;
  document.querySelector('.college-functions_work').textContent = languages[lang].collegePrograms;
  document.querySelector('.college-functions_send').textContent = languages[lang].collegeSend;
  document.querySelector('.college-functions_make').textContent = languages[lang].collegeMake;
  document.querySelector('.college-functions_monitoring').textContent = languages[lang].collegeMonitoring;
  document.querySelector('.college-functions_acceptance').textContent = languages[lang].collegeAcceptance;

  document.querySelector('.drev-work').textContent = languages[lang].drevWork;
  document.querySelector('.drev-place').textContent = languages[lang].drevPlace;
  document.querySelector('.drev-functions_install').textContent = languages[lang].drevInstall;
  document.querySelector('.drev-functions_development').textContent = languages[lang].drevDevelopment;
  document.querySelector('.drev-functions_implementation').textContent = languages[lang].drevImplementation;
  document.querySelector('.drev-functions_advising').textContent = languages[lang].drevAdvising;
  document.querySelector('.drev-functions_receiving').textContent = languages[lang].drevReceiving;
  document.querySelector('.drev-functions_problems').textContent = languages[lang].drevProblems;
  document.querySelector('.drev-functions_website').textContent = languages[lang].drevWebsite;
  document.querySelector('.drev-functions_metrics').textContent = languages[lang].drevMetrics;

  document.querySelector('.drevup-work').textContent = languages[lang].drevupWork;
  document.querySelector('.drevup-place').textContent = languages[lang].drevupPlace;
  document.querySelector('.drevup-functions_marketing').textContent = languages[lang].drevupMarketing;
  document.querySelector('.drevup-functions_buy').textContent = languages[lang].drevupBuy;
  document.querySelector('.drevup-functions_events').textContent = languages[lang].drevupEvents;
  document.querySelector('.drevup-functions_bd').textContent = languages[lang].drevupBd;
  document.querySelector('.drevup-functions_regulations').textContent = languages[lang].drevupRegulations;
  document.querySelector('.drevup-functions_integration').textContent = languages[lang].drevupIntegration;
  document.querySelector('.drevup-functions_support').textContent = languages[lang].drevupSupport;
  document.querySelector('.drevup-functions_cybersecurity').textContent = languages[lang].drevupСybersecurity;
  document.querySelector('.drevup-functions_software').textContent = languages[lang].drevupSoftware;
  document.querySelector('.drevup-functions_network').textContent = languages[lang].drevupNetwork;
  document.querySelector('.drevup-functions_web').textContent = languages[lang].drevupWeb;
  document.querySelector('.drevup-functions_1c').textContent = languages[lang].drevup1c;
  document.querySelector('.drevup-functions_servers').textContent = languages[lang].drevupServers;

  document.querySelector('.reviews h2').textContent = languages[lang].reviewTitle;

  document.querySelector('.feedback_ivan p').textContent = languages[lang].feedbackIvan;
  document.querySelector('.author_ivan p').textContent = languages[lang].authorIvan;
  document.querySelector('.org_ivan p').textContent = languages[lang].orgIvan;

  document.querySelector('.feedback-alex p').textContent = languages[lang].feedbackAlex;
  document.querySelector('.author_alex p').textContent = languages[lang].authorAlex;
  document.querySelector('.org_alex p').textContent = languages[lang].orgAlex;

  document.querySelector('.college-title').textContent = languages[lang].collegeTitle;
  document.querySelector('.college-education').textContent = languages[lang].collegeEducation;

  document.querySelector('.university-title').textContent = languages[lang].universityTitle;
  document.querySelector('.university-education').textContent = languages[lang].universityEducation;

  document.querySelector('.leon-title').textContent = languages[lang].leonTitle;
  document.querySelector('.leon-education').textContent = languages[lang].leonEducation;
  document.querySelector('.leon-desc').textContent = languages[lang].leonDesc;

  document.querySelector('.education h2').textContent = languages[lang].educationTitle;
  

  document.querySelector('.Platform-title').textContent = languages[lang].PlatformTitle;
  document.querySelector('.Platform-education').textContent = languages[lang].PlatformEducation;

  document.querySelector('.ncot-title').textContent = languages[lang].ncotTitle;
  document.querySelector('.ncot-education').textContent = languages[lang].ncotEducation;

  document.querySelector('.basicAdm-title').textContent = languages[lang].bacisAdm;

  document.querySelector('.Adm-title').textContent = languages[lang].Adm;

  document.querySelector('.CAdm-title').textContent = languages[lang].AdmTitle;
  document.querySelector('.CAdm-education').textContent = languages[lang].AdmEducation;

  document.querySelector('.ERP-title').textContent = languages[lang].ERPTitle;
  document.querySelector('.ERP-education').textContent = languages[lang].ERPEducation;

  document.querySelector('.kiber-title').textContent = languages[lang].kiberTitle;
  document.querySelector('.kiber-education').textContent = languages[lang].kiberEducation;
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');

    if (lang === 'ru') {
      buttonRu.classList.add('active');
      buttonEn.classList.remove('active');
    } 
    else if (lang === 'en'){
      buttonRu.classList.remove('active');
      buttonEn.classList.add('active');
    }
    
    SettingTranscription();
  }
}
window.addEventListener('load', getLocalStorage);

if (lang === 'ru') {
  buttonRu.classList.add('active');
  buttonEn.classList.remove('active');
} 
else if (lang === 'en'){
  buttonRu.classList.remove('active');
  buttonEn.classList.add('active');
}

console.log(lang)
