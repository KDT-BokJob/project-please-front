import { z } from 'zod'

const isExperienced = () => {
  return z.enum(['true', 'false'])
  // return z.boolean({
  //   required_error: 'this field must be required',
  // })
}

export const resumeWorkExperienceFormSchema = z.object({
  isExperienced: isExperienced(),
})
