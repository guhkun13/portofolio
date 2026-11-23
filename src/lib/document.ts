import { SECTION_TITLES } from "@/data/resume-data";
import {
  displayUrl,
  getContactLinks,
  getSections,
  type SectionKey,
} from "@/lib/resume";
import type { ResumeData } from "@/lib/types";

export interface Link {
  href: string;
  url: string;
}

export interface Row {
  label: string;
  text: string;
  link: Link;
}

export interface Entry {
  name: string;
  link?: Link;
  dates?: string;
  role?: string;
  description?: string;
  highlights: string[];
  tags: string[];
}

export type Inline = string | { code: string };

export type Block =
  | { kind: "title"; name: string; tagline: string }
  | { kind: "rows"; rows: Row[] }
  | { kind: "heading"; text: string }
  | { kind: "paragraph"; inlines: Inline[] }
  | ({ kind: "entry" } & Entry)
  | { kind: "tags"; tags: string[] };

const web = (href: string): Link => ({ href, url: displayUrl(href) });

const dates = (start: string, end: string | null) =>
  `${start} - ${end ?? "Present"}`;

const sections: Record<SectionKey, (data: ResumeData) => Block[]> = {
  summary: ({ summary }) => [{ kind: "paragraph", inlines: [summary] }],
  work: ({ work }) =>
    work.map((job) => ({
      kind: "entry",
      name: job.company,
      link: job.link ? web(job.link) : undefined,
      dates: dates(job.start, job.end),
      role: job.title,
      description: job.description,
      highlights: job.highlights ?? [],
      tags: job.badges,
    })),
  education: ({ education, languages }) => [
    ...education.map(
      (school): Block => ({
        kind: "entry",
        name: school.school,
        dates: school.start
          ? dates(school.start, school.end ?? null)
          : undefined,
        role: school.degree,
        highlights: [],
        tags: [],
      })
    ),
    ...(languages.length > 0
      ? [{ kind: "paragraph" as const, inlines: [languages.join(", ")] }]
      : []),
  ],
  skills: ({ skills }) =>
    skills.map((group) => ({
      kind: "entry",
      name: group.label,
      highlights: [],
      tags: group.items,
    })),
  projects: ({ projects }) =>
    projects.map((project) => ({
      kind: "entry",
      name: project.title,
      link: project.link ? web(project.link) : undefined,
      dates: project.period,
      description: project.description,
      highlights: [],
      tags: project.techStack,
    })),
};

const title = ({ name, about }: ResumeData): Block => ({
  kind: "title",
  name,
  tagline: about,
});

const body = (data: ResumeData): Block[] => [
  {
    kind: "rows",
    rows: [
      ...(data.locationLink
        ? [
            {
              label: "Location",
              text: data.location,
              link: web(data.locationLink),
            },
          ]
        : []),
      ...getContactLinks(data).map(({ label, text, href }) => ({
        label,
        text,
        link: { href, url: text },
      })),
    ],
  },
  ...getSections(data).flatMap((key): Block[] => [
    { kind: "heading", text: SECTION_TITLES[key] },
    ...sections[key](data),
  ]),
];

export function resumeBlocks(data: ResumeData): Block[] {
  return [title(data), ...body(data)];
}

export function llmsBlocks(data: ResumeData): Block[] {
  const site = new URL(data.siteUrl).origin;
  return [
    title(data),
    {
      kind: "paragraph",
      inlines: [
        "This CV also comes as markdown from ",
        { code: `${site}/index.md` },
        ", as plain text from ",
        { code: `${site}/cv.txt` },
        ", and as a PDF from ",
        { code: `${site}/resume.pdf` },
        ".",
      ],
    },
    ...body(data),
  ];
}
