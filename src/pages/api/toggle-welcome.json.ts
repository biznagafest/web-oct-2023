import type { APIRoute } from "astro";
import { CONFIG } from "../../data/config";

export const POST: APIRoute = async ({ params, request }) => {
  CONFIG.hasWelcomeMessage = !CONFIG.hasWelcomeMessage;

  return new Response(null, {
    status: 200,
  });
};
