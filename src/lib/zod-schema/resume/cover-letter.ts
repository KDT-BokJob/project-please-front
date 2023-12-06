import { z } from 'zod'

export const resumeCoverLetter = z.object({
  coverLetter: z.string().trim().max(700, {
    message: 'cover letter must not be longer than 700 characters.',
  }),
})
