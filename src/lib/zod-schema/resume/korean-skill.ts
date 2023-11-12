import * as z from 'zod'

const topikBlockSchema = z
  .string()
  .max(4, {
    message: '4-digit',
  })
  .refine(
    (value) => {
      return /^[0-9]+$/.test(value) && value.length === 4
    },
    { message: '4-digit' },
  )

const selfDiagnosis = () => {
  return z.string()
}

export const resumeKoreanSkillFormSchema = z
  .object({
    block1: topikBlockSchema,
    block2: topikBlockSchema,
    block3: topikBlockSchema,
    block4: topikBlockSchema,
    selfDiagnosis: selfDiagnosis(),
  })
  .refine(
    (value) => {
      const fullTopikNumber = `${value.block1}${value.block2}${value.block3}${value.block4}`
      return fullTopikNumber.length === 16 && /^[0-9]+$/.test(fullTopikNumber)
    },
    { message: 'Invalid topik document number' },
  )
