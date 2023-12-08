import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 특정 비자로 취업할 수 있는 업종 리스트 조회 - 최대 5개
    const visaToJobRes = await fetch(`http://kdt-please.store/job/jobName/${keyword}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const visaToJobData = await visaToJobRes.json()
    console.log(visaToJobData)
    return NextResponse.json({ data: visaToJobData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
