'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { resumeDesiredJobFormSchema } from '@/lib/zod-schema/resume/resume-desiredJob'
import { resumeVisaFormSchema } from '@/lib/zod-schema/resume/resume-visa'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
export default function page({ params }: { params: { visa: string } }) {
  let targetJobs: any[] = []
  visaType.forEach((obj) => {
    if (obj.visa === params.visa) targetJobs = obj.jobs
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <h2 className={'title-m mx-auto mt-[135px] mb-[70px]'}>✨Desired job</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Visa */}
          <FormField
            control={form.control}
            name="desiredjobs"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} className="flex flex-col gap-4">
                    {targetJobs.map((jobName, index: number) => (
                      <FormItem
                        key={`${jobName}_${index}`}
                        className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal "
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={`${jobName.job}`}
                            // className="text-base-bright-normal checked:border-slate-200"
                            className="text-base-bright-normal border-base-bright-normal"
                          />
                        </FormControl>
                        <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                          {jobName.job}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between gap-4 mt-auto">
            <Button variant={'innerLine'} size={'lg'}>
              Back
            </Button>
            <Button type="submit" variant={'primary'} size={'lg'}>
              Next
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
