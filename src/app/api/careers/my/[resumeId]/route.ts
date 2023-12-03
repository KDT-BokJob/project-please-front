import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 내 경력 리스트 조회
    const careerResumeRes = await fetch(`http://kdt-please.store/careers/my/${resumeId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const careerResumeData = await careerResumeRes.json()
    return NextResponse.json({ data: careerResumeData })
  } catch (error) {
    return NextResponse.error()
  }
}
