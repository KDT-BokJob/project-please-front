'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { normalizeBoolean } from '@/lib/utils'
import { resumeWorkExperienceCheckFormSchema } from '@/lib/zod-schema/resume/work-experience'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = resumeWorkExperienceCheckFormSchema

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(normalizeBoolean(values.isExperienced))
    console.log(values)
  }
  return (
    <>
      <h2 className={'title-s mx-auto mt-[135px] mb-[70px]'}>Do you have work experience?</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Visa */}
          <FormField
            control={form.control}
            name="isExperienced"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} className="flex flex-col gap-4">
                    <FormItem className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal ">
                      <FormControl>
                        <RadioGroupItem value={'true'} className="text-base-bright-normal border-base-bright-normal" />
                      </FormControl>
                      <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                        Yes, I do 💪🏻
                      </FormLabel>
                    </FormItem>
                    <FormItem className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal ">
                      <FormControl>
                        <RadioGroupItem value={'false'} className="text-base-bright-normal border-base-bright-normal" />
                      </FormControl>
                      <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                        No, I’m a newcomer 😄
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-between gap-4 mt-auto">
        <Button
          variant={'primary'}
          size={'md'}
          className={
            'text-base-secondary-dark bg-base-bright-normal ring-2 ring-brand-primary-normal hover:text-base-bright-normal'
          }
        >
          Back
        </Button>
        <Button type="submit" variant={'primary'} size={'md'} onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </>
  )
}
