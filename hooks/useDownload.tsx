import { useEffect, useState } from "react";

export const useDownload = () => {
	const [release, setRelease] = useState(null);

	return release;
}
