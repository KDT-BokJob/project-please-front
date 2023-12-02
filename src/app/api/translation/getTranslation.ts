const key = process.env.NEXT_PUBLIC_TRANSLATOR_API_KEY
const endpoint = 'https://api.cognitive.microsofttranslator.com'
const location = 'koreacentral'

export async function getTranslation(text: any, lang: string) {
  const from_lang = 'ko'
  const to_lang = [lang]

  let params = new URLSearchParams()
  params.append('api-version', '3.0')
  params.append('from', from_lang)
  to_lang.forEach((lang) => params.append('to', lang))

  const url = `${endpoint}/translate?${params.toString()}`
  const options = {
    method: 'POST',
    headers: {
      'Ocp-Apim-Subscription-Key': key || '',
      'Ocp-Apim-Subscription-Region': location,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(text),
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (error) {
    console.log('translator error', error)
    throw error
  }
}
