import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "auto",
    })
}
