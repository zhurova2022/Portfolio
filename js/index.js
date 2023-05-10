var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints:{
    650: {
      slidesPerView: 2,
      spaceBetween: 30
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

var swiper = new Swiper(".Reviews", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
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

let lang = 'en';
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
    desc: 'Now I work as a leading software engineer at JSC "Vitebskdrev", and also develop websites using HTML, CSS(SCSS), JS/JQuery, WordPress.',
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
    drevPlace: 'JSC "Vitebskdrev" (2018 - Present)',
    drevInstall: 'installing the software;',
    drevDevelopment: 'development of instructions for working with programs, preparation of the necessary technical documentation;',
    drevImplementation: 'implementation of maintenance of implemented programs and software tools;',
    drevAdvising: 'advising users on software and work in 1C ERP, 1C Accounting;',
    drevReceiving: 'receiving, processing, storing and printing information received by e-mail, as well as sending messages to interested parties;',
    drevProblems: 'solve user problems related to the correct operation of software products and tools in a timely manner;',
    drevWebsite: 'during my work, I have created a corporate website and administer it;',
    drevMetrics: 'also I developed your own theme for the site JSC Vitebskdrev on WordPress, and installed settings Yandex metrics and Google search console.',
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
    educationTitle: 'Education'
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
    desc: 'В данный момент работаю ведущим инженером-программистом на предприятии ОАО "Витебскдрев", а также разрабатываю веб-сайты, используя HTML, CSS(SCSS), JS/JQuery, WordPress.',
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
    drevPlace: 'ОАО "Витебскдрев" (2018 - По настоящее время)',
    drevInstall: 'установка программного обеспечения;',
    drevDevelopment: 'разработка инструкций по работе с программами, оформление необходимой технической документации;',
    drevImplementation: 'осуществление сопровождения внедрённых программ и программных средств;',
    drevAdvising: 'консультирование пользователей по программному обеспечению и работе с 1с: Бухгалтерия, 1с : ERP;',
    drevReceiving: 'приём, обработка, хранение и распечатка информации, поступающей по электронной почте, а также рассылка электронных сообщений заинтересованным лицам;',
    drevProblems: 'своевременно решать проблемы пользователей, связанные с правильной эксплуатацией программных продуктов и средств;',
    drevWebsite: 'разработка и администрирование веб-сайта предприятия;',
    drevMetrics: 'разработка собственной темы для сайта предприятия на WordPress, а также настройка яндекс метрики и Google search console.',
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
    educationTitle: 'Образование'
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
  
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    lang = localStorage.getItem('lang');
    SettingTranscription();
  }
}
window.addEventListener('load', getLocalStorage);

if (lang === 'ru') {
  console.log(lang)
  console.log('fffffffff')
  buttonRu.classList.add('active');
  buttonEn.classList.remove('active');
} 
else if (lang === 'en'){
  buttonRu.classList.remove('active');
  buttonEn.classList.add('active');
}

console.log(lang)
