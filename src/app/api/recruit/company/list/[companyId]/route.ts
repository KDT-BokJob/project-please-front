import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { companyId: string } }) {
  try {
    const companyId = params.companyId
    // 기업 공고 리스트 조회
    const recruitCompanyListRes = await fetch(`http://kdt-please.store/recruit/company/list/${companyId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const recruitCompanyListData = await recruitCompanyListRes.json()
    return NextResponse.json({ data: recruitCompanyListData })
  } catch (error) {
    return NextResponse.error()
  }
}
