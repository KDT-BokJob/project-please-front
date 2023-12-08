import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { recruitId: string } }) {
  try {
    const recruitId = params.recruitId
    // 공고 조회
    const recruitRes = await fetch(`http://kdt-please.store/recruit/${recruitId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const recruitData = await recruitRes.json()
    console.log(recruitData)
    return NextResponse.json({ data: recruitData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
