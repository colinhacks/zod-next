import {string} from "zod/v4";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

  console.log(string().parse("John Doe"));;
  // return NextResponse.redirect(new URL('/home', request.url))

  // do nothing
  // eval(`console.log('hello world')`)

  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/:path*',
}
