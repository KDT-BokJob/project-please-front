import * as z from 'zod'

const topikBlockSchema = z
  .string()
  .trim()
  .max(4, {
    message: '4-digit',
  })
  .refine(
    (value) => {
      return /^[0-9]+$/.test(value) && value.length === 4
    },
    { message: '4-digit' },
  )
  .optional()

const selfDiagnosis = () => {
  return z.string().trim().min(1).optional()
}

export const resumeKoreanSkillFormSchema = z
  .object({
    block1: topikBlockSchema,
    block2: topikBlockSchema,
    block3: topikBlockSchema,
    block4: topikBlockSchema,
    // selfDiagnosis: z.optional(selfDiagnosis()),
  })
  .refine(
    (value) => {
      const fullTopikNumber = `${value.block1}${value.block2}${value.block3}${value.block4}`
      return fullTopikNumber.length === 16 && /^[0-9]+$/.test(fullTopikNumber)
    },
    { message: 'Invalid topik document number' },
  )
  .or(
    z.object({
      selfDiagnosis: selfDiagnosis(),
    }),
  )
