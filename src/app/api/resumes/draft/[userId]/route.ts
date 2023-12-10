import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    // 이력서 상세 조회
    const resumeDraftRes = await fetch(`http://kdt-please.store/spring/resumes/draft/${userId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const resumeDraftData = await resumeDraftRes.json()
    return NextResponse.json({ data: resumeDraftData, status: 'no' })
  } catch (error) {
    return NextResponse.error()
  }
}
