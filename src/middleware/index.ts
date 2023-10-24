import { sequence } from "astro:middleware";
import { apiAuthMiddleware } from "./api-auth.middleware";

export const onRequest = sequence(apiAuthMiddleware);
