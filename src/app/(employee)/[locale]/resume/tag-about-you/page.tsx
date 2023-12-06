'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { resumeTagAboutYou } from '@/lib/zod-schema/resume/tag-about-you'
import useResumeFormStore from '@/store/client/useResumeFormStore'

const tags = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },

  {
    id: 'boot',
    label: 'Boot',
  },
  {
    id: 'etc',
    label: 'Etc',
  },
  {
    id: 'media',
    label: 'Media',
  },
  {
    id: 'root',
    label: 'Root',
  },
  {
    id: 'sys',
    label: 'Sys',
  },
  {
    id: 'var',
    label: 'Var',
  },

  {
    id: 'usr',
    label: 'Usr',
  },
  {
    id: 'run',
    label: 'Run',
  },
  {
    id: 'snap',
    label: 'Snap',
  },
  {
    id: 'proc',
    label: 'Proc',
  },
  {
    id: 'lib',
    label: 'Lib',
  },
  {
    id: 'dev',
    label: 'Dev',
  },
] as const

const FormSchema = resumeTagAboutYou

export default function page({ params: { locale } }: { params: { locale: string } }) {
  const router = useRouter()
  const { tagAboutMeStep, setResumeFormData } = useResumeFormStore()

  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: tagAboutMeStep === null ? undefined : { tags: tagAboutMeStep.tags },
  })

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['resumeTagAboutYou', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])

  function onSubmit(values: z.infer<typeof FormSchema>) {
    console.log(values)
    setResumeFormData({ step: 7, data: values })
    router.push(`/${locale}/resume/cover-letter`)
  }

  if (!tl.current) return null

  return (
    <>
      <h1 className="title-m mx-auto mt-[135px] mb-[70px]">🏷️Tag about you</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="tags"
            render={() => (
              <FormItem className={'flex flex-wrap space-x-2 space-y-0 w-full '}>
                {tags.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="tags"
                    render={({ field }) => {
                      return (
                        <FormItem key={item.id} className="group flex flex-wrap items-center">
                          <FormControl>
                            <Checkbox
                              className="invisible w-0 h-0"
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(field.value?.filter((value) => value !== item.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm label-semi px-2 py-1 rounded-md cursor-pointer border border-2 border-base-bright-dark bg-base-bright-normal group-[&:has(input[checked])]:text-base-bright-light group-[&:has(input[checked])]:bg-brand-primary-normal group-[&:has(input[checked])]:border-brand-primary-normal">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <div className="flex justify-between gap-4 mt-auto">
        <Button
          type={'button'}
          variant={'outline'}
          size={'lg'}
          onClick={() => router.push(`/${locale}/resume/certificate`)}
        >
          Back
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          Next
        </Button>
      </div>
    </>
  )
}
