import { z } from 'zod'

export const resumeVisaFormSchema = z.object({
  visa: z.enum(['E7', 'E9', 'D4', 'H2']),
})
