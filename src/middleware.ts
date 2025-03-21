import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CORS configuration
const corsOptions = {
  origin: process.env.NEXT_PUBLIC_SITE_URL || 'https://luckylogic.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400, // 24 hours
};

export function middleware(request: NextRequest) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': corsOptions.origin,
        'Access-Control-Allow-Methods': corsOptions.methods.join(', '),
        'Access-Control-Allow-Headers': corsOptions.allowedHeaders.join(', '),
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Max-Age': corsOptions.maxAge.toString(),
      },
    });
  }

  // Create a response object
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set('Access-Control-Allow-Origin', corsOptions.origin);
  response.headers.set('Access-Control-Allow-Credentials', 'true');
  response.headers.set(
    'Access-Control-Allow-Methods',
    corsOptions.methods.join(', '),
  );
  response.headers.set(
    'Access-Control-Allow-Headers',
    corsOptions.allowedHeaders.join(', '),
  );

  // Add security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), browsing-topics=()',
  );

  return response;
}

export const config = {
  matcher: ['/api/:path*', '/api/auth/:path*'],
};
