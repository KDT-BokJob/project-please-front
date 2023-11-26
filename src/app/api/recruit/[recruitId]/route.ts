import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { recruitId: number } }) {
  const recruitId = params.recruitId
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/recruit/${recruitId}`, {
      headers: { Accept: 'application/json' },
    })
    const data = await res.json()
    console.log('Data:', data)
    return NextResponse.json({ data, status: 'ok' })
  } catch (error) {
    console.error('Error parsing JSON:', error)
    return NextResponse.error()
  }
}
