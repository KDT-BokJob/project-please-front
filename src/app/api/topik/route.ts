import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const topik = searchParams.get('topik')
  const formData = new FormData()
  formData.append('searchIssuDocNo', `${topik}`)
  formData.append('requstCmpnyNm', 'test')
  formData.append('requstChargerNm', 'test')
  try {
    const res = await fetch('https://www.topik.go.kr/TWGUID/TWGUID0111.do', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Cookie:
          'timezone=Asia/Seoul; WMONID=mddhb8pTKRZ; JSESSIONID=ei3nWaeoFUivdZ-a99JHq4D9b9PA7C0gnTlu8d_-.topik21; XTVID=A2310261333140440',
      },
      body: formData,
    })
    const data = await res.json()
    if (+data.TOTAL_COUNT) {
      return NextResponse.json({ data: data, status: 'ok' })
    } else {
      return NextResponse.json({ status: 'no' })
    }
  } catch (error) {
    return NextResponse.error()
  }
}
