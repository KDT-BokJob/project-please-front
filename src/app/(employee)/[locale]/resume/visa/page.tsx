'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { resumeVisaFormSchema } from '@/lib/zod-schema/resume/visa'
import useResumeFormStore from '@/store/client/useResumeFormStore'

const formSchema = resumeVisaFormSchema
const VISA_LIST = ['E9', 'D2', 'H2']

export default function page({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter()
  const { visaStep, setResumeFormData } = useResumeFormStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: visaStep === null ? undefined : visaStep,
  })

  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['visaType', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setResumeFormData({ step: 2, data: values })
    // router.push('/resume/required-job')
    router.push(`/${locale}/resume/desired-job/${values.visa}`)
  }
  if (!tl.current) return null

  return (
    <>
      <h2 className={'title-m mx-auto mt-[135px] mb-[70px]'}>📝{tl.current('Visa Type')}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Visa */}
          <FormField
            control={form.control}
            name="visa"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} className="flex flex-col gap-4">
                    {VISA_LIST.map((visaName, index: number) => (
                      <FormItem
                        key={`${visaName}_${index}`}
                        className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal "
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={`${visaName}`}
                            className="text-base-bright-normal border-base-bright-normal"
                          />
                        </FormControl>
                        <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                          {visaName}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit button */}
          <div className="flex justify-between gap-4 mt-auto">
            <Button
              type={'button'}
              variant={'innerLine'}
              size={'lg'}
              onClick={() => router.push(`/${locale}/resume/profile`)}
            >
              {tl.current('common:Back')}
            </Button>
            <Button type="submit" variant={'primary'} size={'lg'}>
              {tl.current('common:Next')}
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
