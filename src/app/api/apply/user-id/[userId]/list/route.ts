import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    const applyUserListRes = await fetch(`http://kdt-please.store/apply/userId/${userId}/list?page=1`, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    const applyUserListData = await applyUserListRes.json()
    return NextResponse.json({ data: applyUserListData })
  } catch (error) {
    return NextResponse.error()
  }
}
