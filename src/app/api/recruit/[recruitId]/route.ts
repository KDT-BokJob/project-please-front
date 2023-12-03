import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { recruitId: string } }) {
  try {
    const recruitId = params.recruitId
    // 공고 조회
    const recruitRes = await fetch(`http://kdt-please.store/recruit/${recruitId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const recruitData = await recruitRes.json()
    return NextResponse.json({ data: recruitData })
  } catch (error) {
    return NextResponse.error()
  }
}
