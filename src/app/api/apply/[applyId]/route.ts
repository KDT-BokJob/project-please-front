import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { applyId: string } }) {
  try {
    const applyId = params.applyId
    const applyRes = await fetch(`http://kdt-please.store/apply/${applyId}`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const applyData = await applyRes.json()
    return NextResponse.json({ data: applyData })
  } catch (error) {
    return NextResponse.error()
  }
}
