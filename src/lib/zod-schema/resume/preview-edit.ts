import { z } from 'zod'

import { resumeCertificationFormSchema } from './certification'
import { resumeCoverLetter } from './cover-letter'
import { resumeProfileFormSchema } from './profile'
import { resumeTagAboutYou } from './tag-about-you'
import { resumeVisaFormSchema } from './visa'

export const resumePreviewEditFormSchema = z
  .object({})
  .merge(resumeProfileFormSchema.partial())
  .merge(resumeVisaFormSchema)
  // .merge(resumeKoreanSkillFormSchema)
  .merge(resumeCertificationFormSchema)
  .merge(resumeTagAboutYou)
  .merge(resumeCoverLetter)
