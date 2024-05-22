import { NextApiRequest, NextApiResponse } from 'next'

import { ContentCard } from '@/modules/feed/types'
import { feedService } from '@/modules/feed/data/service'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContentCard[]>
) {
  try {
    const feedData = await feedService()
    res.status(200).json(feedData)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
