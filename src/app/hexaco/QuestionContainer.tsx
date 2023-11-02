'use client'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group'

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
function QuestionContainer() {
  const [selected, setSelected] = useState(Array(questions.length).fill(null))
  const answerHandler = (index, score) => {
    const updated = [...selected]
    updated[index] = score

    setSelected(updated)
  }

  return (
    <article>
      {questions.map((question, index) => {
        return (
          <div className="pb-8" key={index}>
            <div className="pb-2 headline">{question}</div>
            <RadioGroup.Root className="flex justify-center gap-4 py-2">
              {answers.map((answer) => {
                return (
                  <div className="flex flex-col items-center gap-2 ">
                    <RadioGroup.Item
                      className="flex justify-center items-center bg-[white] w-[20px] h-[20px] rounded-[100%] [box-shadow:0_2px_10px_var(--black-a7)]
                      outline outline-base-secondary-light focus:[box-shadow:0_0_0_2px_black]
                      "
                      value={answer.label}
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
  )
}

export default QuestionContainer
