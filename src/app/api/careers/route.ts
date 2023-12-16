import { NextResponse } from 'next/server'

// 경력 등록
export async function POST(request: Request) {
  try {
    const res = await request.json()
    const companyRes = await fetch(`http://kdt-please.store/spring/careers`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const companyData = await companyRes.json()
    console.log(companyData)
    return NextResponse.json({ data: companyData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
