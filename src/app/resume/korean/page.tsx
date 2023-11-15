'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { cn } from '@/lib/utils'
import { resumeKoreanSkillFormSchema } from '@/lib/zod-schema/resume/korean-skill'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = resumeKoreanSkillFormSchema
type formSchemaShape = typeof formSchema._def.schema.shape
type formSchemaKeys = keyof formSchemaShape

type TopikStatus = { label_name: string; value: string }
const topikStatus: TopikStatus[] = [
  { label_name: 'Test Type', value: 'TOPIK1' },
  { label_name: 'Level', value: 'Level 1' },
  { label_name: 'TestDate', value: '2023-04-09' },
  { label_name: 'Pass', value: 'O' },
]

const SELF_DIAGNOSIS_DATA = [
  'No Korean at all',
  'Basic language skills for survival',
  'Intermediate',
  'Bussiness',
  'Fluent',
  'Native',
]

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <h2 className="title-m mx-auto mt-[135px] mb-[70px]">Korean skill💬</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Visa */}
          <FormLabel>Topik number</FormLabel>
          {/* <div className="flex gap-1 items-center [&>*:not(:first-child)]:before:content-['-']"> */}
          <div className="flex gap-1 items-center justify-start">
            {Object.keys(formSchema._def.schema.shape)
              .slice(0, 4)
              .map((key, index: number) => (
                <FormField
                  key={`${key}_${index}`}
                  control={form.control}
                  name={`${key as formSchemaKeys}`}
                  render={({ field }) => (
                    <div className="flex flex-col justify-start items-center h-[60px]">
                      <div className="flex items-center">
                        {index !== 0 && <span className="text-base-secondary-normal">-</span>}
                        <FormItem className={'space-y-3'}>
                          <FormControl>
                            <Input {...field} />
                          </FormControl>
                        </FormItem>
                      </div>
                      <FormMessage className="line-clamp-1" />
                    </div>
                  )}
                />
              ))}
          </div>

          <div className="flex justify-between gap-4 btn-semi">
            <Button variant={'outline'} className="px-2 w-full" size={'mini'}>
              Don't have Topick
            </Button>
            <Button variant={'outline'} className="px-2 w-full" size={'mini'}>
              Get Confirm
            </Button>
          </div>

          <div className="flex flex-col gap-2 divide-y-2 divide-base-secondary-light">
            {topikStatus.map((field, index: number) => (
              <div key={`${field.label_name}_${index}`} className="flex justify-between pt-2">
                <span>{field.label_name}</span>
                <span>{field.value}</span>
              </div>
            ))}
          </div>

          <FormField
            control={form.control}
            name="selfDiagnosis"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col gap-4">
                    {SELF_DIAGNOSIS_DATA.map((level, index: number) => (
                      <FormItem
                        key={`${level}_${index}`}
                        className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal "
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={`${level}`}
                            // className="text-base-bright-normal checked:border-slate-200"
                            className="text-base-bright-normal border-base-bright-normal"
                          />
                        </FormControl>
                        <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                          {level}
                        </FormLabel>
                      </FormItem>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      {/* Submit button */}
      <div className="flex justify-between gap-4 mt-auto">
        <Button variant={'innerLine'} size={'lg'}>
          Back
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </>
  )
}
