import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const STAGING_USERNAME = 'admin'
const STAGING_PASSWORD = 'test'

export function middleware(request: NextRequest) {
    const authHeader = request.headers.get('authorization')
    if (authHeader) {
          const authValue = authHeader.split(' ')[1]
          const [username, password] = atob(authValue).split(':')
          if (username === STAGING_USERNAME && password === STAGING_PASSWORD) {
                  return NextResponse.next()
          }
    }
    return new NextResponse('Authentication required', {
          status: 401,
          headers: {
                  'WWW-Authenticate': 'Basic realm="Jinbeh Staging"',
                  'Content-Type': 'text/plain',
          },
    })
}

export const config = {
    matcher: [
          '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)$).*)',
        ],
}
