import { z } from 'zod'

export const resumeVisaFormSchema = z.object({
  visa: z.enum(['E9', 'D2', 'H2']),
})
