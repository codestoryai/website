'use client'

import Root from 'payload/dist/admin/Root'
import React from 'react';

const PayloadAdmin = () => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  return <Root />
}

export default PayloadAdmin;
