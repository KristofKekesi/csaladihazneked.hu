import { z } from "zod";

export const Route = {
  name: "TervrajzokSlug",
  params: z.object({
    slug: z.string(),
  })
};

