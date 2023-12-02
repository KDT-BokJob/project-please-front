const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/recruit`

export async function getRecruitList(page: number) {
  let params = new URLSearchParams()
  params.append('page', page.toString())

  const url = `${URL}/list?${params}`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json', // Make sure this is set
    },
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log(result)
    return result
  } catch (error) {
    console.log('Could not get request list error', error)
    throw error
  }
}

export async function getRecruit(recruitId: number) {
  const url = `${URL}/${recruitId}`;
  
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch recruit with ID ${recruitId}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Error fetching recruit with ID ${recruitId}`, error);
    throw error;
  }
}