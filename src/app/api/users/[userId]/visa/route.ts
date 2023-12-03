import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // 내 비자 정보 조회
    const userVisaRes = await fetch(`http://kdt-please.store/users/${userId}/visa`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const userVisaData = await userVisaRes.json()
    return NextResponse.json({ data: userVisaData })
  } catch (error) {
    return NextResponse.error()
  }
}
