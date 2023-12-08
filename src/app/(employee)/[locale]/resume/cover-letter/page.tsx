'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { resumeCoverLetter } from '@/lib/zod-schema/resume/cover-letter'
import useResumeFormStore from '@/store/client/useResumeFormStore'

const FormSchema = resumeCoverLetter

interface TipInterface {
  id: string
  keyword: string
  content: string
}

const tips: TipInterface[] = [
  {
    id: 'resume_conver_letter_tip_1',
    keyword: 'Wanted 클론 코딩 프로젝트',
    content: '경험이 있으시네요! 프로젝트를 진행하면서 힘들었던 점이나 해결한 내용들을 적어주시면 좋아요😊',
  },
  {
    id: 'resume_conver_letter_tip_2',
    keyword: '일처리가 꼼꼼함',
    content:
      '특기가 있으시네요! 어떤 점에서 생각하셨나요? 자신만의 특기를 잘 나타낼 수 있었던 내용을 적어주시면 좋아요😊',
  },
  {
    id: 'resume_conver_letter_tip_3',
    keyword: '한국어 능력 3급',
    content: '한국어 공부를 어떻게 하셨나요? 자신만의 공부법을 소개해주시면 좋아요👍',
  },
]

export default function page({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter()
  const { coverLetterStep, setResumeFormData } = useResumeFormStore()

  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: coverLetterStep === null ? undefined : { coverLetter: coverLetterStep.coverLetter },
  })

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['resumeCoverletter', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values)
    setResumeFormData({ step: 8, data: values })
    router.push(`/${locale}/resume/preview`)
  }

  if (!tl.current) return null

  return (
    <>
      <h1 className="title-m mx-auto mt-[135px] mb-[70px]">📝Cover Letter</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
          <FormField
            control={form.control}
            name="coverLetter"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="자기소개를 작성해주세요." className=" resize-none h-32" {...field} />
                </FormControl>
                <FormDescription className="float-right">
                  {form.watch('coverLetter') ? `${form.watch('coverLetter').length}/1000` : '0/1000'}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex flex-col space-y-2">
        <h2 className="text-base text-base-secondary-normal">Tip</h2>
        <ul className="space-y-2 list-disc ml-6">
          {tips.map((tip) => (
            <li key={tip.id} className="tracking-tighter">
              <span className="label-semi text-base-secondary-dark">{`[${tip.keyword}] `}</span>
              <span className="text-base text-base-secondary-normal">{tip.content}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-between gap-4 mt-auto">
        <Button
          type="button"
          variant={'outline'}
          size={'lg'}
          onClick={() => router.push(`/${locale}/resume/tag-about-you`)}
        >
          {tl.current('common:Back')}
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          Submit
        </Button>
      </div>
    </>
  )
}
