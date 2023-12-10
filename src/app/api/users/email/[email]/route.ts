import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { email: string } }) {
  try {
    const email = params.email
    // Email로 내 정보 조회
    const userEmailRes = await fetch(`http://kdt-please.store/spring/users/email/${email}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const userEmailData = await userEmailRes.json()
    return NextResponse.json({ data: userEmailData, status: 'no' })
  } catch (error) {
    return NextResponse.error()
  }
}
