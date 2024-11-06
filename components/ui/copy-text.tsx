"use client";

import { cn } from '@/lib/utils'
import React from 'react'

type CopyTextContent = {
  showMessage: boolean,
  handleCopy: (event: React.MouseEvent<HTMLButtonElement>) => void,
}
const CopyTextContext = React.createContext<CopyTextContent | null>(null)
CopyTextContext.displayName = 'CopyTextContext'

function useCopyText(): CopyTextContent {
  const contextValue = React.useContext(CopyTextContext)
  if (!contextValue) {
    throw new Error('CopyText.Message must be used within a CopyText component')
  }
  return contextValue
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { children, ...rest } = props
  const { handleCopy } = useCopyText()

  return (
    <button type="button" onClick={handleCopy} {...rest}>
      {children}
    </button>
  )
}

type ReactChildrenOrFunction<T> = React.ReactNode | string | ((T: any) => React.ReactNode | string)

function Message(props: { children: ReactChildrenOrFunction<boolean>}) {
  const { children } = props
  const { showMessage } = useCopyText()
  const isFunction = typeof children === 'function'
  if (isFunction) {
    return children(showMessage)
  }
  return showMessage ? children : null
}

type CopyTextProps = React.ButtonHTMLAttributes<HTMLElement> & {
  as?: React.ElementType | string,
  textToCopy?: string,
  children: React.ReactNode | string,
  delay?: number,
}

export default function CopyText(props: CopyTextProps) {
  const {
    as = 'span',
    textToCopy: providedText,
    delay = 2000,
    children,
    className,
    ...rest
  } = props

  const childrenText = typeof children === 'string' ? children : ''
  const textToCopy = providedText ?? childrenText

  const [showMessage, setShowMessage] = React.useState(false)

  React.useEffect(() => {
    if (showMessage) {
      setTimeout(() => {
        setShowMessage(false)
      }, delay)
    }
  }, [showMessage, delay])

  function handleCopy(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    navigator.clipboard.writeText(textToCopy)
    setShowMessage(true)
  }

  return (
    <CopyTextContext.Provider
      value={{ handleCopy, showMessage }}
    >
      {React.createElement(
        as,
        { className: cn('group', className), ...rest },
        children
      )}
    </CopyTextContext.Provider>
  )
}

CopyText.Message = Message
CopyText.Button = Button
