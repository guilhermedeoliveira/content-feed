export const feedRepository = async (): Promise<any> => {
  const response = await fetch(
    'https://stoplight.io/mocks/engine/fullstack-spec/52502230/content',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Prefer: 'code=200, dynamic=true',
      },
    }
  )

  const data = await response.json()
  return data
}
