'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { TFunction } from 'i18next'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { CalendarIcon, Camera, DefaultProfile } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { resumeProfileFormSchema } from '@/lib/zod-schema/resume/profile'
import useResumeFormStore from '@/store/client/useResumeFormStore'

const formSchema = resumeProfileFormSchema
const currentYear = new Date().getFullYear()

export default function page({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter()
  const [avatarPreview, setAvatarPreview] = useState<string>('')
  const { profileStep, setResumeFormData } = useResumeFormStore()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...profileStep },
  })

  const avatarImage = form.watch('avatar')
  const fileRef = form.register('avatar')

  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['resumeProfile', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])

  useEffect(() => {
    if (avatarImage && avatarImage.length > 0) {
      const file = avatarImage[0]
      const blobUrl = URL.createObjectURL(file)
      setAvatarPreview(blobUrl)
    }
    return () => {
      URL.revokeObjectURL(avatarPreview)
    }
  }, [avatarImage])

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)

    setResumeFormData({ step: 1, data: values })
    router.push(`/${locale}/resume/visa`)
  }

  if (!tl.current) return null

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="relative w-32 mx-auto ">
            {avatarPreview ? (
              <figure
                className={
                  'relative w-[125px] h-[125px] rounded-full overflow-hidden border border-4 border-brand-primary-normal'
                }
              >
                <Image src={avatarPreview} fill alt={'avatar'} className={''} />
              </figure>
            ) : (
              <DefaultProfile className="text-brand-primary-normal" size={'125px'} />
            )}
            {avatarPreview && avatarImage && (
              <span className={'text-base-secondary-normal'}>{avatarImage[0].name}</span>
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
                      defaultValue={undefined}
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
                <FormLabel>{tl.current && tl.current('First name')} *</FormLabel>
                <FormControl>
                  <Input placeholder={tl.current && tl.current('First name')} {...field} />
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
                <FormLabel>{tl.current && tl.current('Last name')} *</FormLabel>
                <FormControl>
                  <Input type="text" placeholder={tl.current && tl.current('Last name')} {...field} />
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
                <FormLabel>{tl.current && tl.current('Gender')} *</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex gap-4">
                    <FormItem className="flex items-center space-x-3 space-y-0 ">
                      <FormControl>
                        <RadioGroupItem value="male" className="" />
                      </FormControl>
                      <FormLabel className="font-normal">{tl.current && tl.current('Male')}</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">{tl.current && tl.current('Female')}</FormLabel>
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
            name={`birthday`}
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>{tl.current && tl.current('Date of birth')}</FormLabel>
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
                        {field.value ? (
                          format(field.value, 'yyyy.MM.dd')
                        ) : (
                          <span>{tl.current && tl.current('common:Pick_a_date')}</span>
                        )}
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
          {/* Phone number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={''}>{tl.current && tl.current('Phone number')} *</FormLabel>
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
                <FormLabel className={''}>{tl.current && tl.current('Email')}</FormLabel>
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
                <FormLabel className={''}>{tl.current && tl.current('Address')} *</FormLabel>
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
                      <Checkbox defaultChecked={false} checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>{tl.current && tl.current('Have a disability?')} *</FormLabel>
                  </FormItem>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Submit button */}
          <Button type="submit" variant={'primary'} size={'lg'} className="float-right">
            {tl.current && tl.current('common:Next')}
          </Button>
        </form>
      </Form>
    </>
  )
}
