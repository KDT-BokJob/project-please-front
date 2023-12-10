import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { applyId: string } }) {
  try {
    const applyId = params.applyId
    const applyRes = await fetch(`http://kdt-please.store/spring/apply/${applyId}`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const applyData = await applyRes.json()
    return NextResponse.json({ data: applyData, status: 'no' })
  } catch (error) {
    return NextResponse.error()
  }
}
