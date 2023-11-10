'use client'
import Header from '@/components/ui/Header'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { jobPostingFormSchema } from '@/lib/zod-schema/jop-posting'

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

const formSchema = jobPostingFormSchema

function page() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title:"",
      name:{profileData.name},

      username: "",
    },
  })
  return <></>
}

export default page
