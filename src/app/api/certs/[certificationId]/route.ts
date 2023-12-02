import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { certificationId: string } }) {
  try {
    const certificationId = params.certificationId
    // 자격증 상세 조회
    const certRes = await fetch(`http://kdt-please.store/certs/${certificationId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const certData = await certRes.json()
    console.log(certData)
    return NextResponse.json({ data: certData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
