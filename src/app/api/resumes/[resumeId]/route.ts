import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 이력서 상세 조회
    const resumeRes = await fetch(`http://kdt-please.store/resumes/${resumeId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const resumeData = await resumeRes.json()
    return NextResponse.json({ data: resumeData })
  } catch (error) {
    return NextResponse.error()
  }
}