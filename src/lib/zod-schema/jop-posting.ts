import * as z from 'zod'

const genderSchema = () => {
  return z.string().refine((val) => val === 'male' || val === 'female' || val === 'none', {
    message: '모집 성별을 선택해주세요.',
  })
}
const phoneNumberSchema = () => {
  const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
  return z.string().refine((val) => phoneRegex.test(val), {
    message: '전화번호 형식이 올바르지 않습니다.',
  })
}

const availableVisaSchema = () => {
  return z.array(z.enum(['c4', 'e4', 'e7', 'f4'])).refine((val) => val.length > 0, {
    message: '지원 가능 비자 유형을 하나 이상 선택해주세요.',
  })
}
export const jobPostingFormSchema = z.object({
  title: z.string().min(7).max(60),
  name: z.string().min(2).max(40),
  phone: phoneNumberSchema(),
  gender: genderSchema(),
  availableVisa: availableVisaSchema(),
  isVisaTransform: z.boolean({ required_error: '비자전환 가능 여부를 체크해주세요.' }),
})
