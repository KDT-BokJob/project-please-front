import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { resumeId: string } }) {
  try {
    const resumeId = params.resumeId
    // 이력서 상세 조회
    const resumeRes = await fetch(`http://kdt-please.store/spring/resumes/${resumeId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const resumeData = await resumeRes.json()
    console.log(resumeData)
    return NextResponse.json({ data: resumeData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
