'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { jobPostingFormSchema } from '@/lib/zod-schema/jop-posting'

const visas = [
  {
    id: '1',
    label: 'E9',
  },
  { id: '2', label: 'E7' },
  { id: '3', label: 'H2' },
  {
    id: '4',
    label: 'F4',
  },
]

const formSchema = jobPostingFormSchema

export default function Step1({
  setFormData,
  setFormState,
  formData,
}: {
  setFormData: any
  setFormState: any
  formData: any
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: formData.name,
      title: formData.title,
      phone: formData.phone,
      gender: formData.gender,
      availableVisa: formData.availableVisa,
      isVisaTransform: formData.isVisaTransform,
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    setFormData((prevData: any) => ({ ...prevData, ...values }))
    setFormState(2)
  }

  return (
    <section>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <div className="h-28">
                <FormItem>
                  <FormLabel className="font-semibold ">공고 제목 *</FormLabel>
                  <FormControl>
                    <Input placeholder="공고 제목을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <div className="h-[108px]">
                <FormItem>
                  <FormLabel className="font-semibold ">기업명 *</FormLabel>
                  <FormControl>
                    <Input placeholder="기업명을 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <div className="h-[108px]">
                <FormItem>
                  <FormLabel className="font-semibold ">연락처 *</FormLabel>
                  <FormControl>
                    <Input placeholder="연락처를 입력해주세요." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <div className="h-[84px] mb-2">
                <FormItem className="space-y-3">
                  <FormLabel className="font-semibold ">채용 성별</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} className="flex items-center gap-4">
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
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="availableVisa"
            render={() => (
              <div className="h-[176px]">
                <FormItem>
                  <FormLabel className="font-semibold ">지원가능 비자</FormLabel>
                  {visas.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name="availableVisa"
                      render={({ field }) => {
                        return (
                          <FormItem key={item.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.label)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.label])
                                    : field.onChange(field.value?.filter((value) => value !== item.label))
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
              </div>
            )}
          />
          <FormField
            control={form.control}
            name="isVisaTransform"
            render={({ field }) => (
              <FormItem className="space-y-3 h-[100px]">
                <FormLabel className="font-semibold ">비자 취득 및 전환 지원 여부</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} className="flex items-center gap-4">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={true} />
                      </FormControl>
                      <FormLabel className="font-normal">지원</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={false} />
                      </FormControl>
                      <FormLabel className="font-normal">미지원</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" size="lg">
            다음
          </Button>
        </form>
      </Form>
    </section>
  )
}
