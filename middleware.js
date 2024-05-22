import NextAuth from 'next-auth';
import { authConfig } from './src/app/authconfig';

 //./auth.config
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

//https://nextjs.org/learn/dashboard-app/adding-authentication

// middleware.js
// import { getToken } from "next-auth/jwt";
// import { NextResponse } from "next/server";

// export async function middleware(request) {
//   const token = await getToken({ req: request });
//   const isLoggedIn = !!token;
//   const isOnCart = request.nextUrl.pathname.startsWith("/customer/cart");

//   if (isOnCart && !isLogge dIn) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: "/customer/cart",
// } ;
