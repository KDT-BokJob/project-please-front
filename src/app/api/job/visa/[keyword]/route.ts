import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 해당 업종에 취업할 수 있는 비자 목록 조회 - ex) 농업
    const jobToVisaRes = await fetch(`http://kdt-please.store/job/visa/${keyword}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const jobToVisaData = await jobToVisaRes.json()
    return NextResponse.json({ data: jobToVisaData })
  } catch (error) {
    return NextResponse.error()
  }
}
