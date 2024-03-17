import { ICPU } from "ua-parser-js";

export const supportedOS = ['macOS', 'Windows', 'Linux'] as const;
export type SupportedOS = typeof supportedOS[number];

export interface Downloads {
  current: {
    os: SupportedOS;
    arch: NonNullable<ICPU['architecture']>;
    url: string;
  },
  macOS: Record<NonNullable<ICPU['architecture']>, MacFormats>,
  Windows: Record<NonNullable<ICPU['architecture']>, WindowsFormats>,
  Linux: Record<NonNullable<ICPU['architecture']>, LinuxFormats>,
}

interface MacFormats {
  dmg: string;
  zip: string;
}

interface WindowsFormats {
  userInstaller: string;
  systemInstaller: string;
  zip: string;
}

interface LinuxFormats {
  tar: string;
}

export interface GithubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: Author;
  node_id: string;
  tag_name: string;
  target_commitish: string;
  name: string;
  draft: boolean;
  prerelease: boolean;
  created_at: string;
  published_at: string;
  assets: Asset[];
  tarball_url: string;
  zipball_url: string;
  body: string;
}

export interface Asset {
  url: string;
  id: number;
  node_id: string;
  name: string;
  label: string;
  uploader: Author;
  content_type: string;
  state: string;
  size: number;
  download_count: number;
  created_at: string;
  updated_at: string;
  browser_download_url: string;
}

interface Author {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
