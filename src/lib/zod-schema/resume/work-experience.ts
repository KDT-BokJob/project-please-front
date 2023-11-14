import { format } from 'date-fns'
import { z } from 'zod'

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
