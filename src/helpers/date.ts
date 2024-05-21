export const formatRelativeTime = (date: string | Date): string => {
  const postDate = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diff = now.getTime() - postDate.getTime()

  const diffInSeconds = Math.floor(diff / 1000)
  const diffInMinutes = Math.floor(diffInSeconds / 60)
  const diffInHours = Math.floor(diffInMinutes / 60)
  const diffInDays = Math.floor(diffInHours / 24)
  const diffInWeeks = Math.floor(diffInDays / 7)
  const diffInMonths = Math.floor(diffInDays / 30)
  const diffInYears = Math.floor(diffInDays / 365)

  if (diffInSeconds < 60) {
    return 'just now'
  } else if (diffInMinutes < 60) {
    return `${diffInMinutes} minute${diffInMinutes !== 1 ? 's' : ''} ago`
  } else if (diffInHours < 24) {
    return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`
  } else if (diffInDays < 7) {
    return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`
  } else if (diffInWeeks < 5) {
    return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`
  } else if (diffInMonths < 12) {
    return `${diffInMonths} month${diffInMonths !== 1 ? 's' : ''} ago`
  } else {
    return `${diffInYears} year${diffInYears !== 1 ? 's' : ''} ago`
  }
}
