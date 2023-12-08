import { icons } from "./icons";

export const aide = {
  title: 'Aide',
  desc: 'Instruct AI agents to build your software.',
  witty: "AI + IDE = Aide = help / assist / assitant. Clever, huh?",
  url: 'https://codestory.ai/',
  image: 'https://codestory.ai/social.png',
  site_name: 'AIDE',
}

interface Link {
  href: string;
  label: string;
  external?: boolean;
  icon?: string;
}

export const links: Link[] = [
  { href: "https://docs.codestory.ai", label: "Docs", external: true, icon: icons.docs },
  { href: "/blog", label: "Blog", icon: icons.blog },
  { href: "/changelog", label: "Changelog", icon: icons.changelog },
  { href: "/about", label: "Manifesto", icon: icons.manifesto },
];

export const socialLinks: Link[] = [
  {
    href: "https://www.ycombinator.com/launches/JCn-codestory-an-ai-first-ide-re-imagined-for-the-future",
    label: "YC",
    icon: icons.social.yc,
    external: true,
  },
  {
    href: "https://discord.gg/DNnh6tC9VA",
    label: "Discord",
    external: true,
    icon: icons.social.discord,
  },
  {
    href: "https://github.com/codestoryai",
    label: "Github",
    external: true,
    icon: icons.social.github,
  },
  {
    href: "https://twitter.com/codestoryai",
    label: "Twitter",
    external: true,
    icon: icons.social.twitter,
  },
  {
    href: "https://www.linkedin.com/company/codestory-ai",
    label: "LinkedIn",
    external: true,
    icon: icons.social.linkedin,
  },
];