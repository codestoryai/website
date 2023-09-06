import { useEffect, useState } from "react";

export const useDownload = () => {
	const [release, setRelease] = useState(null);

	useEffect(() => {
		fetch("https://api.github.com/repos/codestoryai/binaries/releases")
			.then((res) => res.json())
			.then((releases) => {
				const release = releases.find((release) => release.name.startsWith("mac_m_chip"));
				setRelease(release);
			});
	}, []);

	return release;
}
