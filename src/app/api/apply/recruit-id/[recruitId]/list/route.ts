import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { recruitId: string } }) {
  try {
    const recruitId = params.recruitId
    const applyRecruitListRes = await fetch(`http://kdt-please.store/spring/apply/recruitId/${recruitId}/list?page=1`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const applyRecruitListData = await applyRecruitListRes.json()
    console.log(applyRecruitListData)
    return NextResponse.json({ data: applyRecruitListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
