import { digitVerifier } from './CPFDigitVerifier'
import { formatCpf } from './CPFFormatter'
import { Regions } from './stateEnum'
import { random } from './randomNumber'

export function generateCPF(region: any) {
  let regionDigit
  let digit10
  let digit11
  let cpf = []
  let cpf_number: string

  for (let i = 0; i < 8; i++) {
    cpf[i] = random(9)
  }

  if (Object.keys(Regions).includes(region)) {
    regionDigit = Regions[region]
  } else {
    regionDigit = random(9)
  }

  cpf.push(regionDigit)

  digit10 = digitVerifier(cpf)
  cpf.push(digit10)

  digit11 = digitVerifier(cpf)
  cpf.push(digit11)

  cpf_number = formatCpf(cpf.join(''))

  return cpf_number
}
