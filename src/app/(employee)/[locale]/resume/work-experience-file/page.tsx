'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import initTranslations from '@/app/i18n'
import ResumePreview from '@/components/resumePreview'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { PlusIcon } from '@/lib/icons'
import { resumeWorkExperienceFileFormSchema } from '@/lib/zod-schema/resume/work-experience'
import useResumeFormStore from '@/store/client/useResumeFormStore'
const formSchema = resumeWorkExperienceFileFormSchema

export default function page({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter()
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const { workExperienceStep, setResumeFormData } = useResumeFormStore()

  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['workExperience', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      readyMadeResume: workExperienceStep === null ? undefined : workExperienceStep.readyMadeResume,
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })
  const resumePdf = form.watch('readyMadeResume')
  const fileRef = form.register('readyMadeResume')

  useEffect(() => {
    if (resumePdf && resumePdf.length > 0) {
      const file = resumePdf[0]
      const blobUrl = URL.createObjectURL(file)
      setPdfUrl(blobUrl)
    }
    return () => {
      URL.revokeObjectURL(pdfUrl)
    }
  }, [resumePdf])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    const data = {
      readyMadeResume: values.readyMadeResume,
      workexp: workExperienceStep?.workexp === undefined ? [] : [...workExperienceStep?.workexp],
    }
    setResumeFormData({ step: 5, data })
    router.push(`/${locale}/resume/work-experience`)
  }
  if (!tl.current) return null

  return (
    <>
      <h1 className={'title-s mt-[135px] mb-[20px]'}>
        {tl.current('Do you have your own resume?')}
        <br /> {tl.current('If so, just upload it')}
      </h1>
      {resumePdf && pdfUrl && <span className="my-2 text-base-secondary-light">{resumePdf[0].name}</span>}
      {pdfUrl && <ResumePreview src={pdfUrl} />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 my-4">
          <FormField
            control={form.control}
            name="readyMadeResume"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  htmlFor="input-file"
                  className="inline-block text-center w-full px-4 py-2 border-dotted border-2 border-brand-primary-normal text-brand-primary-normal"
                >
                  <PlusIcon className="inline" />
                  {tl.current && tl.current('add work experience')}
                </FormLabel>
                <FormControl>
                  <Input
                    id={'input-file'}
                    className="hidden"
                    type={'file'}
                    accept="application/pdf"
                    {...fileRef}
                    defaultValue={undefined}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-between gap-4 mt-auto">
        <Button type="button" variant={'outline'} size={'lg'} onClick={() => router.push(`/${locale}/resume/korean`)}>
          {tl.current('common:Back')}
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          {tl.current('common:Next')}
        </Button>
      </div>
    </>
  )
}
