import {
  FileDownIcon,
  GlobeIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";
import type React from "react";
import { GitHubIcon } from "@/components/icons/github-icon";
import { LinkedInIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import { RESUME_DATA } from "@/data/resume-data";
import {
  type ContactIcon,
  type ContactLink,
  getContactLinks,
} from "@/lib/resume";

const ICON_MAP: Record<
  ContactIcon,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
};

interface LocationLinkProps {
  location: string;
  locationLink?: string;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  if (!locationLink) {
    return (
      <p className="inline-flex max-w-md items-center gap-x-1.5 text-pretty text-xs leading-none text-foreground">
        <MapPinIcon className="size-3" aria-hidden="true" />
        {location}
      </p>
    );
  }
  return (
    <p className="max-w-md items-center text-pretty text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <MapPinIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  iconType: ContactIcon;
  label: string;
}

function SocialButton({ href, iconType, label }: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];

  return (
    <a
      className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent className="size-4" aria-hidden="true" />
    </a>
  );
}

interface ContactLinksProps {
  links: ContactLink[];
}

function ContactButtons({ links }: ContactLinksProps) {
  return (
    <ul className="flex gap-x-1 pt-1 print:hidden" aria-label="Contact links">
      {links.map(({ href, label, icon }) => (
        <li key={label}>
          <SocialButton href={href} iconType={icon} label={label} />
        </li>
      ))}
    </ul>
  );
}

function PrintContact({ links }: ContactLinksProps) {
  return (
    <div className="hidden flex-wrap gap-x-2 text-sm text-muted-foreground print:flex print:text-[12px] print:leading-tight">
      {links.map(({ label, href, text }, index) => (
        <span key={label} className="inline-flex gap-x-2">
          <a className="text-foreground underline" href={href}>
            {text}
          </a>
          {index < links.length - 1 && <span aria-hidden="true">/</span>}
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const contactLinks = getContactLinks(RESUME_DATA);

  return (
    <header className="flex items-center justify-between gap-x-4">
      <div className="flex-1 space-y-1.5 print:space-y-1">
        <h1
          className="font-pixel text-[28px] font-semibold leading-none tracking-tight sm:text-[32px]"
          id="resume-name"
        >
          {RESUME_DATA.name}
        </h1>
        <p className="max-w-md text-pretty text-sm text-body print:text-[12px] print:leading-tight">
          {RESUME_DATA.about}
        </p>

        <LocationLink
          location={RESUME_DATA.location}
          locationLink={RESUME_DATA.locationLink}
        />

        <ContactButtons links={contactLinks} />

        <PrintContact links={contactLinks} />

        {RESUME_DATA.resumePdfUrl && (
          <p className="pt-1 print:hidden">
            <a
              className="inline-flex items-center gap-x-1.5 rounded-md border px-2.5 py-1 text-xs text-foreground transition-colors hover:bg-muted"
              href={RESUME_DATA.resumePdfUrl}
              download={true}
            >
              <FileDownIcon className="size-3.5" aria-hidden="true" />
              Download PDF
            </a>
          </p>
        )}
      </div>

      <div
        className="flex size-28 shrink-0 items-center justify-center rounded-xl bg-muted font-pixel text-4xl text-foreground ring-1 ring-muted"
        aria-hidden="true"
      >
        {RESUME_DATA.initials}
      </div>
    </header>
  );
}
