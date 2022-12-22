export function digitVerifier(partialCpf: Array<number | any>) {
  let digitSum = 0
  let digitRest
  let digit
  let j = 2

  for (let i = partialCpf.length - 1; i >= 0; i--) {
    digitSum += partialCpf[i] * j
    j++
  }

  digitRest = digitSum % 11
  digitRest < 2 ? (digit = 0) : null
  digitRest >= 2 ? (digit = 11 - digitRest) : null

  return digit
}
