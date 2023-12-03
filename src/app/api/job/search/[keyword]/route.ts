import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 업종명 검색 - ex) 서비스
    const searchJobRes = await fetch(`http://kdt-please.store/job/search/${keyword}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const searchJobData = await searchJobRes.json()
    return NextResponse.json({ data: searchJobData })
  } catch (error) {
    return NextResponse.error()
  }
}
