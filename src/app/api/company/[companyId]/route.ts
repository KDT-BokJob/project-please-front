import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { companyId: string } }) {
  try {
    const companyId = params.companyId
    // 기업 조회
    const companyRes = await fetch(`http://kdt-please.store/company/${companyId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const companyData = await companyRes.json()
    return NextResponse.json({ data: companyData })
  } catch (error) {
    return NextResponse.error()
  }
}
