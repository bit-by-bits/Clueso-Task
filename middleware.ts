import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    process.env.NEXT_PUBLIC_HOME_URL || "/",
    process.env.NEXT_PUBLIC_TASK_URL || "/",
  ],
  ignoredRoutes: [],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
