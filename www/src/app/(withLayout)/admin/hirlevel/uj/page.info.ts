import { z } from "zod";

export const Route = {
  name: "AdminHirlevelUj",
  params: z.object({
  }),
  search: z.object({
    password: z.string().optional(),
  })
};

