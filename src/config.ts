import type { Site, SocialObjects, TimelineObject } from "./types";

export const SITE: Site = {
  website: "https://d2atta.github.io", // replace this with your deployed domain
  author: "Debarghya Datta",
  desc: "A minimal, responsive and SEO-friendly Portfolio/Blog.",
  title: "D2P",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/deba-iitbh/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/deba-iitbh/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:debarghya.datta89@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/datta_89",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },
];

export const TIMELINE: TimelineObject = [
  {
    year: "Today",
    title: "GSoC Contributor",
    duration: "3 months",
    details:
      "I am currently working as a GSoC contributor with the DBpedia community. I am working on the project 'DBpedia Hindi Chapter' where I am helping the community to build a Hindi chapter for DBpedia.",
  },
  {
    year: "2022",
    title: "Master's Degree in Computer Science",
    duration: "2 years",
    details:
      "Was selected for the Master's program in Computer Science at Indian Institute of Technology, Bhilai (IIT Bhilai). There i found my interest in the field of Natural Language Processing and Machine Learning.",
  },
  {
    year: "2021",
    title: "Systems Engineer",
    duration: "1 year",
    details:
      "Joined TCS as Sytems enginner and working as Quality Assurance Engineer with Verizon team, where helped the team in end-to-end testing of the application and also in automation testing using Selenium and Java.",
  },
  {
    year: "2017",
    title: "Bachelor's Degree in Computer Science",
    duration: "4 years",
    details:
      "I pursued the knowledge that a computer science degree had to offer. I learned about computer architecture, computer science theory, an array of programming, and aspects of artificial intelligence.",
  },
  {
    year: "2013",
    title: "First Line of Code",
    duration: "the beginning",
    details:
      "I wrote my first line of real code that started this journey into digital craftsmanship that I never could've imagined, especially as someone who never saw themselves as anything other than a blue collar worker.",
  },
];
