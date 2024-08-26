import { Asset, Downloads, GithubRelease } from "./types";
import { getDevice } from "./ua";

export const fetchLatestRelease = async (): Promise<Downloads> => {
    const downloads: DeepPartial<Downloads> = {};
    try {
        /*
    const releases = (await (
      await fetch('https://api.github.com/repos/codestoryai/binaries/releases')
    ).json()) as GithubRelease[]

    if (releases) {
      if ('message' in releases) {
        let githubError = releases as unknown as { message: string, documentation_url: string };
        throw new Error(githubError.message);
      }

      for (const release of releases) {
        const version = release.name
        const assets = release.assets
        const assetMap: Record<string, Asset> = {}
        for (const asset of assets) {
          assetMap[asset.name] = asset
        }

        // MacOS - Intel
        if (assetMap[`Aide.x64.${version}.dmg`] && !downloads.macOS?.amd64?.dmg) {
          downloads.macOS = {
            ...downloads.macOS,
            amd64: {
              ...downloads.macOS?.amd64,
              dmg: assetMap[`Aide.x64.${version}.dmg`].browser_download_url,
            },
          }
        }
        if (assetMap[`Aide-darwin-x64-${version}.zip`] && !downloads.macOS?.amd64?.zip) {
          downloads.macOS = {
            ...downloads.macOS,
            amd64: {
              ...downloads.macOS?.amd64,
              zip: assetMap[`Aide-darwin-x64-${version}.zip`].browser_download_url,
            },
          }
        }
        // MacOS - Apple Silicon
        if (assetMap[`Aide.arm64.${version}.dmg`] && !downloads.macOS?.arm64?.dmg) {
          downloads.macOS = {
            ...downloads.macOS,
            arm64: {
              ...downloads.macOS?.arm64,
              dmg: assetMap[`Aide.arm64.${version}.dmg`].browser_download_url,
            },
          }
        }
        if (assetMap[`Aide-darwin-arm64-${version}.zip`] && !downloads.macOS?.arm64?.zip) {
          downloads.macOS = {
            ...downloads.macOS,
            arm64: {
              ...downloads.macOS?.arm64,
              zip: assetMap[`Aide-darwin-arm64-${version}.zip`].browser_download_url,
            },
          }
        }
        // Windows - x64
        if (
          assetMap[`AideSetup-x64-${version}.exe`] &&
          !downloads.Windows?.amd64?.systemInstaller
        ) {
          downloads.Windows = {
            ...downloads.Windows,
            amd64: {
              ...downloads.Windows?.amd64,
              systemInstaller: assetMap[`AideSetup-x64-${version}.exe`].browser_download_url,
            },
          }
        }
        if (
          assetMap[`AideUserSetup-x64-${version}.exe`] &&
          !downloads.Windows?.amd64?.userInstaller
        ) {
          downloads.Windows = {
            ...downloads.Windows,
            amd64: {
              ...downloads.Windows?.amd64,
              userInstaller: assetMap[`AideUserSetup-x64-${version}.exe`].browser_download_url,
            },
          }
        }
        if (assetMap[`Aide-win32-x64-${version}.zip`] && !downloads.Windows?.amd64?.zip) {
          downloads.Windows = {
            ...downloads.Windows,
            amd64: {
              ...downloads.Windows?.amd64,
              zip: assetMap[`Aide-win32-x64-${version}.zip`].browser_download_url,
            },
          }
        }
        // Windows - arm64
        if (
          assetMap[`AideSetup-arm64-${version}.exe`] &&
          !downloads.Windows?.arm64?.systemInstaller
        ) {
          downloads.Windows = {
            ...downloads.Windows,
            arm64: {
              ...downloads.Windows?.arm64,
              systemInstaller: assetMap[`AideSetup-arm64-${version}.exe`].browser_download_url,
            },
          }
        }
        if (
          assetMap[`AideUserSetup-arm64-${version}.exe`] &&
          !downloads.Windows?.arm64?.userInstaller
        ) {
          downloads.Windows = {
            ...downloads.Windows,
            arm64: {
              ...downloads.Windows?.arm64,
              userInstaller: assetMap[`AideUserSetup-arm64-${version}.exe`].browser_download_url,
            },
          }
        }
        if (assetMap[`Aide-win32-arm64-${version}.zip`] && !downloads.Windows?.arm64?.zip) {
          downloads.Windows = {
            ...downloads.Windows,
            arm64: {
              ...downloads.Windows?.arm64,
              zip: assetMap[`Aide-win32-arm64-${version}.zip`].browser_download_url,
            },
          }
        }
        // Linux - x64
        if (assetMap[`Aide-linux-x64-${version}.tar.gz`] && !downloads.Linux?.amd64?.tar) {
          downloads.Linux = {
            ...downloads.Linux,
            amd64: {
              ...downloads.Linux?.amd64,
              tar: assetMap[`Aide-linux-x64-${version}.tar.gz`].browser_download_url,
            },
          }
        }
        // Linux - arm32
        if (assetMap[`Aide-linux-armhf-${version}.tar.gz`] && !downloads.Linux?.armhf?.tar) {
          downloads.Linux = {
            ...downloads.Linux,
            armhf: {
              ...downloads.Linux?.armhf,
              tar: assetMap[`Aide-linux-armhf-${version}.tar.gz`].browser_download_url,
            },
          }
        }
        // Linux - arm64
        if (assetMap[`Aide-linux-arm64-${version}.tar.gz`] && !downloads.Linux?.arm64?.tar) {
          downloads.Linux = {
            ...downloads.Linux,
            arm64: {
              ...downloads.Linux?.arm64,
              tar: assetMap[`Aide-linux-arm64-${version}.tar.gz`].browser_download_url,
            },
          }
        }

        // Break if all downloads are found. Keep iterating otherwise.
        if (
          downloads.macOS?.amd64?.dmg &&
          downloads.macOS?.amd64?.zip &&
          downloads.macOS?.arm64?.dmg &&
          downloads.macOS?.arm64?.zip &&
          downloads.Windows?.amd64?.systemInstaller &&
          downloads.Windows?.amd64?.userInstaller &&
          downloads.Windows?.amd64?.zip &&
          downloads.Windows?.arm64?.systemInstaller &&
          downloads.Windows?.arm64?.userInstaller &&
          downloads.Windows?.arm64?.zip &&
          downloads.Linux?.amd64?.tar &&
          downloads.Linux?.armhf?.tar &&
          downloads.Linux?.arm64?.tar
        ) {
          break
        }
      }
    }
    */

        const downloads: Omit<Downloads, "current"> = {
            macOS: {
                amd64: {
                    dmg: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide.x64.1.88.1.24119.dmg",
                    zip: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-darwin-x64-1.88.1.24119.zip",
                },
                arm64: {
                    dmg: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide.arm64.1.88.1.24119.dmg",
                    zip: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-darwin-arm64-1.88.1.24119.zip",
                },
            },
            Windows: {
                amd64: {
                    systemInstaller:
                        "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/AideSetup-x64-1.88.1.24119.exe",
                    userInstaller:
                        "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/AideUserSetup-x64-1.88.1.24119.exe",
                    zip: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-win32-x64-1.88.1.24119.zip",
                },
                arm64: {
                    systemInstaller:
                        "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/AideSetup-arm64-1.88.1.24119.exe",
                    userInstaller:
                        "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/AideUserSetup-arm64-1.88.1.24119.exe",
                    zip: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-win32-arm64-1.88.1.24119.zip",
                },
            },
            Linux: {
                amd64: {
                    tar: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-linux-x64-1.88.1.24119.tar.gz",
                },
                armhf: {
                    tar: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-linux-armhf-1.88.1.24119.tar.gz",
                },
                arm64: {
                    tar: "https://github.com/codestoryai/binaries/releases/download/1.88.1.24119/Aide-linux-arm64-1.88.1.24119.tar.gz",
                },
            },
        };
    } catch (err) {
        console.log(err);
    }

    const device = await getDevice();
    if (device && device.os && device.arch) {
        let url: string | undefined;
        if (device.os === "macOS") {
            url = downloads.macOS?.[device.arch]?.dmg;
        } else if (device.os === "Windows") {
            url = downloads.Windows?.[device.arch]?.userInstaller;
        } else if (device.os === "Linux") {
            url = downloads.Linux?.[device.arch]?.tar;
        }

        if (url) {
            downloads.current = { ...device, url };
        }
    }

    return downloads as Downloads;
};
