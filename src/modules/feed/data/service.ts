import { sortItemsByKeyDescending } from '@/lib/array'
import { feedRepository } from './repository'
import { ContentCard } from '../types'

export const feedServicea = async () => {
  const data = await feedRepository()

  const { contentCards: cards } = data
  const sortedCards = sortItemsByKeyDescending(cards, 'metadata.priority')

  return sortedCards
}

export const feedService = async (): Promise<ContentCard[]> => {
  const data = await feedRepository()

  const { contentCards: cards } = data
  const sortedCards: ContentCard[] = sortItemsByKeyDescending(
    cards,
    'metadata.priority'
  )

  return sortedCards
}
