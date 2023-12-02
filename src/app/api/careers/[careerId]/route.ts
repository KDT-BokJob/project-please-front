import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { careerId: string } }) {
  try {
    const careerId = params.careerId
    // 경력 상세 조회
    const careerRes = await fetch(`http://kdt-please.store/careers/${careerId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const careerData = await careerRes.json()
    console.log(careerData)
    return NextResponse.json({ data: careerData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
