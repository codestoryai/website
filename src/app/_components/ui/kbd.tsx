import { cn } from "@/_utilities/utils"
import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"

const kbdVariants = cva(
    "min-h-[30px] cursor-default inline-flex justify-center items-center bg-white border border-gray-200 font-mono text-gray-800 rounded-md shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200 dark:shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)]",
    {
      defaultVariants: {
        size: "default"
      },
      variants: {
        size: {
          default: "py-1 px-1.5 text-sm -translate-y-1"
        },
      },
    }
  )

export interface KbdProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof kbdVariants> {}

const Kbd = React.forwardRef<HTMLDivElement, KbdProps>(
    ({ children, className, size, ...props }, ref) => (
        <kbd
        className={cn(kbdVariants({ className, size }))}
            ref={ref}
            {...props}
        >
            {children}
        </kbd>
    ))
Kbd.displayName = "Keyboard Shortcut"

export { Kbd }
