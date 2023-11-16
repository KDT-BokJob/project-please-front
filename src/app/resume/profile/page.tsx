'use client'
import { Button } from '@/components/ui/button'
import { CalendarIcon, Camera, DefaultProfile } from '@/lib/icons'
import { cn } from '@/lib/utils'
import React, { useState } from 'react'
import { format } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Calendar } from '@/components/ui/calendar'
import { resumeProfileFormSchema } from '@/lib/zod-schema/resume/profile'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'

const formSchema = resumeProfileFormSchema

export default function page() {
  const [avatarUrl, setAvatarUrl] = useState<string>('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      avatar: undefined,
      firstname: '',
      lastname: '',
      nationality: '',
      gender: '',
      email: 'loginTimeEmail@gmail.com',
    },
    mode: 'onChange',
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.[0]) {
      const file = e.currentTarget.files[0]
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onloadend = (e) => {
        setAvatarUrl((prev) => e.target?.result as string)
      }
    }
  }
  const fileRef = form.register('avatar', { required: true, onChange: handleChange })

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="relative w-32 mx-auto ">
            {form.getValues('avatar') ? (
              <figure
                className={
                  'relative w-[125px] h-[125px] rounded-full overflow-hidden border border-4 border-brand-primary-normal'
                }
              >
                <Image src={avatarUrl} fill alt={`${form.getValues('avatar')[0].name}`} className={''} />
              </figure>
            ) : (
              <DefaultProfile className="text-brand-primary-normal" size={'125px'} />
            )}
            {form.getValues('avatar') && (
              <span className={'text-base-secondary-normal'}>{form.getValues('avatar')[0].name}</span>
            )}
            <FormField
              control={form.control}
              name="avatar"
              render={({ field }) => (
                <FormItem>
                  <FormLabel
                    htmlFor="avatar-image-file"
                    className="inline-block absolute right-0 bottom-0 bg-base-secondary-dark h-6 rounded-full p-1 cursor-pointer"
                  >
                    <Camera size={'1rem'} className={cn('text-base-bright-light ')} />
                  </FormLabel>
                  <FormControl>
                    <Input
                      id={'avatar-image-file'}
                      type={'file'}
                      className="hidden"
                      accept={'image/jpeg, image/jpg, image/png, image/webp'}
                      // {...field}
                      {...fileRef}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* First Name */}
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name *</FormLabel>
                <FormControl>
                  <Input placeholder="first name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name *</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Nationality */}
          <FormField
            control={form.control}
            name="nationality"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nationality *</FormLabel>
                <FormControl>
                  <Input placeholder="nationality" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Gender */}
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Gender *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                    <FormItem className="flex items-center space-x-3 space-y-0 ">
                      <FormControl>
                        <RadioGroupItem value="male" className="" />
                      </FormControl>
                      <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Calendar */}
          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
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
                        {field.value ? format(field.value, 'yyyy.MM.dd') : <span>Pick a date</span>}
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
          {/* Phone number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={''}>Phone number *</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={''}>Email</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* address */}
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={''}>Address *</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* disability */}
          <FormField
            control={form.control}
            name="disability"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormControl>
                  <FormItem className="flex items-center space-x-3 space-y-0 ">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>Have a disability? *</FormLabel>
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit button */}
          <Button type="submit" variant={'primary'} size={'lg'} className="float-right">
            Next
          </Button>
        </form>
      </Form>
    </>
  )
}
