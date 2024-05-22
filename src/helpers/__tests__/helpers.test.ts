import { sortItemsByKeyDescending } from '@/helpers/array'
import { formatRelativeTime } from '@/helpers/date'
import { formatNumber } from '@/helpers/number'

describe('Helpers', () => {
  describe('Array', () => {
    describe(sortItemsByKeyDescending, () => {
      type Item = {
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

      it('should not sort items in ascending order by metadata priority', () => {
        const sortedItems = sortItemsByKeyDescending(items, 'metadata.priority')
        expect(sortedItems).not.toEqual([
          { id: 2, metadata: { priority: 1 } },
          { id: 3, metadata: { priority: 2 } },
          { id: 1, metadata: { priority: 3 } },
        ])
      })
    })
  })

  describe('Date', () => {
    describe(formatRelativeTime, () => {
      beforeAll(() => {
        jest.useFakeTimers()
      })

      afterAll(() => {
        jest.useRealTimers()
      })

      it('should return "just now" for dates within the last 59 seconds', () => {
        jest.setSystemTime(new Date('2024-05-22T12:00:00Z'))
        const date = new Date('2024-05-22T11:59:30Z')
        expect(formatRelativeTime(date)).toBe('just now')
      })

      it('should return "x days ago" for dates within the last week', () => {
        jest.setSystemTime(new Date('2024-05-22T12:00:00Z'))
        const date = new Date('2024-05-18T12:00:00Z')
        expect(formatRelativeTime(date)).toBe('4 days ago')
      })

      it('should return "x months ago" for dates within the last year', () => {
        jest.setSystemTime(new Date('2024-05-22T12:00:00Z'))
        const date = new Date('2023-11-22T12:00:00Z')
        expect(formatRelativeTime(date)).toBe('6 months ago')
      })

      it('should return "1 year ago" for dates 1 year ago', () => {
        jest.setSystemTime(new Date('2024-05-22T12:00:00Z'))
        const date = new Date('2023-05-22T12:00:00Z')
        expect(formatRelativeTime(date)).toBe('1 year ago')
      })
    })
  })

  describe('Number', () => {
    describe(formatNumber, () => {
      it('should format zero correctly', () => {
        const number = 0
        expect(formatNumber(number)).toBe('0')
      })

      it('should format numbers less than one with leading zero', () => {
        const number = 0.123
        expect(formatNumber(number)).toBe('0.123')
      })

      it('should format small numbers without commas', () => {
        const number = 123
        expect(formatNumber(number)).toBe('123')
      })

      it('should format large numbers with commas', () => {
        const number = 1234567890
        expect(formatNumber(number)).toBe('1,234,567,890')
      })

      it('should format negative numbers with commas', () => {
        const number = -1234567
        expect(formatNumber(number)).toBe('-1,234,567')
      })
    })
  })
})
