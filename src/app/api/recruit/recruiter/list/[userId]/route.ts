import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // 구인자가 공고 리스트 조회
    const recruitRecruiterListRes = await fetch(`http://kdt-please.store/recruit/recruiter/list/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const recruitRecruiterListData = await recruitRecruiterListRes.json()
    return NextResponse.json({ data: recruitRecruiterListData })
  } catch (error) {
    return NextResponse.error()
  }
}
