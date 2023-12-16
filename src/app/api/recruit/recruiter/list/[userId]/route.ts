import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // 구인자가 공고 리스트 조회
    const recruitRecruiterListRes = await fetch(`http://kdt-please.store/spring/recruit/recruiter/list/${userId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const recruitRecruiterListData = await recruitRecruiterListRes.json()
    console.log(recruitRecruiterListData)
    return NextResponse.json({ data: recruitRecruiterListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
