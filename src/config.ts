import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://martian-ly.github.io/", // replace this with your deployed domain
  author: "MARTIAN-LY",
  desc: "My blog.",
  title: "MARTIAN-LY's blog",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh-CN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
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
    href: "https://github.com/martian-ly",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:martianlyly@gmail.com",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];
