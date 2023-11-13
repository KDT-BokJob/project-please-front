'use client'
import React, { useRef } from 'react'
import * as z from 'zod'
import { jobPostingFormSchema3 } from '@/lib/zod-schema/jop-posting'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'

const formSchema = jobPostingFormSchema3

function Step3() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
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
          <Button type="submit" size="lg">
            등록하기
          </Button>
        </form>
      </Form>
    </section>
  )
}

export default Step3
