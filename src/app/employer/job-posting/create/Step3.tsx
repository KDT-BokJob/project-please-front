'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { jobPostingFormSchema3 } from '@/lib/zod-schema/jop-posting'

const formSchema = jobPostingFormSchema3

function Step3({ setFormData, setFormState, formData }) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      work_description: formData.work_description,
      work_description_file: formData.work_description_file,
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setFormData((prevData: any) => ({ ...prevData, ...values }))

    //work_period 서버로 보낼 때, 2023-08-11 형식으로 startdate, enddate나눠서
    const { work_period, ...formDataWithoutWorkPeriod } = formData
    const {
      work_period: { from, to },
    } = work_period

    const formatDate = (date) => format(date, 'yyyy-MM-dd')

    const workStartDate = formatDate(from)
    const workEndDate = formatDate(to)

    setFormData({ ...formDataWithoutWorkPeriod, workStartDate: workStartDate, workEndDate: workEndDate })

    //현재 시간값은 string으로 전달됨 "02:30" api 데이터 형식과 맞추기.
    //공고등록 api 요청
  }
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 h-42 ">
          <FormField
            control={form.control}
            name="work_description"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel className="font-semibold">기업 상세정보</FormLabel>
                  <p className="text-sm text-base-primary-normal">
                    {textAreaRef ? textAreaRef.current?.value.length : '0'}/1,500
                  </p>
                </div>
                <FormControl>
                  <Textarea
                    placeholder="해당 업무에 대한 상세한 내용을 작성해주세요."
                    className="resize-none h-52"
                    {...field}
                    ref={textAreaRef}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="work_description_file"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">상세정보 파일</FormLabel>
                <FormControl>
                  <Input
                    className={cn('hover:cursor-pointer hover:border hover:border-brand-primary-light')}
                    type="file"
                    {...field}
                  />
                </FormControl>
                <FormDescription>상세공고에 보여줄 내용을 업로드해주세요.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={() => setFormState(2)} variant={'outline'} className="w-2/6 mr-2">
            이전
          </Button>
          <Button className="w-3/5" type="submit" size="lg">
            등록하기
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default Step3
