import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { certificationId: string } }) {
  try {
    const certificationId = params.certificationId
    // 자격증 상세 조회
    const certRes = await fetch(`http://kdt-please.store/certs/${certificationId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const certData = await certRes.json()
    return NextResponse.json({ data: certData })
  } catch (error) {
    return NextResponse.error()
  }
}
