import { z } from "zod";

export const Route = {
  name: "TervrajzokSlugHasonloak",
  params: z.object({
    slug: z.string(),
  })
};

