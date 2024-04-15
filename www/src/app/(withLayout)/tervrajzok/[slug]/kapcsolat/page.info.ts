import { z } from "zod";

export const Route = {
  name: "TervrajzokSlugKapcsolat",
  params: z.object({
    slug: z.string(),
  })
};

