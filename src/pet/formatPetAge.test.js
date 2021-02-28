import {formatPetAge} from './formatPetAge'

test('no birth date should return "Unknown"', () => {
  expect(formatPetAge()).toBe('Unknown')
  expect(formatPetAge(false)).toBe('Unknown')
  expect(formatPetAge(undefined)).toBe('Unknown')
  expect(formatPetAge(null)).toBe('Unknown')
  expect(formatPetAge(0)).toBe('Unknown')
})

test.each([
  ['2021-01-01', '2021-01-01', 'Newly born'],
  ['2021-01-01', '2021-01-02', '1 Day old'],
  ['2021-01-01', '2021-01-03', '2 Days old'],
  ['2021-01-01', '2021-02-01', '1 Month old'],
  ['2021-01-01', '2021-03-01', '2 Months old'],
  ['2021-01-01', '2021-03-31', '2 Months old'],
  ['2021-01-01', '2021-11-31', '10 Months old'],
  ['2021-01-01', '2021-12-31', '11 Months old'],
  ['2021-01-01', '2022-01-01', '1 Year old'],
  ['2021-01-01', '2022-02-01', '1.1 Years old'],
  ['2021-01-01', '2022-02-01', '1.1 Years old'],
  ['2021-01-01', '2023-01-01', '2 Years old'],
  ['2021-01-01', '2025-01-01', '4 Years old'],
])(
  'now=%s and birth date %s should return "%s"',
  (now, birthDate, expectFormat) => {
    expect(formatPetAge(birthDate, now)).toBe(expectFormat)
  }
)
