import QuestionContainer from '@/app/hexaco/QuestionContainer'
import ProgressBar from '@/components/ui/progressBar'
import React from 'react'

function page() {
  return (
    <>
      <ProgressBar previous={10} current={90}/>
      <QuestionContainer/>
    </>
  )
}

export default page