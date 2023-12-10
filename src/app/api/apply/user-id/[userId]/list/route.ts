import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest, { params }: { params: { userId: string } }) {
  try {
    const userId = params.userId
    const applyUserListRes = await fetch(`http://kdt-please.store/spring/apply/userId/${userId}/list?page=1`, {
      headers: {
        Accept: 'application/json',
      },
    })
    const applyUserListData = await applyUserListRes.json()
    console.log(applyUserListData)
    return NextResponse.json({ data: applyUserListData, status: 'no' })
  } catch (error) {
    console.log('??????????', error)
    return NextResponse.error()
  }
}
