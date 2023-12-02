/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useState } from 'react'

import Step1 from '@/app/employer/job-posting/create/Step1'
import Step2 from '@/app/employer/job-posting/create/Step2'
import Step3 from '@/app/employer/job-posting/create/Step3'
import Header from '@/components/ui/Header'

function page() {
  const [formState, setFormState] = useState(1)
  return (
    <>
      <Header headline={'채용공고 등록'} />
      <main className="mt-20">
        {formState === 1 && <Step1 setFormState={setFormState} />}
        {formState === 2 && <Step2 setFormState={setFormState} />}
        {formState === 3 && <Step3 setFormState={setFormState} />}
      </main>
    </>
  )
}

export default page
