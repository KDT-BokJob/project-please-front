import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { companyId: string } }) {
  try {
    const companyId = params.companyId
    // 기업 공고 리스트 조회
    const recruitCompanyListRes = await fetch(`http://kdt-please.store/spring/recruit/company/list/${companyId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const recruitCompanyListData = await recruitCompanyListRes.json()
    console.log(recruitCompanyListData)
    return NextResponse.json({ data: recruitCompanyListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
