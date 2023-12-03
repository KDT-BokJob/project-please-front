import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // ID로 내 정보 조회
    const userIdRes = await fetch(`http://kdt-please.store/users/userId/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const userIdData = await userIdRes.json()
    return NextResponse.json({ data: userIdData })
  } catch (error) {
    return NextResponse.error()
  }
}
