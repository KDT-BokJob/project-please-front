import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { companyId: string } }) {
  try {
    const companyId = params.companyId
    // 기업 조회
    const companyRes = await fetch(`http://kdt-please.store/company/${companyId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const companyData = await companyRes.json()
    console.log(companyData)
    return NextResponse.json({ data: companyData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
