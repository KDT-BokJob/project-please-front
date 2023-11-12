'use client'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { jobPostingFormSchema2 } from '@/lib/zod-schema/jop-posting'
import * as z from 'zod'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon, UpdownIcon } from '@/lib/icons'
import { Check } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'
import { DateRange } from 'react-day-picker'
import React from 'react'
import { addDays, format, startOfDay } from 'date-fns'
import { Calendar } from '@/components/ui/calendar'

const generateTimeOptions = () => {
  const timeOptions = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedHour = hour.toString().padStart(2, '0')
      const formattedMinute = minute.toString().padStart(2, '0')
      const timeString = `${formattedHour}:${formattedMinute}`
      timeOptions.push({ label: timeString, value: timeString })
    }
  }
  return timeOptions
}

const Weekdays = [
  { id: 'mon', label: '월' },
  { id: 'tue', label: '화' },
  { id: 'wed', label: '수' },
  { id: 'thu', label: '목' },
  { id: 'fri', label: '금' },
  { id: 'sat', label: '토' },
  { id: 'sun', label: '일' },
]
const timeOptions = generateTimeOptions()
const prefered_nationality = [
  { label: '해당없음', value: 'any' },
  { label: 'Vietnam', value: 'VN' },
  { label: 'China', value: 'CN' },
  { label: 'South Korea', value: 'KR' },
  { label: 'USA', value: 'US' },
  { label: 'Canada', value: 'CA' },
  { label: 'France', value: 'FR' },
  { label: 'Japan', value: 'JP' },
  { label: 'Nepal', value: 'NP' },
  { label: 'Philippines', value: 'PH' },
  { label: 'Cambodia', value: 'KH' },
]
const formSchema = jobPostingFormSchema2
const today = startOfDay(new Date())

function Step2() {
  const [isRegularWorker, setIsRegularWorker] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      work_period: {
        from: today,
        to: addDays(today, 7),
      },
      work_days: [],
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="prefered_nationality"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel className="font-semibold">근로자 희망국적</FormLabel>
                <FormDescription>채용하려는 근로자의 국적을 선택해주세요.</FormDescription>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="w-3/5 py-2 text-sm font-medium rounded-md "
                        size={'xs'}
                        role="combobox"
                        // className={cn(
                        //   "w-[200px] justify-between",
                        //   !field.value && "text-muted-foreground"
                        // )}
                      >
                        {field.value
                          ? prefered_nationality.find((item) => item.value === field.value)?.label
                          : '희망국적 선택'}
                        <UpdownIcon size={'20'} />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="국적 검색..." />
                      <CommandEmpty>해당 국적 없음.</CommandEmpty>
                      <CommandGroup>
                        {prefered_nationality.map((item) => (
                          <CommandItem
                            value={item.label}
                            key={item.value}
                            onSelect={() => {
                              form.setValue('prefered_nationality', item.value)
                            }}
                          >
                            <Check
                              className={cn('mr-2 h-4 w-4', item.value === field.value ? 'opacity-100' : 'opacity-0')}
                            />
                            {item.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">모집인원 수 *</FormLabel>
                <FormControl>
                  <Input placeholder="모집인원 수를 입력해주세요." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="work_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">근무 형태 *</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value)
                    setIsRegularWorker(value === 'regular_worker')
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="근무 형태" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="regular_worker">정규직</SelectItem>
                    <SelectItem value="contract_worker">계약직</SelectItem>
                    <SelectItem value="parttime_worker">파트타임</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col ">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-sm font-semibold ">급여 *</div>
              <p className="text-sm"> 2023년 최저시급 9,820원</p>
            </div>
            <div className="flex items-center gap-2">
              <FormField
                control={form.control}
                name="salary_type"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="급여 종류" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="hour">시급</SelectItem>
                        <SelectItem value="week">주급</SelectItem>
                        <SelectItem value="month">월급</SelectItem>
                        <SelectItem value="year">연봉</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              원
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-3 text-sm font-semibold">근무 시간</p>
            <div className="flex items-center gap-3">
              <p className="text-sm font-semibold ">시작</p>
              <FormField
                control={form.control}
                name="work_start_hour"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[8rem] ">
                          <SelectValue placeholder="시작 시간" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="h-60">
                        {timeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-sm font-semibold ">마감</p>
              <FormField
                control={form.control}
                name="work_end_hour"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[8rem]">
                          <SelectValue placeholder="마감 시간" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="h-60">
                        {timeOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="is_worktime_flexible"
              render={({ field }) => (
                <FormItem className="flex flex-row items-end gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-2 leading-none">
                    <FormLabel>근무시간 협의 가능</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
          <div>
            <FormField
              control={form.control}
              name="work_period"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="font-semibold">근무 기간</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          disabled={isRegularWorker}
                          variant={'outline'}
                          className={cn('w-full font-normal h-10', !field.value && 'text-muted-foreground')}
                        >
                          <CalendarIcon className="w-4 h-4 mr-2 opacity-50" />
                          {field.value.from ? (
                            field.value.to ? (
                              <>
                                {format(field.value.from, 'LLL dd y')} - {format(field.value.to, 'LLL dd, y')}
                              </>
                            ) : (
                              format(field.value.from, 'LLL dd y')
                            )
                          ) : (
                            <span>기간을 선택하세요</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="range"
                        selected={field.value}
                        onSelect={field.onChange}
                        defaultMonth={field.value.from}
                        numberOfMonths={1}
                        disabled={(date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="is_workperiod_flexible"
              render={({ field }) => (
                <FormItem className="flex flex-row items-end gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-2 leading-none">
                    <FormLabel>근무기간 협의 가능</FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="work_days"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="font-semibold ">근무 요일</FormLabel>
                  <FormDescription>근무 요일을 선택해주세요.</FormDescription>
                </div>
                {Weekdays.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="work_days"
                    render={({ field }) => {
                      return (
                        <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(field.value?.filter((value) => value !== item.id))
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">{item.label}</FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between">
            <Button className="w-2/6">이전</Button>
            <Button type="submit" className="w-3/5">
              다음
            </Button>
          </div>
        </form>
      </Form>
    </section>
  )
}

export default Step2
