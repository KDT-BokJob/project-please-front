import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { keyword: string } }) {
  try {
    const keyword = params.keyword
    // 업종명 검색 - ex) 서비스
    const searchJobRes = await fetch(`http://kdt-please.store/job/search/${keyword}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const searchJobData = await searchJobRes.json()
    console.log(searchJobData)
    return NextResponse.json({ data: searchJobData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
