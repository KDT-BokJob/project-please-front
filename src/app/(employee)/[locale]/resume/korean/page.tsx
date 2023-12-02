'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { TFunction } from 'i18next'
import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import initTranslations from '@/app/i18n'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { resumeKoreanSkillFormSchema } from '@/lib/zod-schema/resume/korean-skill'

const formSchema = resumeKoreanSkillFormSchema

type Name = 'block1' | 'block2' | 'block3' | 'block4'
interface TopikResult {
  data: {
    DATA_LIST: [
      {
        nfrcmntNm: string
        sbjec_t7: string
        sbjec_t6: string
        rceptNo: string
        sbjec_t8: string
        issuSeq: string
        psexamSe: string
        opertnTme: string
        opertnSe: string
        avrgScore: string
        opertnDt: string
        sbjec_t1: string
        issuDt: string
        sbjec_t3: string
        sbjec_t2: string
        sbjec_t5: string
        sbjec_t4: string
        exmrNm: string
        levelCode: string
        issuOrginlFile: string
        koreaNm: string
        issuDocNo: string
        isLoad: string
        levelCrtrCodeNm: string
        areaNm: string
        issuNo: string
        gradNm: string
        updtDt: string
        nationCode: string
        registIp: string
        nfrcmntCd: string
        updtId: string
        levelCodeNm: string
        orginlIssuNo: string
        registId: string
        brthdy: string
        sexdstnCode: string
        opertnId: string
        updtIp: string
        areaCode: string
        sexdstnCodeNm: string
        nationCodeNm: string
        totScore: string
        registDt: string
        exmneNo: string
        psexamSeNm: string
        exmrCd: string
        engNm: string
      },
    ]
    RESULT_CODE: string
    TOTAL_COUNT: string
  }
  status: string
}

const SELF_DIAGNOSIS_DATA = [
  { levelCode: '01', description: 'No Korean at all' },
  { levelCode: '02', description: 'Basic language skills for survival' },
  { levelCode: '03', description: 'Intermediate' },
  { levelCode: '04', description: 'Bussiness' },
  { levelCode: '05', description: 'Fluent' },
  { levelCode: '06', description: 'Native' },
]

export default function page({ params: { locale } }: { params: { locale: string } }) {
  let tl = useRef<TFunction<['translation', ...string[]], undefined>>()
  const [currentLang, setCurrentLang] = useState('')

  useEffect(() => {
    const translate = async () => {
      const { t, language } = await initTranslations(locale, ['koreanSkill', 'common'])
      tl.current = t
      setCurrentLang(language)
    }
    translate()
  }, [])
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })
  const topikResult = useRef<TopikResult>()
  const [isTopik, setIsTopik] = useState(false)
  const [isNoToplk, setIsNoToplk] = useState(false)
  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!('selfDiagnosis' in values)) {
      const searchIssuDocNo = values.block1 + values.block2 + values.block3 + values.block4

      ;('use server')
      const getData = async (topik: string) => {
        const res = await fetch(`http://localhost:3000/api/topik?topik=${topik}`)
        topikResult.current = await res.json()
        if (topikResult.current?.status === 'ok') setIsTopik(true)
      }
      getData(searchIssuDocNo)
    } else {
      console.log(values)
    }
  }
  if (!tl.current) return null

  return (
    <>
      <h2 className="title-m mx-auto mt-[135px] mb-[70px]">{tl.current('Korean skill')}💬</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Visa */}
          <FormLabel>{tl.current('Topik number')}</FormLabel>
          {/* <div className="flex gap-1 items-center [&>*:not(:first-child)]:before:content-['-']"> */}
          <div className="flex items-center justify-start gap-1">
            {Object.keys(formSchema._def.options[0]._def.schema.shape)
              .slice(0, 4)
              .map((key, index: number) => (
                <FormField
                  key={`${key}_${index}`}
                  control={form.control}
                  name={`${key as Name}`}
                  render={({ field }) => (
                    <div className="flex flex-col justify-start items-center h-[60px]">
                      <div className="flex items-center">
                        {index !== 0 && <span className="text-base-secondary-normal">-</span>}
                        <FormItem className={'space-y-3'}>
                          <FormControl>
                            <Input {...field} value={field.value || ''} maxLength={4} />
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
            <Button
              type="button"
              variant={'outline'}
              className="w-full px-2"
              size={'mini'}
              onClick={() => !isTopik && setIsNoToplk(!isNoToplk)}
            >
              {tl.current("Don't have Topick")}
            </Button>
            <Button variant={'outline'} className="px-2 w-full" size={'mini'}>
              {tl.current('Get Confirm')}
            </Button>
          </div>
          {isTopik ? (
            <div className="flex flex-col gap-2 divide-y-2 divide-base-secondary-light">
              <div className="flex justify-between pt-2">
                <span>{tl.current('Test Type')}</span>
                <span>{topikResult.current?.data.DATA_LIST[0].gradNm}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>{tl.current('Level')}</span>
                <span>
                  {tl.current('Level')} {topikResult.current?.data.DATA_LIST[0].levelCode}
                </span>
              </div>
              <div className="flex justify-between pt-2">
                <span>{tl.current('Test Date')}</span>
                <span>{topikResult.current?.data.DATA_LIST[0].opertnDt.slice(0, 10)}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>{tl.current('Pass')}</span>
                <span>{topikResult.current?.data.DATA_LIST[0].psexamSe ? 'O' : 'X'}</span>
              </div>
            </div>
          ) : (
            <></>
          )}

          {isNoToplk ? (
            <FormField
              control={form.control}
              name="selfDiagnosis"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col gap-4 mb-8"
                    >
                      {SELF_DIAGNOSIS_DATA.map((level, index: number) => (
                        <FormItem
                          key={`${level.levelCode}_${index}`}
                          className="px-2 group flex items-center align-middle space-x-3 space-y-0 ring-2 ring-brand-primary-light rounded-md h-11 hover:bg-brand-primary-normal [&:has(input[checked])]:bg-brand-primary-normal "
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={`${level.levelCode}`}
                              // className="text-base-bright-normal checked:border-slate-200"
                              className="text-base-bright-normal border-base-bright-normal"
                            />
                          </FormControl>
                          <FormLabel className="label-m w-full h-full leading-[44px] group-hover:text-base-bright-normal group-[&:has(input[checked])]:text-base-bright-normal">
                            {tl.current && tl.current(level.description)}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ) : (
            <></>
          )}
        </form>
      </Form>
      {/* Submit button */}
      <div className="flex justify-between gap-4 mt-auto">
        <Button type="button" variant={'innerLine'} size={'lg'}>
          {tl.current('common:Back')}
        </Button>
        <Button type="submit" variant={'primary'} size={'lg'} onClick={form.handleSubmit(onSubmit)}>
          {tl.current('common:Next')}
        </Button>
      </div>
    </>
  )
}
