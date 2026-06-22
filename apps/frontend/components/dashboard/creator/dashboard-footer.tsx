import Link from "next/link";

type FooterLink =
  | {
      kind: "internal";
      href: string;
      label: string;
    }
  | {
      kind: "external";
      href: string;
      label: string;
    }
  | {
      kind: "disabled";
      label: string;
      title: string;
    };

const resourceLinks: FooterLink[] = [
  { kind: "disabled", label: "Documentation", title: "Coming soon" },
  { kind: "disabled", label: "Brand Kit", title: "Coming soon" },
  { kind: "disabled", label: "Stellar Guide", title: "Coming soon" },
];

const communityLinks: FooterLink[] = [
  { kind: "external", href: "https://discord.com", label: "Discord" },
  { kind: "external", href: "https://x.com", label: "Twitter/X" },
  { kind: "disabled", label: "Forum", title: "Coming soon" },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  const baseClassName =
    "rounded text-[var(--dash-muted)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--dash-accent)]";

  if (link.kind === "internal") {
    return (
      <Link href={link.href} className={`${baseClassName} hover:text-[var(--dash-accent)]`}>
        {link.label}
      </Link>
    );
  }

  if (link.kind === "external") {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClassName} hover:text-[var(--dash-accent)]`}
      >
        {link.label}
      </a>
    );
  }

  return (
    <button
      type="button"
      title={link.title}
      disabled
      className={`${baseClassName} cursor-default text-left opacity-50`}
    >
      {link.label}
    </button>
  );
}

export function DashboardFooter() {
  return (
    <footer className="mt-20 flex flex-col gap-8 border-t border-[var(--dash-border)] pb-12 pt-12 md:flex-row md:items-start md:justify-between">
      <div className="max-w-xs">
        <p className="mb-2 text-lg font-bold text-[var(--dash-heading)]">
          AdsBazaar
        </p>
        <p className="text-sm leading-relaxed text-[var(--dash-muted)]">
          The authority for creator-led decentralized advertising. Built for
          transparency, speed, and trust.
        </p>
      </div>

      <div className="flex gap-16">
        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-heading)]">
            Resources
          </h2>
          <ul className="space-y-2 text-sm text-[var(--dash-muted)]">
            {resourceLinks.map((link) => (
              <li key={link.label}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-[0.05em] text-[var(--dash-heading)]">
            Community
          </h2>
          <ul className="space-y-2 text-sm text-[var(--dash-muted)]">
            {communityLinks.map((link) => (
              <li key={link.label}>
                <FooterLinkItem link={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
