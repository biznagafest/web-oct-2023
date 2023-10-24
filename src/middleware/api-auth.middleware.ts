import { defineMiddleware } from "astro:middleware";

export const apiAuthMiddleware = defineMiddleware(async (context, next) => {
  if (!context.url.pathname.startsWith("/api")) {
    return next();
  }

  const authorization = context.request.headers.get("Authorization");
  const authToken = import.meta.env.AUTH_TOKEN;

  if (authorization !== authToken) {
    return new Response("Unauthorized", {
      status: 401,
    });
  }

  return next();
});
