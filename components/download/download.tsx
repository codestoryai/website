import Link from "next/link";
import { LinkButton } from "../forms/button";

type DownloadButtonsPropTypes = {
  matchingRelease: any;
  latestRelease: any;
  os: string;
};

const osLabel = {
  "mac os": "MacOS",
  windows: "Windows",
  linux: "Linux",
};

export const DownloadButtons = ({ matchingRelease, latestRelease, os }: DownloadButtonsPropTypes) => {
  return matchingRelease ? (
    <div>
      <Link href={matchingRelease.browser_download_url ?? ""} passHref target="_blank" rel="noopener noreferrer">
        <LinkButton>
          Download for {osLabel[os]}
        </LinkButton>
      </Link>

      {latestRelease && (
        <Link href={latestRelease["html_url"]} passHref>
          <LinkButton target="_blank" rel="noopener noreferrer">
              Other
          </LinkButton>
        </Link>
      )}
    </div>
  ) : (
    latestRelease && (
      <Link href={latestRelease["html_url"]} passHref target="_blank" rel="noopener noreferrer">
        <LinkButton>
          Download
        </LinkButton>
      </Link>
    )
  );
};
