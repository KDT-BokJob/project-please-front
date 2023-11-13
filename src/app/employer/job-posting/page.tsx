import { CustomCheckbox } from '@/app/employer/job-posting/CustomCheckbox'
import Step1 from '@/app/employer/job-posting/Step1'
import Step2 from '@/app/employer/job-posting/Step2'
import Step3 from '@/app/employer/job-posting/Step3'

import Header from '@/components/ui/Header'

function page() {
  return (
    <>
      <Header headline={'채용공고 등록'} />
      <main className="mt-20">
        <Step2 />
        <CustomCheckbox>월</CustomCheckbox>
      </main>
    </>
  )
}

export default page
