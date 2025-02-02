import diffInMonths from 'date-fns/differenceInMonths'
import diffInDays from 'date-fns/differenceInDays'

export function formatPetAge(birthDate, now) {
  if (!birthDate) {
    return 'Unknown'
  }

  now = new Date(now || new Date())
  birthDate = new Date(birthDate)

  const months = Math.abs(diffInMonths(birthDate, now))
  if (months === 0) {
    const days = Math.abs(diffInDays(birthDate, now))
    if (days === 0) {
      return 'Newly born'
    }
    if (days === 1) {
      return '1 Day old'
    }
    return `${days} Days old`
  }

  if (months >= 12) {
    if (months === 12) {
      return '1 Year old'
    }

    const fixedYears = (months / 12).toFixed(1)
    const intYears = parseInt(fixedYears, 10)
    return intYears === Number(fixedYears)
      ? `${intYears} Years old`
      : `${fixedYears} Years old`
  }

  return months === 1 ? '1 Month old' : `${months} Months old`
}
