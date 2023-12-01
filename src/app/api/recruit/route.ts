import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const data = await request.formData()
  const companyId = data.get('companyId')
  const content = data.get('content')
  const expiredAt = data.get('expiredAt')
  const gender = data.get('gender')
  const jobName = data.get('jobName')
  const salary = data.get('salary')
  const tags = data.getAll('tags')
  const title = data.get('title')
  const workDaysWeek = data.get('workDaysWeek')
  const workEndDate = data.get('workEndDate')
  const workEndHour = data.get('workEndHour')
  const workLocation = data.get('workLocation')
  const workStartDate = data.get('workStartDate')
  const workStartHour = data.get('workStartHour')
  const workType = data.get('workType')

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recruit`, {
      headers: { Accept: 'application/json' },
      body: JSON.stringify({
        companyId: companyId,
        content: content,
        expiredAt: expiredAt,
        gender: gender,
        jobName: jobName,
        salary: salary,
        tags: tags,
        title: title,
        workDaysWeek: workDaysWeek,
        workEndDate: workEndDate,
        workEndHour: workEndHour,
        workLocation: workLocation,
        workStartDate: workStartDate,
        workStartHour: workStartHour,
        workType: workType,
      }),
    })
    const data = await res.json()
    console.log('Data:', data)
    return NextResponse.json({ data, status: 'ok' })
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return NextResponse.error()
  }
}
