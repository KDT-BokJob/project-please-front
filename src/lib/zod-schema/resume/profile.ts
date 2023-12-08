import * as z from 'zod'

const dateFormatRegex = /^\d{4}-\d{2}-\d{2} (0\d|1\d|2[0-3]):(00):([0-5][0-9])$/

const MAX_FILE_SIZE = 1024 * 1024 * 5
const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const ACCEPTED_IMAGE_TYPES = ['jpeg', 'jpg', 'png', 'webp']

const avatarSchema = () => {
  return z
    .custom<FileList>()
    .refine((file) => file === undefined || (file[0]?.size ?? 0) <= MAX_FILE_SIZE, `Max image size is 5MB.`)
    .optional()
}
// .refine((file) => file?.length == 1, 'File is required.')
//     .refine((file) => file[0]?.type === ACCEPTED_PDF_MIME_TYPES, 'Must be a PDF.')
//     .refine((file) => file[0]?.size <= MAX_FILE_SIZE, `Max file size is ${FILE_SIZE_OFFSET}MB.`),
const nameWithMinSchema = (min: number, name: string) => {
  return z.string().min(min, {
    message: `${name} must be at least ${min} characters.`,
  })
}
const genderSchema = () => {
  return z.string().refine((val) => val === 'male' || val === 'female', {
    message: 'Gender must be either "male" or "female"',
  })
}
const birthDaySchema = () => {
  return z.string().refine((val) => dateFormatRegex.test(val), {
    message: 'Date must be in the format YYYY-MM-DD',
  })
}

const birthDaySchema2 = () => {
  return z.date({
    required_error: 'Date must be required',
  })
}

const phoneNumberSchema = () => {
  const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
  return z.string().refine((val) => phoneRegex.test(val), {
    message: 'Invalid phone number',
  })
}

const emailSchema = () => {
  // const emailRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
  // return z.string().refine((val) => emailRegex.test(val), {
  //   message: 'Invalid phone number',
  // })
  return z.string().min(1, { message: 'This field has to be filled.' }).email('This is not a valid email format.')
}

const addressSchema = () => {
  return z.string().min(1, { message: 'This address field has to be filled.' })
}

const disabilitySchema = () => {
  return z
    .boolean({
      required_error: 'disability field must be required',
    })
    .default(false)
  // return z.boolean({
  //   required_error: 'disability field must be required',
  // })
}
export const resumeProfileFormSchema = z.object({
  avatar: avatarSchema(),
  firstname: nameWithMinSchema(1, 'firstname'),
  lastname: nameWithMinSchema(1, 'lastname'),
  nationality: nameWithMinSchema(2, 'nationality'),
  gender: genderSchema(),
  birthday: birthDaySchema2(),
  phoneNumber: phoneNumberSchema(),
  email: emailSchema(),
  address: addressSchema(),
  disability: disabilitySchema(),
})
