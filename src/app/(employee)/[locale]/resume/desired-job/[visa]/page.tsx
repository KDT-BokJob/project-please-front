'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { CheckboxButton } from '@/components/ui/checkboxButton'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { resumeDesiredJobFormSchema } from '@/lib/zod-schema/resume/resume-desiredJob'

const visaType = [
  {
    visa: 'E9',
    jobs: [
      { job: 'Agriculture', jobCode: '01' },
      { job: 'Fishing', jobCode: '03' },
      { job: 'Mining', jobCode: '07' },
      { job: 'Manufacturing', jobCode: '1034' },
      { job: 'Waste Management', jobCode: '38' },
      { job: 'Construction', jobCode: '41' },
      { job: 'Wholesale and Retail', jobCode: '46' },
      { job: 'Transportation and Warehousing', jobCode: '49,52' },
      { job: 'Publishing', jobCode: '5859' },
    ],
  },
  {
    visa: 'D2',
    jobs: [
      { job: 'Transportation and Warehousing', jobCode: '49,52' },
      { job: 'Accommodation', jobCode: '55' },
    ],
  },
  {
    visa: 'H2',
    jobs: [
      { job: 'Agriculture', jobCode: '01' },
      { job: 'Fishing', jobCode: '03' },
      { job: 'Mining', jobCode: '07' },
      { job: 'Manufacturing', jobCode: '1034' },
      { job: 'Sewage, Waste, and Manure Treatment', jobCode: '37' },
      { job: 'Waste Management', jobCode: '38' },
      { job: 'Construction', jobCode: '4142' },
      { job: 'Wholesale and Retail', jobCode: '4647' },
      { job: 'Transportation and Warehousing', jobCode: '49,52' },
      { job: 'Accommodation', jobCode: '55' },
      { job: 'Restaurants and Bars', jobCode: '56' },
      { job: 'Publishing', jobCode: '5859' },
      { job: 'Business Facility Management and Landscape Services', jobCode: '74' },
      { job: 'Business Support Services', jobCode: '75' },
      { job: 'Social Welfare Services', jobCode: '87' },
      { job: 'Personal and Consumer Goods Repair', jobCode: '95' },
      { job: 'Other Personal Services', jobCode: '96' },
      { job: 'Employment in a Household', jobCode: '97' },
    ],
  },
]
const formSchema = resumeDesiredJobFormSchema
export default function page({ params: { locale, visa } }: { params: { locale: string; visa: string } }) {
  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['desired', 'common'])
      tl.current = t
      setCurrentLang(language)
      console.log(visa)
    }
    translate()
  }, [])

  let targetJobs: any[] = []
  visaType.forEach((obj) => {
    if (obj.visa === visa) targetJobs = obj.jobs
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      desiredjobs: [],
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  if (!tl.current) return null

  return (
    <>
      <h2 className={'title-m mx-auto mt-[135px] mb-[70px]'}>✨{tl.current('Desired_job')}</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="desiredjobs"
            render={({ field }) => (
              <FormItem className="w-64 mx-auto space-y">
                {targetJobs.map((jobName, index) => (
                  <FormItem key={`${jobName}_${index}`}>
                    <FormControl>
                      <CheckboxButton
                        checked={field.value?.includes(jobName.job)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange([...field.value, jobName.job])
                            : field.onChange(field.value?.filter((value) => value !== jobName.job))
                        }}
                      >
                        {jobName.job}
                      </CheckboxButton>
                    </FormControl>
                  </FormItem>
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4 mt-auto">
            <Button variant={'innerLine'} size={'lg'}>
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
