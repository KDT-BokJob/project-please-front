import { z } from 'zod'

const desiredJobSchema = () => {
  return z.array(z.string()).refine((val) => val.some((desiredjobs) => desiredjobs), {
    message: '지원을 희망하는 직무를 하나 이상 선택해주세요.',
  })
}

export const resumeDesiredJobFormSchema = z.object({
  desiredjobs: desiredJobSchema(),
})
