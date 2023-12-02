import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 내 자격증 리스트 조회
    const certMyListRes = await fetch(`http://kdt-please.store/certs/my/${resumeId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const certMyListData = await certMyListRes.json()
    console.log(certMyListData)
    return NextResponse.json({ data: certMyListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
