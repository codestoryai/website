import { ICPU } from "ua-parser-js";
import { getDevice, UserDevice } from "@/lib/ua"; // Adjust import path
import {
  Downloads,
  MacFormats,
  WindowsFormats,
  LinuxFormats,
  supportedOS,
  SupportedOS,
} from "./types"; // Adjust to your own type exports

/**
 * Fetch the latest release from the /api/all/stable endpoint and convert
 * it into a `Downloads` type, including the `current` property for the 
 * user's OS/architecture. 
 */
export async function fetchLatestRelease(): Promise<Downloads> {
  const response = await fetch("https://your-api.com/api/all/stable");
  const releaseData: Record<string, string> = await response.json();

  // Allow partial so we only fill the architectures actually present in the response.
  const Linux: Partial<Record<NonNullable<ICPU["architecture"]>, LinuxFormats>> = {};
  const Windows: Partial<Record<NonNullable<ICPU["architecture"]>, WindowsFormats>> = {};
  const macOS: Partial<Record<NonNullable<ICPU["architecture"]>, MacFormats>> = {};

  /*
    The keys in releaseData have the form e.g. "linux_x64", "darwin_arm64", "win32_ia32". 
    We'll split on "_" and then populate our partial record objects.
  */
  for (const [key, url] of Object.entries(releaseData)) {
    // e.g. ["linux", "x64"] or ["darwin", "arm64"] etc.
    const [platform, arch] = key.split("_") as [string, NonNullable<ICPU["architecture"]>];
    if (!arch) continue;

    switch (platform) {
      case "linux":
        Linux[arch] = { tar: url };
        break;
      case "darwin":
        // If you also have a .zip for mac, fill it in:
        macOS[arch] = { dmg: url, zip: "" };
        break;
      case "win32":
        // The endpoint only provides e.g. the userInstaller, so fill the rest with ""
        Windows[arch] = { systemInstaller: "", userInstaller: url, zip: "" };
        break;
      default:
        // Ignore unknown platform keys
        break;
    }
  }

  // Determine user’s OS and arch. If it’s undefined, fall back to Linux/amd64 (or any default you prefer).
  const userDevice = await getDevice();
  const currentOs: SupportedOS = userDevice?.os ?? "Linux";
  const currentArch: NonNullable<ICPU["architecture"]> = userDevice?.arch ?? "amd64";
  
  // Pick a download URL for current’s OS + arch:
  let currentUrl = "";
  if (currentOs === "Linux") {
    currentUrl = Linux[currentArch]?.tar ?? "";
  } else if (currentOs === "macOS") {
    currentUrl = macOS[currentArch]?.dmg ?? "";
  } else if (currentOs === "Windows") {
    currentUrl = Windows[currentArch]?.userInstaller ?? "";
  }

  // Return the final structure as a full Downloads object.
  // We'll cast from Partial<…> to the needed Record<…>.
  // (Alternatively, you could add defaults for missing architectures, instead of casting.)
  return {
    Linux: Linux as Record<NonNullable<ICPU["architecture"]>, LinuxFormats>,
    Windows: Windows as Record<NonNullable<ICPU["architecture"]>, WindowsFormats>,
    macOS: macOS as Record<NonNullable<ICPU["architecture"]>, MacFormats>,
    current: {
      arch: currentArch,
      os: currentOs,
      url: currentUrl,
    },
  };
}