import { z } from 'zod'

export const resumeVisaFormSchema = z.object({
  visa: z.string(),
})
