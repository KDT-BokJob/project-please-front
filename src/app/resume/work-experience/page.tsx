'use client'
import { Button } from '@/components/ui/button'
import { CalendarIcon, CloseIcon, PlusIcon } from '@/lib/icons'
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
const currentYear = new Date().getFullYear()
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
            <fieldset
              key={`workExperience_fieldset_${index}`}
              className={'relative flex flex-col gap-4 border-b-2 border-base-secondary-normal-light pb-8 '}
            >
              <Button
                variant={'delete'}
                size={'mini'}
                className="absolute right-0 top-0"
                onClick={() => removeWorkExperience(field)}
              >
                <CloseIcon size={'1.25rem'} />
              </Button>
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
                            variant={'innerLine'}
                            className={cn(
                              'pl-3 text-left font-normal w-full shadow-[inset_0_0_0_1px_#e2e8f0] bg-base-bright-light hover:bg-base-bright-normal',
                              !field.value && 'text-muted-foreground ',
                            )}
                          >
                            {field.value ? format(field.value, 'yyyy/MM/dd') : <span>Pick a date</span>}
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
                          captionLayout="dropdown"
                          fromYear={1980}
                          toYear={currentYear}
                          initialFocus
                          labels={{
                            labelYearDropdown: () => '',
                            labelMonthDropdown: () => '',
                          }}
                          classNames={{
                            caption_label: 'hidden',
                            caption_dropdowns: 'flex flex-row-reverse ',
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
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
                            variant={'innerLine'}
                            className={cn(
                              'pl-3 text-left font-normal w-full shadow-[inset_0_0_0_1px_#e2e8f0] bg-base-bright-light hover:bg-base-bright-normal',
                              !field.value && 'text-muted-foreground ',
                            )}
                          >
                            {field.value ? format(field.value, 'yyyy/MM/dd') : <span>Pick a date</span>}
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
                          captionLayout="dropdown"
                          fromYear={1980}
                          toYear={currentYear}
                          initialFocus
                          labels={{
                            labelYearDropdown: () => '',
                            labelMonthDropdown: () => '',
                          }}
                          classNames={{
                            caption_label: 'hidden',
                            caption_dropdowns: 'flex flex-row-reverse ',
                          }}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
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