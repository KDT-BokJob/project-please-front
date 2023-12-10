import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 해당 업종에 취업할 수 있는 비자 목록 조회 - ex) 농업
    const jobToVisaRes = await fetch(`http://kdt-please.store/spring/job/visa/${keyword}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const jobToVisaData = await jobToVisaRes.json()
    console.log(jobToVisaData)
    return NextResponse.json({ data: jobToVisaData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
