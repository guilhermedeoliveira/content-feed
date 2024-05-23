import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import Home from '@/pages'
import { ContentCard } from '@/modules/feed/types'

const posts: ContentCard[] = [
  {
    id: '1',
    imageUri: 'https://picsum.photos/200',
    textData: {
      author: { first: 'Name', last: 'Last' },
      title: 'Test Title',
      subTitle: 'Test Subtitle',
      body: 'Test Body',
    },
    metadata: { publishDate: new Date().toISOString(), priority: 1 },
    comments: [
      {
        text: 'This is a comment',
        author: 'Author Comment',
        profilePic: 'https://picsum.photos/200',
        likes: 123,
      },
    ],
  },
]

jest.mock('../modules/feed/data/service', () => ({
  feedService: jest.fn().mockResolvedValue([
    {
      id: 1,
      textData: {
        author: { first: 'Name', last: 'Last' },
        title: 'Test Title',
        subTitle: 'Test Subtitle',
        body: 'Test Body',
      },
      metadata: { publishDate: new Date().toISOString() },
      imageUri: 'test-image.jpg',
      comments: [],
    },
  ]),
}))

describe('Home Component', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('renders posts fetched from feedService', async () => {
    render(<Home posts={posts} />)

    await screen.findByText('Test Title')
    await screen.findByText('Name Last')
    await screen.findByText('Test Subtitle')
    await screen.findByText('Test Body')
  })

  it('toggles comments section when "Show Comments" button is clicked', async () => {
    render(<Home posts={posts} />)

    await screen.findByText('Test Title')

    fireEvent.click(screen.getByText('Show Comments'))

    await screen.findByText('Hide Comments')
  })

  it('displays comments when "Show Comments" button is clicked', async () => {
    render(<Home posts={posts} />)

    await screen.findByText('Test Title')

    fireEvent.click(screen.getByText('Show Comments'))

    await screen.findByText('Hide Comments')

    await screen.findByText('This is a comment')
  })
})
