import type { NextApiRequest, NextApiResponse } from 'next'

import { cleanupString } from '@/helpers/string'
import { sortItemsByKeyDescending } from '@/helpers/array'
import data from '@/mocks'

type ResponseData = {
  message: string
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//   try {
//     // const result = await asyncCall()

//     const cleanupData = cleanupString(data)
//     const parsedData = JSON.parse(cleanupData)

//     const { contentCards: cards } = parsedData
//     const sortedCards = sortItemsByKeyDescending(cards, 'metadata.priority')

//     res.status(200).json(sortedCards)
//   } catch (err) {
//     res.status(500).json({ error: 'failed to load data' })
//   }
// }

export async function getData(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // const result = await asyncCall()

  const cleanupData = cleanupString(data)
  const parsedData = JSON.parse(cleanupData)

  const { contentCards: cards } = parsedData
  const sortedCards = sortItemsByKeyDescending(cards, 'metadata.priority')

  return sortedCards
}

export default async function handler(req, res) {
  try {
    const jsonData = await getData()
    res.status(200).json(jsonData)
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}
