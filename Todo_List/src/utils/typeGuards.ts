export function isValidAndNotPastDate(value: unknown): value is Date {
  return value instanceof Date && !isNaN(value.getTime()) && value > new Date();
}