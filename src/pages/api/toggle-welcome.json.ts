import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
    })
  );
};
