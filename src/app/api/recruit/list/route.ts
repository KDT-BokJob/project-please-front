import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 전체 공고 리스트 조회
    const totalRecruitListRes = await fetch(`http://kdt-please.store/recruit/list?page=1`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const totalRecruitListData = await totalRecruitListRes.json()
    return NextResponse.json({ data: totalRecruitListData })
  } catch (error) {
    return NextResponse.error()
  }
}
