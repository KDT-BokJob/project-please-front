import { format } from 'date-fns'
import { z } from 'zod'

const FILE_SIZE_OFFSET = 5
const MAX_FILE_SIZE = 1024 * 1024 * FILE_SIZE_OFFSET
const ACCEPTED_PDF_MIME_TYPES = 'application/pdf'

const isExperienced = () => {
  return z.enum(['true', 'false'])
  // return z.boolean({
  //   required_error: 'this field must be required',
  // })
}

export const resumeWorkExperienceCheckFormSchema = z.object({
  isExperienced: isExperienced(),
})

const companyName = () => {
  return z.string().min(1).trim()
}

const responsibility = () => {
  return z.string().min(1).trim()
}

const entryDate = () => {
  return z.coerce
    .date()
    .min(new Date('1900-01-01'), { message: "Please select a date other, It's too old" })
    .max(new Date(), { message: 'Please select a date other than today' })
    .refine(
      (value) => {
        const regex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/
        return regex.test(format(value, 'yyyy/MM/dd'))
      },
      {
        message: 'Invalid date format.',
      },
    )
}

const leavingDate = () => {
  return z.coerce
    .date()
    .min(new Date('1900-01-01'), { message: "Please select a date other, It's too old" })
    .max(new Date(), { message: 'Please select a date other than today' })
    .refine(
      (value) => {
        const regex = /^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/
        return regex.test(format(value, 'yyyy/MM/dd'))
      },
      {
        message: 'Invalid date format.',
      },
    )
}

export const resumeWorkExperienceFormSchema = z.object({
  workExperience: z.array(
    z
      .object({
        companyName: companyName(),
        responsibility: responsibility(),
        entryDate: entryDate(),
        leavingDate: leavingDate(),
      })
      .refine(
        (value) => {
          const entry = new Date(value.entryDate)
          const leave = new Date(value.leavingDate)
          return entry <= leave
        },
        { message: 'Invalid Date' },
      ),
  ),
})
const pdfSchema = () => {
  return z
    .custom<FileList>()
    .refine((file) => {
      return file === undefined || (file[0]?.size ?? 0) <= MAX_FILE_SIZE
    }, `Max file size is ${FILE_SIZE_OFFSET}MB.`)
    .optional()
}
export const resumeWorkExperienceFileFormSchema = z.object({
  readyMadeResume: pdfSchema(),
})
