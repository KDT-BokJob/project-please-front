import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // ID로 내 정보 조회
    const userIdRes = await fetch(`http://kdt-please.store/spring/users/userId/${userId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const userIdData = await userIdRes.json()
    return NextResponse.json({ data: userIdData, status: 'no' })
  } catch (error) {
    return NextResponse.error()
  }
}
