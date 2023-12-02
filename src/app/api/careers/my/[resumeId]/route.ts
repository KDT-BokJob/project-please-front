import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 내 경력 리스트 조회
    const careerResumeRes = await fetch(`http://kdt-please.store/careers/my/${resumeId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const careerResumeData = await careerResumeRes.json()
    console.log(careerResumeData)
    return NextResponse.json({ data: careerResumeData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
