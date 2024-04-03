import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/events:id',
    '/assets/images/logo.svg',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes:[
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};