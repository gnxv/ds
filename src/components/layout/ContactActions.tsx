import type { ReactNode } from "react";
import { site } from "@/lib/site";

function Icon({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center justify-center" aria-hidden>
      {children}
      <span className="sr-only">{label}</span>
    </span>
  );
}

const iconClass = "h-4 w-4";

export function PhoneIcon() {
  return (
    <Icon label="Телефон">
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6.5 3.8h3.1l1.2 3.1-1.9 1.2a12.4 12.4 0 0 0 6 6l1.2-1.9 3.1 1.2v3.1c0 .7-.6 1.3-1.3 1.3C9.8 17.8 6.2 14.2 6.2 5.1c0-.7.6-1.3 1.3-1.3Z" strokeLinejoin="round" />
      </svg>
    </Icon>
  );
}

function TelegramIcon() {
  return (
    <Icon label="Telegram">
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M20.2 4.4 3.9 10.6c-1.1.4-1.1 1 .2 1.3l4.1 1.3 1.6 4.9c.2.6.1.8.7.8.4 0 .6-.2.8-.4l2.3-2.2 4.4 3.3c.8.4 1.4.2 1.6-.8l2.8-13.2c.3-1.1-.4-1.6-1.2-1.2ZM9.6 13.3l8.4-5.3c.4-.3.8 0 .5.3l-7.3 6.6-.3 2.6-1.3-4.2Z" />
      </svg>
    </Icon>
  );
}

function WhatsAppIcon() {
  return (
    <Icon label="WhatsApp">
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M12.04 3.2A8.7 8.7 0 0 0 3.4 11.9c0 1.5.4 3 1.1 4.3L3.2 20.8l4.7-1.2a8.7 8.7 0 0 0 4.1 1.1h.1A8.7 8.7 0 0 0 20.8 12a8.7 8.7 0 0 0-8.76-8.8Zm5.1 12.4c-.2.6-1.2 1.1-1.9 1.2-.5.1-1.1.1-1.8 0a14 14 0 0 1-6.2-3.9 6.7 6.7 0 0 1-1.4-2.3c-.2-.7 0-1.3.2-1.6.2-.3.5-.4.8-.4h.6c.2 0 .4 0 .6.5l.8 1.9c.1.2 0 .4-.1.5l-.4.5c-.1.1-.2.3 0 .5a9 9 0 0 0 2.4 2.5c.3.2.5.2.7 0l.5-.6c.2-.2.4-.1.6 0l1.8.9c.3.1.4.3.4.5Z" />
      </svg>
    </Icon>
  );
}

function InstagramIcon() {
  return (
    <Icon label="Instagram">
      <svg viewBox="0 0 24 24" className={iconClass} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.7" cy="7.3" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    </Icon>
  );
}

function MaxIcon() {
  return (
    <Icon label="Max">
      <svg viewBox="0 0 24 24" className={iconClass} fill="currentColor">
        <path d="M4.2 17.2V6.8h2.6l5.2 7.4 5.2-7.4h2.6v10.4h-2.3V10.4L12.2 17h-.4L6.5 10.4v6.8H4.2Z" />
      </svg>
    </Icon>
  );
}

export const socials = [
  { href: site.telegram, label: "Telegram", icon: TelegramIcon },
  { href: site.whatsapp, label: "WhatsApp", icon: WhatsAppIcon },
  { href: site.max, label: "Max", icon: MaxIcon },
  { href: site.instagram, label: site.instagramHandle, icon: InstagramIcon },
] as const;

const pill =
  "inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-3 text-[11px] uppercase tracking-[0.18em] transition duration-300 hover:border-white/45 hover:bg-white/5";

export function ContactActions() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={site.phoneHref}
        className="inline-flex items-center gap-2 rounded-full bg-[#ece6da] px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-[#0b0e12]"
      >
        <PhoneIcon />
        {site.phone}
      </a>
      <a
        href={site.booking}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-[#ece6da] px-4 py-3 text-[11px] uppercase tracking-[0.18em] text-[#0b0e12]"
      >
        Онлайн-запись
      </a>
      <a href={site.telegram} target="_blank" rel="noreferrer" className={pill}>
        <TelegramIcon />
        Telegram
      </a>
      <a href={site.whatsapp} target="_blank" rel="noreferrer" className={pill}>
        <WhatsAppIcon />
        WhatsApp
      </a>
      <a href={site.max} target="_blank" rel="noreferrer" className={pill}>
        <MaxIcon />
        Max
      </a>
      <a href={site.instagram} target="_blank" rel="noreferrer" className={pill}>
        <InstagramIcon />
        Instagram
      </a>
    </div>
  );
}
