import Step1 from '@/app/employer/job-posting/Step1'
import Header from '@/components/ui/Header'

function page() {
  return (
    <>
      <Header headline={'채용공고 등록'} />
      <main className="mt-20">
        <Step1/>
      </main>
    </>
  )
}

export default page