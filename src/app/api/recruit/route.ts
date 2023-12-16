import { NextRequest, NextResponse } from 'next/server'

//공고 등록
export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log({ data })

  try {
    const res = await fetch('http://kdt-please.store/spring/recruit', {
      headers: { Accept: 'application/json' },
      body: JSON.stringify({}),
    })
    const data = await res.json()
    console.log('Data:', data)
    return NextResponse.json({ data, status: 'ok' })
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return NextResponse.error()
  }
}
