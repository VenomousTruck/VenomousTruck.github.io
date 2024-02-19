import {
  ConsultlyLogo,
  ParabolLogo,
} from "@/images/logos";
import { GitHubIcon, TelegramIcon, VKIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Петросян Арсений Виленович",
  initials: "А.В.",
  location: "Россия, Челябинск",
  locationLink: "https://yandex.ru/maps/geo/chelyabinsk/53159527/?ll=61.367824%2C55.153961&z=10",
  about:
    "Веб-разработчик, который стремится улучшать свои навыки",
  summary:
    "Обучаюсь в ЮУрГУ на 2 курсе специальности \"Информатика и вычислительная техника\". Проходил курсы программирования на языках Python, C, C#. Реализую сайт в качестве проекта для конкурса \"Акселератор\" Южно-Уральского Государственного Университета в команде. Разрабатываю дизайн для сайта и пишу функционал. Качества: cамостоятельность в решении задач, надежность, готовность к разным формам работы, заинтересован в повышении профессиональных навыков, дружелюбный и искренний, имею навыки работы с Python и его библиотеками (Pandas, Numpy, Pretty Tables), C(проходил учебную практику), C#.Также имею опыт работы с Bootstrap, Lunacy, Photoshop.",
  avatarUrl: "https://avatars.githubusercontent.com/u/52398670?s=400&u=5537c37f24cb01a0a5e79d560a5c87767e9f70ef&v=4",
  contact: {
    email: "petrosyan.arvi@gmail.com",
    tel: "+79968235800",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/VenomousTruck",
        icon: GitHubIcon,
      },
      {
        name: "Telegram",
        url: "https://t.me/petrosyan_arvi",
        icon: TelegramIcon,
      },
      {
        name: "ВКонтакте",
        url: "https://vk.com/petrosyan.arvi",
        icon: VKIcon,
      }
    ],
  },
  education: [
    {
      school: "Южно-Уральский Государственный Университет",
      degree: "Информатика и вычислительная техника",
      start: "2022",
      end: "2026",
    },
  ],
  work: [
    {
      company: "Учебная практика",
      badges: [],
      title: "",
      logo: ParabolLogo,
      start: "2023",
      end: "2023",
      description: "",
    },
  ],
  skills: [
    "HTML",
    "CSS3",
    "JavaScript",
    "Python",
    "C#",
    "C",
    "Figma",
    "Lunacy",
    "Photoshop",
    "Bootstrap",
    "SASS",
    "Gulp",
    "Git",
    "Linux",
    "Английский язык B2"
  ],
  projects: [
    {
      title: "Помогатор",
      techStack: [
        "JavaScript",
        "Bootstrap",
        "Gulp",
        "HTML",
        "CSS"
      ],
      description: "Проект, который делает жизнь студентов проще и лучше",
      logo: ConsultlyLogo,
      link: {
        href: "https://github.com/VenomousTruck/pomogator_v2",
      },
    },
  ],
} as const;
