'use client'
import { Button } from '@/components/ui/button'
import { PlusIcon } from '@/lib/icons'
import { resumeWorkExperienceFileFormSchema } from '@/lib/zod-schema/resume/work-experience'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import ResumePreview from '@/components/resumePreview'

const formSchema = resumeWorkExperienceFileFormSchema

export default function page() {
  const [pdfUrl, setPdfUrl] = useState<string>('')
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      readyMadeResume: undefined,
    },
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      const file = e.currentTarget.files[0]
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onloadend = (e) => {
        setPdfUrl((prev) => e.target?.result as string)
      }
    }
  }

  const fileRef = form.register('readyMadeResume', { required: true, onChange: handleChange })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <h1 className={'title-s mt-[135px] mb-[20px]'}>
        Do you have your own resume?
        <br /> If so, just upload it
      </h1>
      {form.getValues('readyMadeResume') && (
        <span className="my-2 text-base-secondary-light">{form.getValues('readyMadeResume')[0].name}</span>
      )}
      <ResumePreview src={pdfUrl} />
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
                  add work experience
                </FormLabel>
                <FormControl>
                  <Input id={'input-file'} className="hidden" type={'file'} accept="application/pdf" {...fileRef} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-between gap-4 mt-auto">
        <Button variant={'outline'} size={'lg'}>
          Back
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </>
  )
}
