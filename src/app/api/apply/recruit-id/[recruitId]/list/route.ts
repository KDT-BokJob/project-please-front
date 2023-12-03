import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { recruitId: string } }) {
  try {
    const recruitId = params.recruitId
    const applyRecruitListRes = await fetch(`http://kdt-please.store/apply/recruitId/${recruitId}/list?page=1`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const applyRecruitListData = await applyRecruitListRes.json()
    return NextResponse.json({ data: applyRecruitListData })
  } catch (error) {
    return NextResponse.error()
  }
}
