import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const locales = ['de', 'en', 'lv'];
export const defaultLocale = 'de';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Exclude static files and APIs from middleware checks
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/api') ||
    pathname === '/favicon.ico' || 
    pathname.includes('.') // Match filenames with extensions like .jpg, .png
  ) {
    return;
  }

  // Check if the route already has a language attached
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect to localized version
  // Keep query params while redirecting 
  request.nextUrl.pathname = `/${defaultLocale}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|images|favicon.ico).*)'],
};
