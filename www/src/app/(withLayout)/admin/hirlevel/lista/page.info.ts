import { z } from "zod";

export const Route = {
  name: "AdminHirlevelLista",
  params: z.object({
  }),
  search: z.object({
    password: z.string().optional(),
  })
};

