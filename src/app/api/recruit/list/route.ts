import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // 전체 공고 리스트 조회
    const totalRecruitListRes = await fetch(`http://kdt-please.store/recruit/list?page=1`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const totalRecruitListData = await totalRecruitListRes.json()
    console.log(totalRecruitListData)
    return NextResponse.json({ data: totalRecruitListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
