'use client'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { jobPostingFormPreview } from '@/lib/zod-schema/jop-posting'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  ChevronLeft,
  PercentIcon,
  KRWIcon,
  BriefcaseIcon,
  VisaIcon,
  ReloadIcon,
  Check,
  UpdownIcon,
  CalendarIcon,
} from '@/lib/icons'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { CustomCheckbox } from '@/app/employer/job-posting/create/CustomCheckbox'
import { cn } from '@/lib/utils'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Command, CommandInput, CommandEmpty, CommandGroup, CommandItem } from '@/components/ui/command'
import { Calendar } from '@/components/ui/calendar'
import { addDays, format, startOfDay } from 'date-fns'

const jobData = {
  recruit_id: 1,
  company_id: 123,
  job_code: 'a123',
  title: '코딩 가르쳐주실 분 급구',
  content: '세부 내용',
  create_at: '작성 날짜',
  expired_at: '1월13일',
  salary: '3000000',
  work_type: '제조업',
  work_location: '서울특별시/마포구',
  work_start_data: '근무시작일',
  work_end_data: '근무종료일',
  visa_type: ['E-7', 'E-9'],
  work_period: '6개월',
  work_days_week: ['mon', 'tue'],
  is_work_week_agreement: true,
  work_start_hour: '09:00',
  work_end_hour: '18:00',
  is_work_time_agreement: true,
  gender: 'female',
  salary_type: '월급',
  contry: 'KR',
  recruited_number: 3,
  is_visa_transform: 'possible',
  bookmark: true,
  employee_count: 10,
  foreign_employee_count: 3,
}

const profileData = {
  company_id: 1234,
  user_id: 12345,
  name: 'please company',
  employee_count: 6,
  foreign_employee_count: 2,
  phone: '010-6501-7742',
  category: 'Web Programming',
  email: 'seunghyo7742@naver.com',
  address: 'Gwanak gu - bongcheon-dong',
  profile_image: '/test_img/company_profile_img.png',
}

const Weekdays = [
  { id: 'mon', label: '월' },
  { id: 'tue', label: '화' },
  { id: 'wed', label: '수' },
  { id: 'thu', label: '목' },
  { id: 'fri', label: '금' },
  { id: 'sat', label: '토' },
  { id: 'sun', label: '일' },
  { id: 'undecided', label: '미정' },
]

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

const salary_type_define = new Map([
  ['시급', 'hour'],
  ['주급', 'week'],
  ['월급', 'month'],
  ['연봉', 'year'],
])

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

const timeOptions = generateTimeOptions()
const formSchema = jobPostingFormPreview

function Detail({ type, value, className }: { type: string; value: any; className?: string }) {
  return (
    <span className="flex w-full justify-between">
      <p className={`font-semibold text-sm ${className}`}>{type}</p>
      <p className="text-sm text-base-secondary-dark">{value}</p>
    </span>
  )
}
const today = startOfDay(new Date())
export default function EmpoyerJobPostingPreviewEditPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: jobData.title,
      name: profileData.name,
      expired_at: `~${jobData.expired_at}`,

      job: jobData.work_type,
      visa_type: jobData.visa_type.join(' '),
      isVisa_transform: jobData.is_visa_transform,
      salary: +jobData.salary,
      salary_type: salary_type_define.get(jobData.salary_type),

      work_period: {
        from: today,
        to: addDays(today, 7),
      },
      work_days_week: jobData.work_days_week,
      work_start_hour: jobData.work_start_hour,
      work_end_hour: jobData.work_end_hour,
      is_worktime_flexible: jobData.is_work_time_agreement,
      prefered_nationality: jobData.contry,
      gender: jobData.gender,
      count: jobData.recruited_number,
      work_location: jobData.work_location,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // props.setFormState(2)
  }
  return (
    <>
      <div className="px-2 mb-2">
        <ChevronLeft size="2rem" />
      </div>
      <div className="w-full mb-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover shadow-lg"
          />
        </AspectRatio>
      </div>
      <Form {...form}>
        <form className="flex flex-col gap-3 px-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="mb-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormControl>
                    <Input
                      className="font-bold text-xl border-none focus-visible:ring-opacity-0 p-0 h-auto"
                      placeholder="공고 제목을 입력해주세요."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <span className="flex justify-between w-full">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="text-base-secondary-light font-semibold text-sm border-none focus-visible:ring-opacity-0 h-0 px-0"
                        placeholder="기업명을 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expired_at"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="border-none focus-visible:ring-opacity-0 h-0 text-right px-0"
                        placeholder="공고 마감일을 입력해주세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </span>
          </div>
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center space-y-0">
                <span className="flex gap-2">
                  <BriefcaseIcon />
                  <FormLabel className="font-semibold text-sm pl-3 text-brand-primary-normal px-0">제조업</FormLabel>
                </span>
                <FormControl>
                  <Input
                    className="inline-block w-fit border-none focus-visible:ring-opacity-0 h-0 text-right px-0"
                    placeholder="직무를 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <FormField
            control={form.control}
            name="visa_type"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center space-y-0">
                <span className="flex gap-2">
                  <VisaIcon />
                  <FormLabel className="font-semibold text-sm pl-3 text-brand-primary-normal px-0">비자</FormLabel>
                </span>
                <FormControl>
                  <Input
                    className="inline-block w-fit border-none focus-visible:ring-opacity-0 h-0 text-right px-0"
                    placeholder="비자를 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <FormField
            control={form.control}
            name="isVisa_transform"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center space-y-0">
                <span className="flex gap-2">
                  <ReloadIcon />
                  <FormLabel className="font-semibold text-sm pl-3 text-brand-primary-normal px-0">비자 전환</FormLabel>
                </span>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="possible" />
                      </FormControl>
                      <FormLabel className="font-normal">가능</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="impossible" />
                      </FormControl>
                      <FormLabel className="font-normal">불가능</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <span className="flex gap-2">
            <PercentIcon />
            <Detail
              className="text-brand-primary-normal"
              type="외국인 비율"
              value={`${(jobData.foreign_employee_count / jobData.employee_count) * 100}%`}
            />
          </span>
          <hr />
          <span className="flex">
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center space-y-0 w-full">
                  <span className="flex gap-2">
                    <KRWIcon />
                    <FormLabel className="font-semibold text-sm pl-3 text-brand-primary-normal px-0">급여</FormLabel>
                  </span>
                  <FormControl>
                    <Input
                      className="inline-block w-fit border-none focus-visible:ring-opacity-0 h-0 text-right"
                      placeholder="급여를 입력해주세요."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary_type"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center min-w-[60px] space-y-0 px-0">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="border-none focus:ring-opacity-0 p-0 before:content-['/'] before:pr-1 h-auto">
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
          </span>
          <p className="font-semibold mt-8">근무 조건</p>
          <div className="flex flex-col">
            <FormField
              control={form.control}
              name="work_period"
              render={({ field }) => (
                <FormItem className="flex justify-between items-center w-full space-y-0">
                  <FormLabel className="text-sm font-semibold text-brand-primary-normal">기간</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn('font-normal h-10 px-4', !field.value && 'text-muted-foreground')}
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
              name="is_worktime_flexible"
              render={({ field }) => (
                <FormItem className="flex flex-row items-end gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-2 leading-none">
                    <FormLabel>기간 협의 가능</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr />
          <FormField
            control={form.control}
            name="work_days_week"
            render={({ field }) => {
              return (
                <FormItem>
                  <span className="flex items-center justify-between">
                    <FormLabel className="font-semibold pt-1 text-brand-primary-normal">요일</FormLabel>
                    <p>주 {field.value.length}일</p>
                  </span>

                  <div className="flex justify-center gap-1">
                    {Weekdays.map((item) => (
                      <FormField
                        key={item.id}
                        control={form.control}
                        name="work_days_week"
                        render={({ field }) => {
                          return (
                            <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <CustomCheckbox
                                  checked={field.value?.includes(item.id)}
                                  onCheckedChange={(checked) => {
                                    checked
                                      ? field.onChange([...field.value, item.id])
                                      : field.onChange(field.value?.filter((value) => value !== item.id))
                                  }}
                                >
                                  {item.label}
                                </CustomCheckbox>
                              </FormControl>
                            </FormItem>
                          )
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )
            }}
          />
          <hr />
          <div className="flex flex-col">
            {/* <span className="flex items-center justify-between"> */}
            <p className="text-sm font-semibold text-brand-primary-normal">시간</p>
            <div className="flex items-center gap-3">
              <p className="text-sm">시작</p>
              <FormField
                control={form.control}
                name="work_start_hour"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[7rem] ">
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
              <p className="text-sm before:content-['-'] before:pr-2">마감</p>
              <FormField
                control={form.control}
                name="work_end_hour"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-[7rem]">
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
            {/* </span> */}
            <FormField
              control={form.control}
              name="is_worktime_flexible"
              render={({ field }) => (
                <FormItem className="flex flex-row items-end gap-2">
                  <FormControl>
                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <div className="space-y-2 leading-none">
                    <FormLabel>시간 협의 가능</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <hr />

          <FormField
            control={form.control}
            name="prefered_nationality"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center">
                <FormLabel className="font-semibold text-brand-primary-normal">희망 국적</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className="w-3/5 py-2 text-sm font-medium rounded-md "
                        size={'xs'}
                        role="combobox"
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
          <hr />

          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-0 flex items-center justify-between">
                <FormLabel className="font-semibold text-brand-primary-normal">모집 성별</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex items-center gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="font-normal">남자</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">여자</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="any" />
                      </FormControl>
                      <FormLabel className="font-normal">성별무관</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <FormField
            control={form.control}
            name="count"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center space-y-0">
                <FormLabel className="font-semibold min-w-[60px] text-brand-primary-normal">모집 인원</FormLabel>
                <FormControl>
                  <Input
                    className="border-none focus-visible:ring-opacity-0 h-0 text-right"
                    placeholder="모집인원 수를 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <FormField
            control={form.control}
            name="work_location"
            render={({ field }) => (
              <FormItem className="flex justify-between items-center space-y-0">
                <FormLabel className="font-semibold min-w-[60px] text-brand-primary-normal">위치</FormLabel>
                <FormControl>
                  <Input
                    className="border-none focus-visible:ring-opacity-0 h-0 text-right"
                    placeholder="지번, 도로명, 건물명을 입력해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <hr />
          <div className="flex flex-col">
            <h2 className="font-bold text-lg text-base-primary-normal">Job Description</h2>
            <p>{jobData.content}</p>
          </div>
          <span className="flex justify-center gap-2">
            <Button
              className="w-2/3 h-12 rounded-lg font-bold text-base text-base-bright-light bg-brand-primary-normal shadow-md"
              type="submit"
              size="lg"
            >
              저장하기
            </Button>
          </span>
        </form>
      </Form>
    </>
  )
}
