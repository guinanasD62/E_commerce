export const authConfig = {
  providers:[], //added
  pages: { //if not autheticated, direct to login page
    signIn: "/login",
  },
  //not allowed to see add cart, but redirected to login
  // callbackauthorization logic:: const isOnCart = nextUrl.pathname.startsWith('/customer/cart');
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = auth?.user; //session
      const isOnCart = request.nextUrl.pathname.startsWith("/customer/cart");
      if (isOnCart) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/customer/cart", request.nextUrl));
      }
      return true; 
    },
  },

};

// // import type { NextAuthConfig } from 'next-auth';
 
// // intead of writing provider here that suppose hashPassword, since you are writing bcrypt lib is not JS dependency, c new file

// //https://nextjs.org/learn/dashboard-app/adding-authentication

// app/authconfig.js
// export const authConfig = {
//   providers: [], // Add your authentication providers here
//   pages: {
//     signIn: "/login", // Redirect to this page for sign-in
//   },
//   callbacks: {
//     async authorized({ auth, request }) {
//       const isLoggedIn = !!auth?.user;
//       const isOnCart = request.nextUrl.pathname.startsWith("/customer/cart");

//       if (isOnCart) {
//         if (isLoggedIn) return true;
//         return false;
//       }
//       return true;
//     },
//   },
// };
