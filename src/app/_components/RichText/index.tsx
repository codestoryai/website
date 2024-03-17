import React from 'react'

import serialize from './serialize'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const RichText: React.FC<{ content: any }> = ({ content }) => {
  if (!content) {
    return null
  }

  return (
    <div>
      {serialize(content)}
    </div>
  )
}

export default RichText
