'use client'
import { Button } from '@/components/ui/button'
import { CalendarIcon, DeleteIcon, PlusIcon } from '@/lib/icons'
import { resumeWorkExperienceFormSchema } from '@/lib/zod-schema/resume/work-experience'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { format } from 'date-fns'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { Calendar } from '@/components/ui/calendar'

const formSchema = resumeWorkExperienceFormSchema

export default function page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const fieldArray = useFieldArray({
    control: form.control,
    name: 'workExperience',
  })
  const removeWorkExperience = (item: { id: string }) => {
    const idx = fieldArray.fields.map((item) => item.id).indexOf(item.id)
    idx !== -1 && fieldArray.remove(idx)
  }

  const createWorkExperience = () => {
    fieldArray.append({ companyName: '', responsibility: '', entryDate: new Date(), leavingDate: new Date() })
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <>
      <h1 className={'title-m mx-auto mt-[135px] mb-[70px]'}>💼Work Experience</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {fieldArray.fields.map((field, index: number) => (
            <fieldset className={'flex flex-col gap-4 border-b-2 border-base-secondary-normal-light pb-8'}>
              <FormField
                control={form.control}
                name={`workExperience.${index}.companyName`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>company name *</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`workExperience.${index}.responsibility`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>responsibility *</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`workExperience.${index}.entryDate`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>entry date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'outline-transparent border ring-slate-200 pl-3 text-left font-normal w-full hover:outline-transparent focus-visible:ring-brand-primary-light',
                              !field.value && 'text-muted-foreground ',
                            )}
                          >
                            {field.value ? format(field.value, 'yyyy/MM') : <span>Pick a date</span>}
                            <CalendarIcon className="w-4 h-4 ml-auto opacity-50 " />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name={`workExperience.${index}.leavingDate`}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>leaving date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'outline-transparent border ring-slate-200 pl-3 text-left font-normal w-full hover:outline-transparent focus-visible:ring-brand-primary-light',
                              !field.value && 'text-muted-foreground ',
                            )}
                          >
                            {field.value ? format(field.value, 'yyyy/MM') : <span>Pick a date</span>}
                            <CalendarIcon className="w-4 h-4 ml-auto opacity-50 " />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormItem>
                )}
              />
              <Button className="" onClick={() => removeWorkExperience(field)}>
                <DeleteIcon />
              </Button>
            </fieldset>
          ))}
        </form>
      </Form>

      <Button variant={'append'} className="my-5" onClick={() => createWorkExperience()}>
        <PlusIcon />
        add work experience
      </Button>
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
