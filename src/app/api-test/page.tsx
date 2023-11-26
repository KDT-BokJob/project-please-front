import { getTranslation } from '@/app/api/translation/getTranslation'

function Page() {
  // recurit api 요청
  const getData = async (recruitId: number) => {
    try {
      const res = await fetch(`http://localhost:3000/api/recruit/${recruitId}`)
      const response = await res.json()
      console.log('response', JSON.stringify(response.data))

      // 번역 요청
      const beforeTranslate = [
        // { Text: response.data.jobName },
        // { Text: response.data.title },
        // { Text: response.data.content },
        { Text: JSON.stringify(response.data) },
      ]
      console.log(beforeTranslate)
      const targetLanguage = 'vi'
      const translatedText = await getTranslation(beforeTranslate, targetLanguage)
      translatedText.forEach((translation: any) => {
        console.log('번역결과:', translation.translations[0].text)
        console.log('json번역결과', JSON.parse(translation.translations[0].text))
      })
    } catch (error) {
      console.log('데이터 에러:', error)
    }
  }

  getData(1)

  return <div>api-test</div>
}

export default Page
