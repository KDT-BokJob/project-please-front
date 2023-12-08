'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { resumeKoreanSkillFormSchema } from '@/lib/zod-schema/resume/korean-skill'

const formSchema = resumeKoreanSkillFormSchema

type TopikStatus = { label_name: string; value: string }

const topikStatus: TopikStatus[] = [
  { label_name: 'Test Type', value: 'TOPIK1' },
  { label_name: 'Level', value: 'Level 1' },
  { label_name: 'TestDate', value: '2023-04-09' },
  { label_name: 'Pass', value: 'passed' },
]

const SELF_DIAGNOSIS_DATA = [
  'No Korean at all',
  'Basic language skills for survival',
  'Intermediate',
  'Bussiness',
  'Fluent',
  'Native',
]

const TOPIC_VALIDATION_DATA = {
  TOTAL_COUNT: '1',
  RESULT_CODE: 'Y',
  DATA_LIST: [
    {
      nfrcmntNm: '몽골국립대학교',
      sbjec_t7: '',
      sbjec_t6: '',
      rceptNo: '2283054896',
      sbjec_t8: '',
      issuSeq: '1',
      psexamSe: '2',
      opertnTme: '83',
      opertnSe: 'T',
      avrgScore: '22.00',
      opertnDt: '2022-07-10 04:00:00.000', //시험일
      sbjec_t1: '',
      issuDt: '2023-04-29 15:16:22.000', //발행일
      sbjec_t3: '',
      sbjec_t2: '',
      sbjec_t5: '',
      sbjec_t4: '',
      exmrNm: '몽골국립대학교 2관',
      levelCode: '',
      issuOrginlFile: '',
      koreaNm: '어트겅바야르 사랑거',
      issuDocNo: '0869523679881217',
      isLoad: 'Y',
      levelCrtrCodeNm: '',
      areaNm: '울란바토르',
      issuNo: '202304300016220726',
      gradNm: 'TOPIK Ⅱ', //시험종류
      updtDt: '',
      nationCode: '008',
      registIp: '',
      nfrcmntCd: '0801',
      updtId: '',
      levelCodeNm: '', //레벨 2급
      orginlIssuNo: '',
      registId: '',
      brthdy: '20030318',
      sexdstnCode: '2',
      opertnId: 'T00838',
      updtIp: '',
      areaCode: '01',
      sexdstnCodeNm: '여자(female)',
      nationCodeNm: '몽골',
      totScore: '66',
      registDt: '',
      exmneNo: '008018010049',
      psexamSeNm: '불합격',
      exmrCd: '0104',
      engNm: 'Otgonbayar Sarangoo',
    },
  ],
}

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
          <FormField
            control={form.control}
            name={'topicCheckNumber'}
            render={({ field }) => (
              <div className="flex flex-col justify-start items-center h-[60px]">
                <FormItem className={'space-y-3 w-full'}>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
                <FormMessage className="line-clamp-1" />
              </div>
            )}
          />

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
