import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

import {
  Certificate,
  CoverLetter,
  DesiredJob,
  Korean,
  Profile,
  TagAboutMe,
  Visa,
  WorkExperience,
} from '@/lib/types/resume'

const stepVariant = {
  1: 'profileStep',
  2: 'visaStep',
  3: 'desiredJobStep',
  4: 'koreanStep',
  5: 'workExperienceStep',
  6: 'certificateStep',
  7: 'tagAboutMeStep',
  8: 'coverLetterStep',
}

type setResumeFormDateType =
  | { step: 1; data: Profile }
  | { step: 2; data: Visa }
  | { step: 3; data: DesiredJob }
  | { step: 4; data: Korean }
  | { step: 5; data: WorkExperience }
  | { step: 6; data: Certificate }
  | { step: 7; data: TagAboutMe }
  | { step: 8; data: CoverLetter }

interface ResumeForm {
  profileStep: Profile | null
  visaStep: Visa | null
  desiredJobStep: DesiredJob | null
  koreanStep: Korean | null
  workExperienceStep: WorkExperience | null
  certificateStep: Certificate | null
  tagAboutMeStep: TagAboutMe | null
  coverLetterStep: CoverLetter | null
  setResumeFormData: ({ step, data }: setResumeFormDateType) => void
}

const useResumeFormStore = create<ResumeForm>()(
  devtools(
    immer((set) => ({
      profileStep: null,
      visaStep: null,
      desiredJobStep: null,
      koreanStep: null,
      workExperienceStep: null,
      certificateStep: null,
      tagAboutMeStep: null,
      coverLetterStep: null,
      setResumeFormData: ({ step, data }) =>
        set((state) => ({
          // ...state,
          [stepVariant[step]]: data,
        })),
    })),
  ),
)

export default useResumeFormStore
