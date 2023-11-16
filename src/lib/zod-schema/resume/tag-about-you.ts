import { z } from 'zod'

export const resumeTagAboutYou = z.object({
  tags: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: 'You have to select at least one tag.',
  }),
})
