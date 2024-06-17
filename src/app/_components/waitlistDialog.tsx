'use client'

import { Copy } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'
import { twMerge } from 'tailwind-merge'

import { DeviceDetails } from '../_utilities/ua'
import { Button } from './ui/button'
import * as Base from './ui/dialog'
import { Input } from './ui/input'
import { cn } from '../_utilities/utils'

interface WaitlistData {
  amount_referred: 0
  created_at: string
  email: string
  referral_link: string
  referral_token: string
  removed_date: string
  uuid: string
  verified: boolean
  waitlist_api_key: string
  waitlist_id: number
}

interface WaitlistContext {
  data?: WaitlistData
  error?: string
  loading: boolean
  onSubmitWaitlist: React.FormEventHandler<HTMLFormElement>
}

interface WaitlistContextProps {
  children: React.ReactNode
  deviceDetails?: DeviceDetails
}

const WaitlistContext = React.createContext<WaitlistContext | undefined>(undefined)
const useContext = () => React.useContext(WaitlistContext)

const WaitlistContextProvider = (props: WaitlistContextProps) => {
  const { children, deviceDetails } = props
  const [data, setData] = React.useState<WaitlistContext['data']>()
  const [error, setError] = React.useState<WaitlistContext['error']>()
  const [loading, setLoading] = React.useState<WaitlistContext['loading']>(false)

  const onSubmitWaitlist: WaitlistContext['onSubmitWaitlist'] = async event => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const email = formData.get('email')
    if (!email) {
      setError('Please enter your email')
      return
    }

    setLoading(true)

    try {
      const response = await fetch('https://api.getwaitlist.com/api/v1/signup', {
        body: JSON.stringify({
          email,
          metadata: deviceDetails,
          referral_link: document.URL,
          waitlist_id: 17826,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      const data = await response.json()
      setData(data)
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    }
    setLoading(false)
  }

  return (
    <WaitlistContext.Provider value={{ data, error, loading, onSubmitWaitlist }}>
      <Base.Dialog>
        {children}
        <DialogContent />
      </Base.Dialog>
    </WaitlistContext.Provider>
  )
}

interface WaitlistFormProps extends React.ComponentProps<'div'> {}

const WaitlistForm = (props: WaitlistFormProps) => {
  const { children, className } = props
  const { data, onSubmitWaitlist } = useContext() || {}

  const referralLinkRef = React.useRef<HTMLInputElement>(null)

  const [shouldDisplayCopied, setShouldDisplayCopied] = React.useState(false)

  React.useEffect(() => {
    if (shouldDisplayCopied) {
      const timeout = setTimeout(() => setShouldDisplayCopied(false), 3000)
      return () => clearTimeout(timeout)
    }
  }, [shouldDisplayCopied])

  async function onCopy() {
    if (!referralLinkRef.current) return
    const input = referralLinkRef.current
    await navigator.clipboard.writeText(input.value)
    setShouldDisplayCopied(true)
  }

  return data ? (
    <div className={twMerge(className, 'flex flex-col items-center justify-center')}>
      <p className="text-center text-lg font-medium">
        Thank you for your interest!{' '}
        <span aria-label="love" role="img">
          ❤️
        </span>
      </p>
      <p className="text-center text-sm text-muted-foreground mt-3">
        Please check your email for a confirmation link. In the meantime, here&apos;s a referral
        link to send to your friends!
      </p>
      <div className="flex flex-grow w-full items-center space-x-2 mt-5">
        <div className="flex flex-grow flex-1 gap-2">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="sr-only" htmlFor="link">
            Link
          </label>
          <Input
            id="link"
            readOnly
            ref={referralLinkRef}
            value={shouldDisplayCopied ? 'Copied!' : data.referral_link}
          />
        </div>
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <Button className="p-3" onClick={onCopy} size="sm" type="button">
          <span className="sr-only">Copy</span>
          <Copy className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ) : (
    <form className={className} onSubmit={onSubmitWaitlist}>
      <div className="flex flex-grow items-center space-x-2">
        <div className="flex flex-1 gap-2 flex-grow">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <Input className="flex-grow" id="email" name="email" />
        </div>
      </div>
      {children}
    </form>
  )
}

const DialogContent = React.forwardRef<
  React.ElementRef<typeof Base.DialogContent>,
  React.ComponentPropsWithoutRef<typeof Base.DialogContent>
>(({ className, ...rest }, ref) => {
  const { data } = useContext() || {}

  return (
    <Base.DialogContent className={twMerge('sm:max-w-md', className)} ref={ref} {...rest}>
      <Base.DialogHeader className={cn(data && 'sr-only')}>
        <Base.DialogTitle>Join waitlist</Base.DialogTitle>
        <Base.DialogDescription>
          Thank you for your interest in Aide! Please enter your email to join our waitlist.
        </Base.DialogDescription>
      </Base.DialogHeader>
      <WaitlistForm>
        <Base.DialogFooter className="sm:justify-end mt-3">
          <Base.DialogClose asChild>
            <Button type="button" variant="ghost">
              Close
            </Button>
          </Base.DialogClose>
          <Button className="px-3" size="sm" type="submit" variant="default">
            Sign up
          </Button>
        </Base.DialogFooter>
      </WaitlistForm>
    </Base.DialogContent>
  )
})

DialogContent.displayName = Base.DialogContent.displayName

const DialogTrigger = Base.DialogTrigger

const WaitlistButton = () => {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight
      window.scrollY > 200 && !reachedBottom ? setIsVisible(true) : setIsVisible(false)
    }
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility)

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <DialogTrigger asChild>
      <Button
        className={`fixed z-50 top-12 right-12 text-md font-bold items-center transition-opacity duration-200 ${isVisible ? 'hidden md:flex opacity-100' : 'hidden opacity-0'}`}
        variant="outline"
      >
        <Image alt="CodeStory Logo" height={20} priority src="/aide-white.svg" width={30} />
        <p className="pl-2 text-foreground font-bold">Join waitlist!</p>
      </Button>
    </DialogTrigger>
  )
}

export { DialogTrigger, WaitlistButton, WaitlistContext, WaitlistContextProvider, WaitlistForm }
