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
  ['2021-01-01', '2021-01-02', '1 Day'],
  ['2021-01-01', '2021-01-03', '2 Days'],
  ['2021-01-01', '2021-02-01', '1 Month'],
  ['2021-01-01', '2021-03-01', '2 Months'],
  ['2021-01-01', '2021-03-31', '2 Months'],
  ['2021-01-01', '2021-11-31', '10 Months'],
  ['2021-01-01', '2021-12-31', '11 Months'],
  ['2021-01-01', '2022-01-01', '1 Year'],
  ['2021-01-01', '2022-02-01', '1.1 Years'],
  ['2021-01-01', '2022-02-01', '1.1 Years'],
  ['2021-01-01', '2023-01-01', '2 Years'],
  ['2021-01-01', '2025-01-01', '4 Years'],
])(
  'now=%s and birth date %s should return "%s"',
  (now, birthDate, expectFormat) => {
    expect(formatPetAge(birthDate, now)).toBe(expectFormat)
  }
)
