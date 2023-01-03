import { digitVerifier } from './CPFDigitVerifier'

export function generateCPF(region: string) {
  let regionDigit
  let digit10
  let digit11
  let cpf = []
  let cpf_number: string

  for (let i = 0; i < 8; i++) {
    cpf[i] = Math.floor(Math.random() * 9)
  }

  // Sim, esse switch case irá virar um hashmap quando eu tiver coragem pra refatorar
  switch (region.toUpperCase()) {
    case 'DF':
    case 'GO':
    case 'MS':
    case 'MT':
    case 'TO':
      regionDigit = 1
      break
    case 'AC':
    case 'AM':
    case 'AP':
    case 'PA':
    case 'RO':
    case 'RR':
      regionDigit = 2
      break
    case 'CE':
    case 'MA':
    case 'PI':
      regionDigit = 3
      break
    case 'AL':
    case 'PB':
    case 'PE':
    case 'RN':
      regionDigit = 4
      break
    case 'BA':
    case 'SE':
      regionDigit = 5
      break
    case 'MG':
      regionDigit = 6
      break
    case 'ES':
    case 'RJ':
      regionDigit = 7
      break
    case 'SP':
      regionDigit = 8
      break
    case 'PR':
    case 'SC':
      regionDigit = 9
      break
    case 'RS':
      regionDigit = 0
      break
    default:
      regionDigit = 1
      console.error(
        'Região inválida: ',
        region,
        ' Região selecionada automaticamente (DF)'
      )
  }
  cpf.push(regionDigit)

  digit10 = digitVerifier(cpf)
  cpf.push(digit10)

  digit11 = digitVerifier(cpf)
  cpf.push(digit11)

  cpf_number = cpf.join('')

  return cpf_number
}
