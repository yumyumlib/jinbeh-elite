import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Basic HTTP authentication for staging environment
const STAGING_USERNAME = 'admin'
const STAGING_PASSWORD = 'test'

export function middleware(request: NextRequest) {
  // Get the authorization header
  const authHeader = request.headers.get('authorization')

  if (authHeader) {
    // Parse Basic auth credentials
    const authValue = authHeader.split(' ')[1]
    const [username, password] = atob(authValue).split(':')

    if (username === STAGING_USERNAME && password === STAGING_PASSWORD) {
      return NextResponse.next()
    }
  }

  // Return 401 with WWW-Authenticate header to prompt for credentials
  return new NextResponse('Authentication required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Jinbeh Staging"',
      'Content-Type': 'text/plain',
    },
  })
}

// Apply middleware to all routes except static assets
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
  ],
}
