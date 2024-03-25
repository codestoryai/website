import type { ICPU } from 'ua-parser-js';

import { headers } from 'next/headers';
import { UAParser } from 'ua-parser-js';

import type { Downloads, SupportedOS } from './types';

import { supportedOS } from './types';

export interface UserDevice {
  arch: ICPU['architecture'];
  os: SupportedOS;
}

export const getDevice = async (): Promise<UserDevice | undefined> => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { get } = headers();
  const ua = get('user-agent');

  const parser = new UAParser(ua || '');
  const result = await parser.getResult().withClientHints();

  const os = result.os.name as SupportedOS;
  if (!os || !supportedOS.includes(os)) {
    return undefined;
  }
  let arch = result.cpu.architecture;

  if (os === 'macOS' && !arch) {
    arch = 'arm64';
  }

  if (os && arch) {
    return { arch, os };
  } else {
    return undefined
  }
};

export interface DeviceDetails {
  arch: string;
  os: string;
  url: string;
}

export const cleanDeviceDetails = (currentDetails: Downloads['current']): DeviceDetails => {
  const cleanedDetails = { ...currentDetails } as DeviceDetails;

  if (currentDetails.os === 'macOS') {
    cleanedDetails.os = 'MacOS';
    cleanedDetails.arch = currentDetails.arch === 'arm64' ? 'Apple Silicon' : 'Intel Macs';
  }

  return cleanedDetails;
}
