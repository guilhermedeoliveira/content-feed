import { NextApiRequest, NextApiResponse } from 'next'

import { ContentCard } from '@/modules/feed/types'
import { feedService } from '@/modules/feed/data/service'

type FeedResponse = ContentCard[] | { error: string }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeedResponse>
) {
  try {
    const feedData = await feedService()
    res.status(200).json(feedData as ContentCard[])
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
