import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 내 자격증 리스트 조회
    const certMyListRes = await fetch(`http://kdt-please.store/certs/my/${resumeId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const certMyListData = await certMyListRes.json()
    return NextResponse.json({ data: certMyListData })
  } catch (error) {
    return NextResponse.error()
  }
}
