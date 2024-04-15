import { z } from "zod";

export const Route = {
  name: "AdminHirlevelElonezet",
  params: z.object({
  }),
  search: z.object({
    subject: z.string().optional(),
    message: z.string().optional(),
  })
};

