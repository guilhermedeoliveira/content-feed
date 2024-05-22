import type { NextApiRequest, NextApiResponse } from 'next'

import { sortItemsByKeyDescending } from '@/helpers/array'
import { ContentCard } from '@/types'

export async function getData() {
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

  const { contentCards: cards } = data
  const sortedCards = sortItemsByKeyDescending(cards, 'metadata.priority')

  return sortedCards
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentCard[]>
) {
  try {
    const jsonData = await getData()
    res.status(200).json(jsonData)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
