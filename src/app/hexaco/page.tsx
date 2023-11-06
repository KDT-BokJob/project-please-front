'use client'
import ProgressBar from '@/components/ui/progressBar'
import * as RadioGroup from '@radix-ui/react-radio-group'
import { useState, useEffect} from 'react'

const questions = [
  'I would be quite bored by a visit to an art gallery.',
  'I clean my office or home quite frequently.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
  'I rarely hold a grudge, even against people who have badly wronged me.',
]
const answers = [
  { label: 'Strongly Disagree', score: -5 },
  { label: 'Disagree', score: -3 },
  { label: 'Neutral', score: 0 },
  { label: 'Agree', score: 3 },
  { label: 'Strongly Agree', score: 5 },
]

function page() {
  const [progressStatus, setProgressStatus] = useState([0, 0])

  useEffect(()=>{
    const handleScroll = ()=>{
      const windowHeight= window.innerHeight;
      const documentHeight= document.documentElement.scrollHeight;
    }
    window.addEventListener("scroll", handleScroll)
  })

  return (
    <>
      <article>
        <ProgressBar previous={progressStatus[0]} current={progressStatus[1]} />
        {questions.map((question, index) => {
          return (
            <div className="pb-8" key={index}>
              <div className="w-full pb-2 label-semi">{question}</div>
              <RadioGroup.Root className="flex justify-center gap-4 py-2">
                {answers.map((answer) => {
                  return (
                    <div className="flex flex-col items-center gap-2 ">
                      <RadioGroup.Item
                        className="flex justify-center items-center bg-[white] w-[20px] h-[20px] rounded-[100%] [box-shadow:0_2px_10px_var(--black-a7)]
                      outline outline-base-secondary-light focus:[box-shadow:0_0_0_2px_black]
                      "
                        value={answer.label}
                        onClick={progressHandler}
                      >
                        <RadioGroup.Indicator className="after:content-[''] after:block  rounded-full relative  w-[75%] h-[75%] bg-brand-primary-normal "></RadioGroup.Indicator>
                      </RadioGroup.Item>
                      <label className="btn-semi">{answer.score}</label>
                    </div>
                  )
                })}
              </RadioGroup.Root>
            </div>
          )
        })}
      </article>
    </>
  )
}

export default page
