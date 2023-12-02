import { NextRequest, NextResponse } from 'next/server'

<<<<<<< Updated upstream
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
=======
export async function GET(request: NextRequest, { params }: { params: { recruitId: string } }) {
  try {
    const recruitId = params.recruitId
    // 공고 조회
    const recruitRes = await fetch(`http://kdt-please.store/recruit/${recruitId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const recruitData = await recruitRes.json()
    console.log(recruitData)
    return NextResponse.json({ data: recruitData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
>>>>>>> Stashed changes
    return NextResponse.error()
  }
}
