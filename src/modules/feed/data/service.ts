import { sortItemsByKeyDescending } from '@/lib/array'
import { feedRepository } from './repository'

export const feedService = async () => {
  const data = await feedRepository()

  const { contentCards: cards } = data
  const sortedCards = sortItemsByKeyDescending(cards, 'metadata.priority')

  return sortedCards
}
