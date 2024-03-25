const policies = {
  'child-src': ["'self'"],
  'connect-src': ["'self'", 'https://maps.googleapis.com', 'https://us.i.posthog.com'],
  'default-src': ["'self'"],
  'font-src': ["'self'", "https://cdn.jsdelivr.net"],
  'frame-src': ["'self'"],
  'img-src': ["'self'", "data:", 'https://raw.githubusercontent.com'],
  'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'", 'https://maps.googleapis.com', 'https://cdn.jsdelivr.net'],
  'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com', 'https://cdn.jsdelivr.net'],
  'worker-src': ["'self'", "blob:"],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
