"use server"

import { headers } from 'next/headers';
import { ICPU, UAParser } from 'ua-parser-js';

import { Downloads, SupportedOS, supportedOS } from './types';

export interface UserDevice {
  os: SupportedOS;
  arch: ICPU['architecture'];
}

export const getDevice = async (): Promise<UserDevice | undefined> => {
  if (typeof process === 'undefined') {
    throw new Error('[Server method] you are importing a server-only module outside of server');
  }

  const { get } = headers();
  const ua = get('user-agent');

  const parser = new UAParser(ua || '');
  const result = await parser.getResult().withClientHints();

  let os = result.os.name as SupportedOS;
  if (!os || !supportedOS.includes(os)) {
    return undefined;
  }
  let arch = result.cpu.architecture;

  if (os === 'macOS' && !arch) {
    arch = 'arm64';
  }

  if (os && arch) {
    return { os, arch };
  } else {
    return undefined
  }
};

export interface DeviceDetails {
  os: string;
  arch: string;
  url: string;
}

export const cleanDeviceDetails = (currentDetails: Downloads['current']): DeviceDetails => {
  let cleanedDetails = { ...currentDetails } as DeviceDetails;

  if (currentDetails.os === 'macOS') {
    cleanedDetails.os = 'MacOS';
    cleanedDetails.arch = currentDetails.arch === 'arm64' ? 'Apple Silicon' : 'Intel Macs';
  }

  return cleanedDetails;
}
