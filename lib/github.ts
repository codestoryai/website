import { Asset, Downloads, GithubRelease } from "./types";
import { getDevice } from "./ua";

export const fetchLatestRelease = async (): Promise<Downloads> => {
    const downloads: DeepPartial<Downloads> = {};
    try {
        const release = await (await fetch("https://api.github.com/repos/codestoryai/binaries/releases/latest")).json() as GithubRelease;
        if (release) {
            const version = release.name;
            const assets = release.assets;
            const assetMap: Record<string, Asset> = {};
            for (const asset of assets) {
                assetMap[asset.name] = asset;
            }

            // MacOS - Intel
            if (assetMap[`Aide.x64.${version}.dmg`]) {
                downloads.macOS = { ...downloads.macOS, amd64: { ...downloads.macOS?.amd64, dmg: assetMap[`Aide.x64.${version}.dmg`].browser_download_url } };
            }
            if (assetMap[`Aide-darwin-x64-${version}.zip`]) {
                downloads.macOS = { ...downloads.macOS, amd64: { ...downloads.macOS?.amd64, zip: assetMap[`Aide-darwin-x64-${version}.zip`].browser_download_url } };
            }
            // MacOS - Apple Silicon
            if (assetMap[`Aide.arm64.${version}.dmg`]) {
                downloads.macOS = { ...downloads.macOS, arm64: { ...downloads.macOS?.arm64, dmg: assetMap[`Aide.arm64.${version}.dmg`].browser_download_url } };
            }
            if (assetMap[`Aide-darwin-arm64-${version}.zip`]) {
                downloads.macOS = { ...downloads.macOS, arm64: { ...downloads.macOS?.arm64, zip: assetMap[`Aide-darwin-arm64-${version}.zip`].browser_download_url } };
            }
            // Windows - x64
            if (assetMap[`AideSetup-x64-${version}.exe`]) {
                downloads.Windows = { ...downloads.Windows, amd64: { ...downloads.Windows?.amd64, systemInstaller: assetMap[`AideSetup-x64-${version}.exe`].browser_download_url } };
            }
            if (assetMap[`AideUserSetup-x64-${version}.exe`]) {
                downloads.Windows = { ...downloads.Windows, amd64: { ...downloads.Windows?.amd64, userInstaller: assetMap[`AideUserSetup-x64-${version}.exe`].browser_download_url } };
            }
            if (assetMap[`Aide-win32-x64-${version}.zip`]) {
                downloads.Windows = { ...downloads.Windows, amd64: { ...downloads.Windows?.amd64, zip: assetMap[`Aide-win32-x64-${version}.zip`].browser_download_url } };
            }
            // Windows - arm64
            if (assetMap[`AideSetup-arm64-${version}.exe`]) {
                downloads.Windows = { ...downloads.Windows, arm64: { ...downloads.Windows?.arm64, systemInstaller: assetMap[`AideSetup-arm64-${version}.exe`].browser_download_url } };
            }
            if (assetMap[`AideUserSetup-arm64-${version}.exe`]) {
                downloads.Windows = { ...downloads.Windows, arm64: { ...downloads.Windows?.arm64, userInstaller: assetMap[`AideUserSetup-arm64-${version}.exe`].browser_download_url } };
            }
            if (assetMap[`Aide-win32-arm64-${version}.zip`]) {
                downloads.Windows = { ...downloads.Windows, arm64: { ...downloads.Windows?.arm64, zip: assetMap[`Aide-win32-arm64-${version}.zip`].browser_download_url } };
            }
            // Linux - x64
            if (assetMap[`Aide-linux-x64-${version}.tar.gz`]) {
                downloads.Linux = { ...downloads.Linux, amd64: { ...downloads.Linux?.amd64, tar: assetMap[`Aide-linux-x64-${version}.tar.gz`].browser_download_url } };
            }
            // Linux - arm32
            if (assetMap[`Aide-linux-armhf-${version}.tar.gz`]) {
                downloads.Linux = { ...downloads.Linux, armhf: { ...downloads.Linux?.armhf, tar: assetMap[`Aide-linux-armhf-${version}.tar.gz`].browser_download_url } };
            }
            // Linux - arm64
            if (assetMap[`Aide-linux-arm64-${version}.tar.gz`]) {
                downloads.Linux = { ...downloads.Linux, arm64: { ...downloads.Linux?.arm64, tar: assetMap[`Aide-linux-arm64-${version}.tar.gz`].browser_download_url } };
            }
        }
    } catch (err) {
        console.log(err);
    }

    const device = await getDevice();
    if (device && device.os && device.arch) {
        let url: string | undefined;
        if (device.os === 'macOS') {
            url = downloads.macOS?.[device.arch]?.dmg;
        } else if (device.os === 'Windows') {
            url = downloads.Windows?.[device.arch]?.userInstaller;
        } else if (device.os === 'Linux') {
            url = downloads.Linux?.[device.arch]?.tar;
        }

        if (url) {
            downloads.current = { ...device, url }
        }
    }

    return downloads as Downloads;
}
