import { feedRepository } from '../repository'

describe(feedRepository, () => {
  it('should fetch data from the external API and return it', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        contentCards: [
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            imageUri: 'https://picsum.photos/500/500',
            textData: {
              title: 'string',
              subTitle: 'string',
              body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
              author: {
                first: 'string',
                last: 'string',
              },
            },
            metadata: {
              priority: 0,
              publishDate: '2019-08-24T14:15:22Z',
            },
            comments: [
              {
                text: 'string',
                author: 'string',
                profilePic: 'https://picsum.photos/200',
                likes: 0,
              },
            ],
          },
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            imageUri: 'https://picsum.photos/500/500',
            textData: {
              title: 'string',
              subTitle: 'string',
              body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
              author: {
                first: 'string',
                last: 'string',
              },
            },
            metadata: {
              priority: 0,
              publishDate: '2019-08-24T14:15:22Z',
            },
            comments: [
              {
                text: 'string',
                author: 'string',
                profilePic: 'https://picsum.photos/200',
                likes: 0,
              },
            ],
          },
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            imageUri: 'https://picsum.photos/500/500',
            textData: {
              title: 'string',
              subTitle: 'string',
              body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
              author: {
                first: 'string',
                last: 'string',
              },
            },
            metadata: {
              priority: 0,
              publishDate: '2019-08-24T14:15:22Z',
            },
            comments: [
              {
                text: 'string',
                author: 'string',
                profilePic: 'https://picsum.photos/200',
                likes: 0,
              },
            ],
          },
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            imageUri: 'https://picsum.photos/500/500',
            textData: {
              title: 'string',
              subTitle: 'string',
              body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
              author: {
                first: 'string',
                last: 'string',
              },
            },
            metadata: {
              priority: 0,
              publishDate: '2019-08-24T14:15:22Z',
            },
            comments: [
              {
                text: 'string',
                author: 'string',
                profilePic: 'https://picsum.photos/200',
                likes: 0,
              },
            ],
          },
          {
            id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
            imageUri: 'https://picsum.photos/500/500',
            textData: {
              title: 'string',
              subTitle: 'string',
              body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
              author: {
                first: 'string',
                last: 'string',
              },
            },
            metadata: {
              priority: 0,
              publishDate: '2019-08-24T14:15:22Z',
            },
            comments: [
              {
                text: 'string',
                author: 'string',
                profilePic: 'https://picsum.photos/200',
                likes: 0,
              },
            ],
          },
        ],
      }),
    })

    const result = await feedRepository()

    expect(result).toEqual({
      contentCards: [
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          imageUri: 'https://picsum.photos/500/500',
          textData: {
            title: 'string',
            subTitle: 'string',
            body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
            author: {
              first: 'string',
              last: 'string',
            },
          },
          metadata: {
            priority: 0,
            publishDate: '2019-08-24T14:15:22Z',
          },
          comments: [
            {
              text: 'string',
              author: 'string',
              profilePic: 'https://picsum.photos/200',
              likes: 0,
            },
          ],
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          imageUri: 'https://picsum.photos/500/500',
          textData: {
            title: 'string',
            subTitle: 'string',
            body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
            author: {
              first: 'string',
              last: 'string',
            },
          },
          metadata: {
            priority: 0,
            publishDate: '2019-08-24T14:15:22Z',
          },
          comments: [
            {
              text: 'string',
              author: 'string',
              profilePic: 'https://picsum.photos/200',
              likes: 0,
            },
          ],
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          imageUri: 'https://picsum.photos/500/500',
          textData: {
            title: 'string',
            subTitle: 'string',
            body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
            author: {
              first: 'string',
              last: 'string',
            },
          },
          metadata: {
            priority: 0,
            publishDate: '2019-08-24T14:15:22Z',
          },
          comments: [
            {
              text: 'string',
              author: 'string',
              profilePic: 'https://picsum.photos/200',
              likes: 0,
            },
          ],
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          imageUri: 'https://picsum.photos/500/500',
          textData: {
            title: 'string',
            subTitle: 'string',
            body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
            author: {
              first: 'string',
              last: 'string',
            },
          },
          metadata: {
            priority: 0,
            publishDate: '2019-08-24T14:15:22Z',
          },
          comments: [
            {
              text: 'string',
              author: 'string',
              profilePic: 'https://picsum.photos/200',
              likes: 0,
            },
          ],
        },
        {
          id: '497f6eca-6276-4993-bfeb-53cbbbba6f08',
          imageUri: 'https://picsum.photos/500/500',
          textData: {
            title: 'string',
            subTitle: 'string',
            body: 'stringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringstringst',
            author: {
              first: 'string',
              last: 'string',
            },
          },
          metadata: {
            priority: 0,
            publishDate: '2019-08-24T14:15:22Z',
          },
          comments: [
            {
              text: 'string',
              author: 'string',
              profilePic: 'https://picsum.photos/200',
              likes: 0,
            },
          ],
        },
      ],
    })

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
  })

  it('should handle API errors gracefully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockRejectedValue(new Error('API Error')),
    })

    await expect(feedRepository()).rejects.toThrow('API Error')
  })
})
