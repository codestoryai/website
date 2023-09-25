import Link from "next/link"
import { Element, Text, Button } from "fictoan-react"

type DownloadButtonsPropTypes = {
	matchingRelease: any;
	latestRelease: any;
	os: string;
}

const osLabel = {
	"mac os": "MacOS",
	"windows": "Windows",
	"linux": "Linux"
}

export const DownloadButtons = ({ matchingRelease, latestRelease, os }: DownloadButtonsPropTypes) => {
	return matchingRelease ?
		(
			<Element as="div" verticallyCenterItems>
				<Link
					href={matchingRelease.browser_download_url ?? ""}
					passHref
					target="_blank"
					rel="noopener noreferrer"
				>
					<Button kind="primary" shadow="hard">
						Download for {osLabel[os]}
					</Button>
				</Link>

				{latestRelease &&
					<Link
						href={latestRelease["html_url"]}
						passHref
					>
						<a
							target="_blank"
							rel="noopener noreferrer">
							<Text marginLeft="micro" weight="600" textColor="white">
								Other
							</Text>
						</a>
					</Link>
				}
			</Element>
		) : latestRelease && (
			<Link
				href={latestRelease["html_url"]}
				passHref
				target="_blank"
				rel="noopener noreferrer"
			>
				<Button kind="primary" shadow="hard">
					Download
				</Button>
			</Link>
		)
}
