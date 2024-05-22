import { feedRepository } from '../repository'
import fetch from 'node-fetch'

jest.mock('node-fetch')

describe('feedRepository integration tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should fetch data from the API successfully', async () => {
    const mockResponse = {
      json: jest.fn().mockResolvedValue({
        /* mock data */
      }),
    }

    fetch.mockResolvedValue(mockResponse)

    const data = await feedRepository()

    expect(fetch).toHaveBeenCalledWith(
      'https://stoplight.io/mocks/engine/fullstack-spec/52502230/content',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Prefer: 'code=200, dynamic=true',
        },
      }
    )

    expect(data).toEqual({
      /* expected data */
    })
  })

  it('should handle errors from the API', async () => {
    const mockResponse = {
      status: 500,
      statusText: 'Internal Server Error',
    }

    fetch.mockResolvedValue(mockResponse)

    await expect(feedRepository()).rejects.toThrow('Internal Server Error')
  })
})
