import { format } from 'date-fns'
import { z } from 'zod'

const certificateName = () => {
  return z.string().min(1).trim()
}

const certificationAuthority = () => {
  return z.string().min(1).trim()
}

const AcquisitionDate = () => {
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

export const resumeCertificationFormSchema = z.object({
  certificates: z.array(
    z.object({
      certificateName: certificateName(),
      certificationAuthority: certificationAuthority(),
      AcquisitionDate: AcquisitionDate(),
    }),
  ),
})
