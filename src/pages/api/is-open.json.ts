import type { APIRoute } from "astro";
import { CONFIG } from "../../data/config";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(JSON.stringify({ isOpen: CONFIG.hasWelcomeMessage }), {
    status: 200,
  });
};
