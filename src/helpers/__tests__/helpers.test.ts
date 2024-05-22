import { formatNumber } from '@/helpers/number'
import { formatRelativeTime } from '@/helpers/date'
import { sortItemsByKeyDescending } from '@/helpers/array'

describe('Helpers', () => {
  describe(sortItemsByKeyDescending, () => {
    interface Item {
      id: number
      metadata: {
        priority: number
      }
    }

    const items: Item[] = [
      { id: 1, metadata: { priority: 3 } },
      { id: 2, metadata: { priority: 1 } },
      { id: 3, metadata: { priority: 2 } },
    ]

    it('should sort items in descending order by metadata priority', () => {
      const sortedItems = sortItemsByKeyDescending(items, 'metadata.priority')
      expect(sortedItems).toEqual([
        { id: 1, metadata: { priority: 3 } },
        { id: 3, metadata: { priority: 2 } },
        { id: 2, metadata: { priority: 1 } },
      ])
    })

    it('should not modify the original array', () => {
      const originalItems = [...items]
      sortItemsByKeyDescending(items, 'metadata.priority')
      expect(items).toEqual(originalItems)
    })
  })
})
