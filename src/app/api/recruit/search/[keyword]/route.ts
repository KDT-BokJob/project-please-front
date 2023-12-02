import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 공고 검색
    const searchRecruitRes = await fetch(`http://kdt-please.store/recruit/search/${keyword}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const searchRecruitData = await searchRecruitRes.json()
    console.log(searchRecruitData)
    return NextResponse.json({ data: searchRecruitData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
