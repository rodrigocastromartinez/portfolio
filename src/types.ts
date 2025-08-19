export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export type Project = {
    id: string,
    slug: string,
    body: string,
    collection: string,
    data: {
      title: string,
      summary: string,
      date: Date,
      tags: Array<string>,
      draft: boolean,
      demoUrl: string
    }
  }