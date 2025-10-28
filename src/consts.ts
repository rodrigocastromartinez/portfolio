import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Rodrigo CM",
  DESCRIPTION: "I'm Rodrigo, welcome to my portfolio.",
  AUTHOR: "Rodrigo CM",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "rodrigocastro.mentoring@gmail.com",
    HREF: "mailto:rodrigocastro.mentoring@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "rodrigocastromartinez",
    HREF: "https://github.com/rodrigocastromartinez"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "/in/rodrigo-castro-martinez",
    HREF: "https://www.linkedin.com/in/rodrigo-castro-martinez/",
  }
]

