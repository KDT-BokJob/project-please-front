import * as z from 'zod'

const availableVisaSchema = () => {
  return z.array(z.string()).refine((val) => val.some((availableVisa) => availableVisa), {
    message: '지원가능 비자를 하나 이상 선택해주세요.',
  })
}
const phoneNumberSchema = () => {
  const phoneRegex = new RegExp(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/)
  return z.string().refine((val) => phoneRegex.test(val), {
    message: '전화번호 형식이 올바르지 않습니다.',
  })
}

const genderSchema = () => {
  return z.string({
    required_error: '모집 성별을 선택해주세요.',
  })
}
const availableWorkDaysSchema = () => {
  return z.array(z.string()).refine((val) => val.some((work_days) => work_days), {
    message: '근무 요일을 하루 이상 선택해주세요.',
  })
}
const countSchema = () => {
  return z.coerce.number({ required_error: '모집인원을 입력해주세요.' }).refine(
    (value) => {
      if (typeof value !== 'number') {
        throw new Error('숫자를 입력해주세요')
      }
      return true
    },
    {
      message: '숫자를 입력해주세요',
    },
  )
}
const SalarySchema = () => {
  return z.coerce.number({ required_error: '급여를 입력해주세요.' }).refine(
    (value) => {
      if (typeof value !== 'number') {
        throw new Error('숫자를 입력해주세요')
      }
      return true
    },
    {
      message: '숫자를 입력해주세요',
    },
  )
}
export const jobPostingFormSchema = z.object({
  title: z.string({required_error:"필수입력"}).min(10,{message:"10자 이상 입력해주세요."}).max(60,{message:"60자 이하로 작성해주세요."}),
  name: z.string().min(2).max(40),
  phone: phoneNumberSchema(),
  gender: genderSchema(),
  availableVisa: availableVisaSchema(),
  isVisaTransform: z.boolean({ required_error: '비자전환 가능 여부를 체크해주세요.' }),
})

export const jobPostingFormSchema2 = z.object({
  prefered_nationality: z.string({ required_error: '희망하는 국적을 선택해주세요.' }),
  count: countSchema(),
  salary_type: z.string({ required_error: '필수선택' }), //수정필요
  salary: SalarySchema(),
  work_type: z.string({ required_error: '근무 형태를 선택해주세요.' }),
  work_period: z.object({
    from: z.date({ required_error: '시작일을 선택해주세요.' }),
    to: z.date({ required_error: '종료일을 선택해주세요.' }),
  }),

  work_days: availableWorkDaysSchema(),
  work_start_hour: z.string({ required_error: '근로 시작 시간을 선택해주세요.' }),
  work_end_hour: z.string({ required_error: '근로 마감 시간을 선택해주세요.' }),
  is_worktime_flexible: z.coerce.boolean(),
  is_workperiod_flexible: z.coerce.boolean(),
  work_location: z.string({ required_error: '근무 장소를 입력해주세요.' }),
})

export const jobPostingFormSchema3 = z.object({
  work_description: z.string().max(1500, { message: '최대 1500자까지 작성가능합니다.' }),
  work_description_file: z.any(),
})
